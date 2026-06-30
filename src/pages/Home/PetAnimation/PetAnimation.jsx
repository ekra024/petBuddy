import Marquee from "react-fast-marquee";
import image1 from "/marquee1.jpeg";
import image2 from "/marquee2.jpeg";
import image3 from "/marquee3.jpeg";
import image4 from "/marquee4.jpeg";
import image5 from "/marquee5.jpeg";
import image6 from "/marqee6.jpeg";
import image7 from "/marqee7.jpeg";
import image8 from "/marqee8.jpeg";

const PetAnimation = () => {
  return (
    <div>
      <Marquee speed={100} className="my-4">
        <div className="flex items-center justify-center space-x-4">
          <img loading="lazy" src={image1} alt="img1" className="w-30 h-26 rounded-full mx-10" />
          <img alt="img2" loading="lazy" src={image2} className="w-36 h-30 rounded-full" />
          <img alt="img3" loading="lazy" src={image3} className="w-36 h-36 rounded-full" />
          <img alt="img4" loading="lazy" src={image4} className="w-30 h-26 rounded-full" />
          <img alt="img5" loading="lazy" src={image5} className="w-50 h-46 rounded-full" />
          <img alt="img6" loading="lazy" src={image6} className="w-40 h-36 rounded-full" />
          <img alt="img7" loading="lazy" src={image7} className="w-30 h-26 rounded-full" />
          <img alt="img8" loading="lazy" src={image8} className="w-30 h-26 rounded-full" />
        </div>
      </Marquee>
    </div>
  );
};

export default PetAnimation;