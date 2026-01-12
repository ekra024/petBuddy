import React from "react";

const ContactMap = () => {
  return (
   <div className="w-9/12 mx-auto">
      <h2 className="text-center text-3xl my-5  font-bold">Our Area Map</h2>
       <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Contact Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.941210649615!2d-73.98565648459364!3d40.74881707932716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18e9e4d3%3A0x5d2d4c9e0a1c3e82!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1705027200000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="mt-10"></div>
   </div>
  );
};

export default ContactMap;
