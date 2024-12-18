import React from "react";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const contacts = [
    {
      name: "Berg Devien",
      position: "Head of Communications",
      email: "berg@consulting.wp",
      skype: "berg.consulting",
    },
    {
      name: "Priscilla Sorvino",
      position: "Head of Communications",
      email: "priscilla@consulting.wp",
      skype: "priscilla.consulting",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Contact</h2>
      <div className="w-16 h-1 bg-[#85132c] mb-6"></div>
      <div className="space-y-4 ">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
