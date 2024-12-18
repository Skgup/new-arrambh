import React from "react";
import BlurredBackground from "./BlurredBackground";
import LocationMap from "./LocationMap";
import ContactDetails from "./ContactDetails";

const Contact_us = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      <div className="col-span-1">
        <BlurredBackground />
      </div>
      <div className="col-span-1">
        <LocationMap />
      </div>
      <div className="col-span-1">
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact_us;
