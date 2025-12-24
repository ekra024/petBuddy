import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AdoptModal = ({ pet, onClose }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adoptionData = {
      petId: pet._id,
      petName: pet.petName,
      petImage: pet.pet_image,
      ownerEmail: pet.email,
      requesterName: user.displayName,
      requesterEmail: user.email,
      phone,
      address,
    };

    setLoading(true);
    await axiosSecure.post("/pet/adoptions", adoptionData);
    setLoading(false);

    onClose();

    Swal.fire({
      title: "Request Sucessful!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <h2 className="text-2xl font-bold baloo blue mb-4">
          Adopt {pet.petName}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* user name */}
          <input
            value={user.displayName}
            disabled
            className="input input-bordered w-full bg-gray-100"
          />

          {/* email */}
          <input
            value={user.email}
            disabled
            className="input input-bordered w-full bg-gray-100"
          />

          {/* phone */}
          <input
            required
            placeholder="Phone Number"
            className="input input-bordered w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* address */}
          <textarea
            required
            placeholder="Your Address"
            className="textarea textarea-bordered w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="btn btn-ghost">
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="btn bg-purple-600 text-white"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdoptModal;
