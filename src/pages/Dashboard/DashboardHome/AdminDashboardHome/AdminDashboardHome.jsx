import { useQuery } from "@tanstack/react-query";
import {
  FaUsers,
  FaPaw,
  FaHeart,
  FaDonate,
  FaPauseCircle,
} from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import StatCard from "./StartCard";
import ActivityCard from "./ActivityCard";


const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["admin-dashboard-summary"],
    queryFn: async () => {
      const res = await axiosSecure.get("/dashboard/admin/summary");
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center mt-10">Loading admin dashboard...</p>;
  }

  const { stats, recentPets, recentCampaigns, recentDonations } = data;

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#002169]">
          Admin Dashboard
        </h1>
        <p className="text-gray-500">
          Platform overview & recent activities
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Users" value={stats.totalUsers} icon={<FaUsers />} />
        <StatCard title="Total Pets" value={stats.totalPets} icon={<FaPaw />} />
        <StatCard
          title="Adopted Pets"
          value={stats.adoptedPets}
          icon={<FaHeart />}
        />
        <StatCard
          title="Donation Amount"
          value={`৳${stats.totalDonationAmount}`}
          icon={<FaDonate />}
        />
        <StatCard
          title="Active Campaigns"
          value={stats.activeCampaigns}
          icon={<FaDonate />}
        />
        <StatCard
          title="Paused Campaigns"
          value={stats.pausedCampaigns}
          icon={<FaPauseCircle />}
        />
      </div>

      {/* Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ActivityCard title="Recent Pets">
          {recentPets.map((pet) => (
            <p key={pet._id} className="text-sm">
              {pet.petName} ({pet.category.value})
            </p>
          ))}
        </ActivityCard>

        <ActivityCard title="Recent Campaigns">
          {recentCampaigns.map((c) => (
            <p key={c._id} className="text-sm">
              {c.petName} —{" "}
              <span className="text-gray-500">{c.paused?"Paused":"Active"}</span>
            </p>
          ))}
        </ActivityCard>

        <ActivityCard title="Recent Donations">
          {recentDonations.map((d) => (
            <p key={d._id} className="text-sm">
              ৳{d.amount} — {d.donorName}
            </p>
          ))}
        </ActivityCard>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
