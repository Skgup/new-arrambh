
import React from "react";
import Contact_us from "./Contact_us";
import Feedbackparent from "./Feedback/Feedbackparent";


const ContactPage = () => {
  return (
    <> <header className="bg-[#85132c] text-white py-6 px-6 lg:px-[9%] md:[8%]">
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold">Contact us</h1>
    </div>
  </header>
      <div className="bg-gray-50 py-16 px-6 lg:px-[9%] md:[8%]">
        <Contact_us />
        <Feedbackparent />
      </div>
     
    </>
  );
};

export default ContactPage;
