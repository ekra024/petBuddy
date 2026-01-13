import { useQuery } from "@tanstack/react-query";
import { FaPaw, FaHeart, FaDonate, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import StatCard from "./StarCard";
import ActivityCard from "./ActivityCard";

const UserDashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["user-dashboard-summary", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/dashboard/user/summary/${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center mt-10">Loading dashboard...</p>;
  }

  const {stats, recentPets, recentDonations } = data;
 

  return (
    <div className="p-6 space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-[#002169]">
          Welcome back, {user.displayName || "Pet Lover"} 🐾
        </h1>
        <p className="text-gray-500">
          Here’s what’s happening with your pets and donations
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<FaPaw />} title="Pets Added" value={stats.totalPets} />
        <StatCard
          icon={<FaHeart />}
          title="Pets Adopted"
          value={stats.adoptedPets}
        />
        <StatCard
          icon={<FaDonate />}
          title="Donation Campaigns"
          value={stats.campaigns}
        />
        <StatCard
          icon={<FaDonate />}
          title="Total Donated"
          value={`৳${stats.totalDonationAmount}`}
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Pets */}
        <ActivityCard title="Recently Added Pets">
          {recentPets.length === 0 ? (
            <p className="text-gray-500">No pets added yet.</p>
          ) : (
            recentPets.map((pet) => (
              <div key={pet._id} className="flex justify-between text-sm">
                <span>{pet.name}</span>
                <span className="text-gray-400">{pet.category}</span>
              </div>
            ))
          )}
        </ActivityCard>

        {/* Recent Donations */}
        <ActivityCard title="Recent Donations">
          {recentDonations.length === 0 ? (
            <p className="text-gray-500">No donations yet.</p>
          ) : (
            recentDonations.map((donation) => (
              <div key={donation._id} className="flex justify-between text-sm">
                <span>{donation.transactionId}</span>
                <span className="font-medium">৳{donation.amount}</span>
              </div>
            ))
          )}
        </ActivityCard>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/dashboard/addAPet"
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#894b8d] text-white hover:opacity-90 transition"
        >
          <FaPlus /> Add a Pet
        </Link>

        <Link
          to="/dashboard/createDonation"
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#ffbe17] text-[#002169] hover:opacity-90 transition"
        >
          <FaPlus /> Create Donation Campaign
        </Link>
      </div>
    </div>
  );
};

export default UserDashboardHome;
