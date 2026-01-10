import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const StripePaymentPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {amount, campaignId} = state || {};
  const [processing, setProcessing] = useState(false);

  const {isLoading, data} = useQuery({
    queryKey: ['payment-intent', amount],
    enabled: !!amount,
    queryFn: async () => {
      const res = await axiosSecure.post(`/create-payment-intent`, {amount});
      return res.data;
    },

  })

  const clientSecret = data?.clientSecret;

  const handleSubmit = async ( e) => {
    e.preventDefault();
    if(!stripe || !elements || !clientSecret) {
      return;
    }
    setProcessing(true);
    const card = elements.getElement(CardElement);

    try{
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details:{
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
      if(result.error){
        Swal.fire("Donaion Failed", result.error.message,"error");
        setProcessing(false);
        return;
      }
      if(result.paymentIntent.status === "succeeded"){
        await axiosSecure.post('/donations',{
          campaignId,
          amount,
          donorName: user?.displayName,
          donorEmail: user?.email,
          transactionId: result.paymentIntent.id,
        });
       Swal.fire("Donation Successful", `Thank you for donating ${amount}TK.`, "success");
       navigate('/dashboard/myDonation')
      }
    }catch(err){
      console.log(err);
      Swal.fire("Error","Something went wrong. Please try again.","error");
    }finally{
      setProcessing(false);
    }
    

  }

  if(isLoading) return <p>Preparing payment...</p>
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto "
      >
        <CardElement className="p-2 border rounded" />
        <button
          className="btn btn-primary w-full"
          type="submit"
          disabled={!stripe || processing }
        >
          {processing? "Processing..." : `Donate ${state.amount} TK.`}
        </button>
        {}
      </form>
    </div>
  );
};

export default StripePaymentPage;
