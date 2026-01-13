import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import DonationProgressBar from "./DonationProgressBar";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ViewDonationModal from "./ViewDonationModal";
import LoaddingPage from "../../../Loading/LoaddingPage";

const MyDonationCamp = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [campaignId, setCampaignId] = useState(null);
  
  const {
    data: campaigns = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myDonationCampaigns", user.email],
    enabled: !!user.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/campaigns/user/${user.email}`);
      return res.data;
    },
  });



  const handlePause = async (campId, currentStatus) => {
    const res = await axiosSecure.patch(`/campaigns/pause/${campId}`, {
      paused: !currentStatus,
    });
    if (res.data.modifiedCount > 0) {
      Swal.fire(
        "Success",
        `Campaign has been ${
          !currentStatus ? "paused" : "activated"
        } successfully`,
        "success"
      );
      refetch();
    }
  };

  const handleView = (id)=> {
    setCampaignId(id);
    setOpenModal(true);
  }

  if (isLoading) return <LoaddingPage />
  return (
   <div>
    {
      campaigns.length === 0 ? (
          <div className="flex justify-center items-center">
            No Data to Show.
          </div>):( <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-4 text-[#002169]">
        My Donation Campaigns
      </h2>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Pet Image</th>
            <th className="p-3 border">Pet Name</th>
            <th className="p-3 border">Max Amount</th>
            <th className="p-3 border">Progress</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map((camp) => {
            const percent = Math.min(
              (camp.donatedAmount / camp.targetAmount) * 100,
              100
            );

            return (
              <tr key={camp._id} className="hover:bg-gray-50">
                <td className="p-3 border">
                  {" "}
                  <div className="flex justify-center items-center">
                    <img
                      src={camp.petImage}
                      alt=""
                      className="w-26 h-20 flex justify-center items-center"
                    />
                  </div>
                </td>
                <td className="p-3 border font-medium">{camp.petName}</td>

                <td className="p-3 border font-mediun">
                  {camp.targetAmount} BDT
                </td>
                <td className="p-3 w-1/4 lg:w-1/2 border font-medium">
                  {" "}
                  <DonationProgressBar percent={percent} />
                </td>
                <td className="p-3 border ">
                  <button
                    onClick={() => handlePause(camp._id, camp.paused)}
                    className={`font-medium ${
                      camp.paused ? "text-purple-500" : "text-red-600"
                    } `}
                  >
                    {camp.paused ? "Unpause " : "Pause"}
                  </button>
                </td>
                <td className="p-3 border font-medium">
                  {" "}
                  <div className="flex justify-around gap-4">
                    <Link
                      to={`/dashboard/updateMyDonation/${camp._id}`}
                      className="border px-2 bg-[blue] text-white"
                    >
                      Edit
                    </Link>
                    <button onClick={()=>handleView(camp._id)} className=" px-2 border bg-[purple] text-white">
                      View
                    </button>
                    {openModal && (<ViewDonationModal setOpenModal={setOpenModal} campaignId={campaignId}  /> )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>)
    }
   </div>
  );
};

export default MyDonationCamp;
