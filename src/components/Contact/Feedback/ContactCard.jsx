import React from "react";

const ContactCard = ({ name, position, email, skype }) => {
  return (
    <div className="flex items-start space-x-4  bg-gray-100 rounded-lg shadow-md p-5">
      <div className="w-16 h-16 rounded-full bg-gray-300"></div>
      <div>
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-sm text-gray-600">{position}</p>
        <p className="text-sm text-blue-700">
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className="text-sm text-blue-700">
          Skype: <a href={`skype:${skype}?chat`}>{skype}</a>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
