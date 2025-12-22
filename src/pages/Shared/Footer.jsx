import React from "react";
import PetLogo from "./PetLogo";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#002169] text-white grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  p-20 gap-10">
      <div className="">
        <div className="text-left w-[180px]">
          <PetLogo />
        </div>
        <p className="my-5 w-full" >Don't buy your pet or don't sell your pet. Just Adop your pet. Give me a safe and peaceful life of them. </p>
        <p>Follow Us On:</p>
        <div className="flex gap-3 my-4">
          <FaFacebook className="text-3xl" />
          <FaTwitter className="text-3xl" />
          <FaWhatsapp className="text-3xl" />
          <FaInstagram className="text-3xl" />
          <FaYoutube className="text-3xl" />
        </div>
      </div>
      <div className="">
        <h1 className="font-semibold text-xl mb-4" >Quick Links</h1>
        <p>Animal Rescue</p>
        <p className="my-2">Human Education</p>
        <p>Caregivers</p>
        <p className="my-2">New & Blog </p>
        <p>Gallery</p>
      </div>
      <div className="">
        <h1 className="font-semibold text-xl mb-4 " >Quick Links</h1>
        <p>Animal Rescue</p>
        <p className="my-2">Human Education</p>
        <p>Caregivers</p>
        <p className="my-2">New & Blog </p>
        <p>Gallery</p>
      </div>
      <div className=" ">
        <h1 className="font-semibold text-xl mb-4" >Contact</h1>
        <p>554 B, Uttora, Hospital Road, Dhake, Bangladesh</p>
        <p className="my-2">+839479483777</p>
        <p>petbuddy@gmail.com</p>
        
       
      </div>
    </div>
  );
};

export default Footer;
