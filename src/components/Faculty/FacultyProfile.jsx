// FacultyProfile.js
import React from 'react';

const FacultyProfile = ({ name, designation, qualifications, expertise, photo, experience }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-64 object-cover" src={photo} alt={name} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{designation}</p>
        <p className="text-sm text-gray-500">{qualifications}</p>
        <p className="mt-2 text-sm text-gray-700">{expertise}</p>
        <p className="mt-4 text-sm text-gray-600">{experience}</p>
      </div>
    </div>
  );
};

export default FacultyProfile;
