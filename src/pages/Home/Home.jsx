import React, { useEffect } from "react";
import Banner from "./Banner/Banner";
import PetAnimation from "./PetAnimation/PetAnimation";
import AvailablePets from "./AvailablePets/AvailablePets";
import Categorys from "./CategorySection/Categorys";
import ChoosenUs from "./ChooseUs/ChoosenUs";
import DiscoverCity from "./DiscoverCity/DiscoverCity";
import Slogan from "./Slogan/Slogan";
import Review from "./ReviewSection/Review";
import Article from "./ArticleSection/Article";
import Contact from "../Shared/Contact";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
 useEffect(() => {
   Aos.init({
    offset: 120,
    once:false,
    duration: 2000,
  })
 },[])
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
      <Contact />
    </div>
  );
};

export default Home;
