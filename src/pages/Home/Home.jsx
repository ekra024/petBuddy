import React from "react";
import Banner from "./Banner";
import PetAnimation from "./PetAnimation";
import AvailablePets from "./AvailablePets/AvailablePets";
import Categorys from "./CategorySection/Categorys";
import ChoosenUs from "./ChooseUs/ChoosenUs";
import DiscoverCity from "./DiscoverCity/DiscoverCity";
import Slogan from "./Slogan/Slogan";

const Home = () => {
  return (
    <div className="baloo">
      <Banner />
      <PetAnimation />
      <Categorys />
      <ChoosenUs />
      <DiscoverCity />
      <Slogan />
    </div>
  );
};

export default Home;
