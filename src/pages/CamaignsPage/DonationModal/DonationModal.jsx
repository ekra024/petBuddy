import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const DonationModal = ({campaign, closeModal}) => {
  
  const {user} = useAuth();
  const navigate = useNavigate();

  const {register, handleSubmit, formState:{errors}} = useForm({
    defautValues:{
      amount: "",
    }
  })
  

  const onSubmit = (data) => {
   
    Swal.fire({
      title: "Confirm Donation",
      text:`Donate $${data.amount} to ${campaign.petName}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Donate",
    }).then((result) => {
      if(result.isConfirmed){ 
        navigate("/stripe-payment", 
          {state: {amount: data.amount, campaignId: campaign._id, petName: campaign.petName}
        });   
        closeModal();    
      }
      
    })
  }
  
  return (
    <div>
      <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
        <div className='bg-white p-6 rounded-xl w-full max-w-md'>
          <h2 className="text-xl font-bold mb-4">Donate Now</h2>
       
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
              <label> Name </label>
              <input value={user.displayName} disabled className='w-full px-3 py-2 border rounded bg-gray-100' />
            </div>
            <div>
              <label> Email </label>
              <input value={user.email} disabled className='w-full px-3 py-2 border rounded bg-gray-100' />
            </div>
            <div>
              <label> Amount </label>
              <input type="number" {...register("amount", {required: true, min:1})} placeholder='Enter donation amount' className='w-full px-3 py-2 border rounded ' />
              {errors.amount && <p className='text-red-500'>Please enter a valid amount.</p>}
            </div>
            
            <div className='flex justify-end gap-3'>
              <button type='button' onClick={closeModal} className='px-4 py-2 border rounded' >
                Cancel
              </button>
              <button type="submit" className='px-4 py-2 bg-purple-600 text-white rounded' >
                Donate
              </button>
            </div>
          </form>
        
        </div>
      </div>
    </div>
  );
};

export default DonationModal;