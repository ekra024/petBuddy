import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyDonationPage = () => {

  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {isLoading, data: myDonations = []} = useQuery({
    queryKey:['myDonations'],
    enabled: !!user?.email,
    queryFn: async() => {
      const res = await axiosSecure.get(`/donations/user/${user.email}`);
      return res.data;
    }
  })


  if(isLoading) return <h2>Loading...</h2>
  console.log(myDonations);
  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-4 text-[#002169]">
        My Donation Campaigns
      </h2>
      <table className="w-full border-collapse text-left">
        <thead className='text-center'>
          <tr className="bg-gray-100">
            <th className="p-3 border">Pet Name</th>
            <th className="p-3 border">Transaction Id</th>
            <th className="p-3 border">campaign Id</th>
            <th className="p-3 border">Amount</th>
          </tr>
        </thead>

        <tbody>
          {myDonations.map((donation) => (
            <tr key={donation._id} className="text-center">
              <td className="p-3 border">{donation.petName}</td>
              <td className="p-3 border">{donation.transactionId}</td>
              <td className="p-3 border">{donation.campaignId}</td>
              <td className="p-3 border">{donation.amount} Tk</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyDonationPage;