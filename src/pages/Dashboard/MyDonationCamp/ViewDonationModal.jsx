import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoaddingPage from "../../../Loading/LoaddingPage";

const ViewDonationModal = ({ campaignId, setOpenModal }) => {
  const id = campaignId;

  const axiosSecure = useAxiosSecure();

  const { isLoading, data: donations = [] } = useQuery({
    queryKey: ["donations", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/donations/campaign/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <LoaddingPage />;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <h2 className="text-2xl font-bold baloo blue mb-4">
          View who donated to this Campaign
        </h2>
        {donations.length === 0 ? (
          <div className="flex justify-center items-center">
            No donations yet.
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th className="p-3 border">Donor Name</th>
                <th className="p-3 border">Donation Amount</th>
                <th className="p-3 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => {
                return (
                  <tr key={donation._id}>
                    <td className="border p-3">{donation.donorName}</td>
                    <td className="border p-3">{donation.amount}</td>
                    <td className="border p-3">
                      {new Date(donation.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <div className="text-end">
          <button
            onClick={() => setOpenModal(false)}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDonationModal;
