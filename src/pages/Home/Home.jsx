import React from "react";
import Banner from "./Banner/Banner";
import PetAnimation from "./PetAnimation/PetAnimation";
import AvailablePets from "./AvailablePets/AvailablePets";
import Categorys from "./CategorySection/Categorys";
import ChoosenUs from "./ChooseUs/ChoosenUs";
import DiscoverCity from "./DiscoverCity/DiscoverCity";
import Slogan from "./Slogan/Slogan";
import Review from "./ReviewSection/Review";
import Article from "./ArticleSection/Article";

const Home = () => {
  return (
    <div className="baloo">
      <Banner />
      <PetAnimation />
      <Categorys />
      <ChoosenUs />
      <DiscoverCity />
      <Slogan />
      <Review />
      <Article />
    </div>
  );
};

export default Home;
