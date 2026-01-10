import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyAdoptionRequest = () => {

  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();

  const {isLoading, data: myAdoption=[], refetch} = useQuery({
    queryKey:['myAdoption'],
    enabled: !!user?.email,
    queryFn: async() => {
      const res = await axiosSecure.get(`/pet/adoptions/user/${user.email}`);
      return res.data;
    }

  })
  const handleCancel = async(id) => {
    await axiosSecure.patch(`/pet/adoptions/${id}`,{status: 'rejected'});
    Swal.fire({
      icon: 'success',
      title: 'Adoption Request Rejected Successfully',
      showConfirmButton: true,
    });
    refetch();
  }
  const handleAccept = async(id) => {
    await axiosSecure.patch(`/pet/adoptions/${id}`,{status: 'accepted'});
    Swal.fire({
      icon: 'success',
      title: 'Adoption Request Accepted Successfully',
      showConfirmButton: true,
    });
    refetch();
  }

  if(isLoading) return <h2>Loading...</h2>
  console.log(myAdoption);
  return (
     <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-4 text-[#002169]">
        Adoption Requests 
      </h2>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Pet Name</th>
            <th className="p-3 border">Requester Name</th>
            <th className="p-3 border">Requester Phone No</th>
            <th className='p-3 border'>Address</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {myAdoption.map((adoption) => (
            <tr key={adoption._id} className="text-center">
              <td className="p-3 border">{adoption.petName}</td>
              <td className="p-3 border">{adoption.requesterName}</td>
              <td className="p-3 border">{adoption.phone}</td>
              <td className='p-3 border'> {adoption.address} </td>
              <td className="p-3 border">{adoption.status}</td>
              {adoption.status === 'pending' ? (
                <td className="p-3 border">
                <div>
                  <button onClick={() => {handleAccept(adoption._id)}}className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 lg:mr-2 lg:mb-0 mb-2">
                    Accept
                  </button>
                  <button onClick={() => handleCancel(adoption._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Reject
                  </button>

                </div>
              </td>):(
                <td className="p-3 border"> No Actions Available </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAdoptionRequest;