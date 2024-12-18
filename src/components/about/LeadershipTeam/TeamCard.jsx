import React from "react";

const TeamCard = ({ name, position, photo }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-64
      
      object-cover" src={photo} alt={name} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#85132c]">{name}</h2>
        <p className="text-gray-600">{position}</p>
        
      </div>
    </div>
  );
};

export default TeamCard;
