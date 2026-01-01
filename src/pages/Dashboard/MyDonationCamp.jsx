import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import DonationProgressBar from "./DonationCamp/DonationProgressBar";
import { Link } from "react-router-dom";

const MyDonationCamp = () => {

  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  const {data: campaigns=[], isLoading} = useQuery({
    queryKey: ['myDonationCampaigns', user],
    enabled: !!user.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/campaigns/user/${user.email}`)
      return res.data;
    }
  })

  console.log(campaigns);

  if(isLoading) return <h1>Loading</h1>
  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-4 text-[#002169]">My Donation Campaigns</h2>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Pet Image</th>
            <th className="p-3 border">Pet Name</th>
            <th className="p-3 border">Max Amount</th>
            <th className="p-3 border">Progress</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            campaigns.map((camp) => {
              const donatedAmount = parseInt(camp.donatedAmount);
              const TargetAmount = parseInt(camp.targetAmount);

              const percent = Math.min(
                (donatedAmount/ TargetAmount)*100,
                100
              );

              return(
                <tr key={camp._id} className="hover:bg-gray-50">
                  <td className="p-3 border"> <div className="flex justify-center items-center">
                    <img src={camp.petImage} alt="" className="w-26 h-20 flex justify-center items-center" />
                    </div></td>
                    <td className="p-3 border font-medium">{camp.petName}</td>

                  <td className="p-3 border font-mediun">{camp.targetAmount} BDT</td>
                  <td className="p-3 w-1/4 lg:w-1/2 border font-medium" > <DonationProgressBar percent={percent} /> 
                   </td>
                  <td className="p-3 border font-medium"> <div className="flex justify-around gap-4">
                    <Link to={`/dashboard/updateMyDonation/${camp._id}`} className="border px-2 bg-[blue] text-white">Edit</Link>
                  <button className=" px-2 border bg-[purple] text-white">View</button></div> </td>
                  

                </tr>
              )

            })
          }
        </tbody>

      </table>
    </div>
  );
};

export default MyDonationCamp;
