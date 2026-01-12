import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleCampaign from "./SingleCampaign";
import useAxios from "../../../hooks/useAxios";
import LoaddingPage from "../../../Loading/LoaddingPage";

const Campaigns = () => {
  const axios = useAxios();

  const { data: campaigns = [], isLoading } = useQuery({
    queryKey: ["AvailableCamp"],
    queryFn: async () => {
      const res = await axios.get(`/campaigns/available`);
      return res.data;
    },
  });



  if (isLoading) return <LoaddingPage />;
  return (
    <div className="bg-blue-50 px-10 pt-5 pb-16">
      <h1 className="text-4xl text-[#002169] text-center font-semibold pb-10">Available Campaigns Here</h1>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {campaigns.map((camp) => (
          <SingleCampaign camp={camp} key={camp._id} />
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
