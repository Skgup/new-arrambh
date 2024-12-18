import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/profile/${user?.email}`);
        const data = await response.json();
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchProfile();
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    {/* Welcome Section */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
      {/* Profile Card */}
      <div className="col-span-1 lg:col-span-1 flex items-center bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <div>
            <h1 className="text-xl font-bold">Welcome {profile?.fullName} 🎉</h1>
            <p className="text-gray-600">{profile?.email}</p>
            <p className="text-sm text-gray-400">Member Since 2024</p>
          </div>
        </div>
        <div className="ml-auto">
          <Link to="/dashboard/profile-settings">
            <button className="bg-[#85132c] text-white py-2 px-4 rounded-lg hover:bg-[#85132c]">
              Profile
            </button>
          </Link>
        </div>
      </div>
  
      {/* Summary Cards */}
      <div className="bg-white p-4 rounded-lg shadow flex flex-col h-52">
        <h2 className="text-lg font-semibold text-[#85132c]">Course</h2>
        <p>Enrolled: <span className="font-bold">0</span></p>
        <button className="mt-auto bg-[#85132c] text-white py-2 px-4 rounded-lg">
          Enroll Now
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex flex-col h-52">
        <h2 className="text-lg font-semibold text-[#85132c]">Exam</h2>
        <p>Scheduled: <span className="font-bold">1</span></p>
        <button className="mt-auto bg-[#85132c] text-white py-2 px-4 rounded-lg">
          Schedule Now
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex flex-col h-52">
        <h2 className="text-lg font-semibold text-[#85132c]">Certificate</h2>
        <h3>Issued: <span className="font-bold">4</span></h3>
        <h3>Upcoming: <span className="font-bold">1</span></h3>
        <button className="mt-auto bg-[#85132c] text-white py-2 px-4 rounded-lg">
          View Now
        </button>
      </div>
    </div>
  
    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
      <div className="bg-white p-6 rounded-lg shadow flex flex-col h-52">
        <h2 className="text-lg font-semibold text-[#85132c]">Events</h2>
        <p>Discover and participate in events.</p>
        <button className="mt-auto bg-[#85132c] text-white py-2 px-4 rounded-lg">
          Enroll Now
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow flex flex-col h-52">
        <h2 className="text-lg font-semibold text-[#85132c]">Course</h2>
        <p>Explore and Enroll in new courses.</p>
        <button className="mt-auto bg-[#85132c] text-white py-2 px-4 rounded-lg">
          Enroll Now
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow flex flex-col h-52">
        <h2 className="text-lg font-semibold text-[#85132c]">Live Classes</h2>
        <p>Join our live sessions to enhance learning.</p>
        <button className="mt-auto bg-[#85132c] text-white py-2 px-4 rounded-lg">
          Join Now
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow flex flex-col h-52">
        <h2 className="text-lg font-semibold text-[#85132c]">Course Material</h2>
        <p>Access the latest materials here.</p>
        <button className="mt-auto bg-[#85132c] text-white py-2 px-4 rounded-lg">
          View Now
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow flex flex-col h-52">
        <h2 className="text-lg font-semibold text-[#85132c]">Help Desk</h2>
        <p>Contact us for any queries or support.</p>
        <button className="mt-auto bg-[#85132c] text-white py-2 px-4 rounded-lg">
          Contact Now
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default Dashboard;
