import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../AuthProvider";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    qualification: "",
    institution: "",
    dateOfBirth: "",
    area: "",
    district: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    gender: "",
    profilePhoto: "",
  });
  const [photoFile, setPhotoFile] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:8080/profile/${user.email}`)
        .then((res) => res.json())
        .then((data) => setProfileData(data))
        .catch((error) => console.error("Error fetching profile:", error));
    }
  }, [user]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    setPhotoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in profileData) {
      formData.append(key, profileData[key]);
    }
    if (photoFile) formData.append("profilePhoto", photoFile);

    try {
      const response = await fetch(`http://localhost:5000/profile/${profileData.email}`, {
        method: "PUT",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Profile updated successfully!");
        setProfileData(data);
      } else {
        alert(data.error || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (<> <h1 className="text-2xl font-bold mb-6 text-center">Profile Details</h1>
    <div className="container mx-auto flex flex-col justify-center lg:flex-row p-6 bg-white rounded shadow">
     <div className="col-span-1 flex flex-col items-center">
          <img
            src={
              profileData.profilePhoto
                ? `http://localhost:5000/${profileData.profilePhoto}`
                : "https://via.placeholder.com/150"
            }
            alt="Profile"
            className="mb-4 w-32 h-32 rounded-full border"
          />
          <input type="file" onChange={handlePhotoChange} className="text-center" />
          <p className="text-sm text-gray-600 mt-2">Allowed: JPG, PNG. Max size: 1MB.</p>
        </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {/* Profile Photo Section */}
        

        {/* Form Fields */}
        <div className="col-span-1 grid grid-cols-2 gap-4 justify-center  m-auto">
          <div className="col-span-2">
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profileData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-2">
            <label className="block font-medium">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={profileData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-2">
            <label className="block font-medium">Qualification</label>
            <input
              type="text"
              name="qualification"
              value={profileData.qualification}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-2">
            <label className="block font-medium">Institution</label>
            <input
              type="text"
              name="institution"
              value={profileData.institution}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-2">
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={profileData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-1">
            <label className="block font-medium">Area</label>
            <input
              type="text"
              name="area"
              value={profileData.area}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-1">
            <label className="block font-medium">District</label>
            <input
              type="text"
              name="district"
              value={profileData.district}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-1">
            <label className="block font-medium">City</label>
            <input
              type="text"
              name="city"
              value={profileData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-1">
            <label className="block font-medium">State</label>
            <input
              type="text"
              name="state"
              value={profileData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-1">
            <label className="block font-medium">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={profileData.pincode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-1">
            <label className="block font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={profileData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="col-span-2">
            <label className="block font-medium">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={profileData.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={profileData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="bg-[#85132c] text-white py-2 px-4 rounded hover:bg-[#85132c]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div></>
  );
};

export default ProfilePage;
