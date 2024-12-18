


import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./components/AuthProvider";
import NavBar from './components/NavBar/NavBar';
import Login from './components/LoginRegister/StudentLogin';
import Register from './components/LoginRegister/StudentRegistration';
import Home from './Home';
import About_eduversity from './components/about/About_eduversity';
import LeadershipTeam from './components/about/LeadershipTeam/LeadershipTeam';
import Client from './components/about/clients';
import Footer from './components/Home/Footer';
import Affiliation from './components/about/AffiliationsAndRecognitions';
import CoreValue from './components/about/CoreValues';
import Partners from './components/about/Partners';
import Testimonials from './components/about/Testimonials';
import Vision_Missions from './components/about/Vision_Mission';
import TopBar from './components/Home/TopBar';
import Faculties from './components/Faculty/Faculties';
import Enroll from './components/Home/MainContainer';
import ContactUs from './components/Contact/ContacUs';
import CourseDetails from './components/Course/CourseDetails';
import AllCourses from './components/Course/AllCourses/AllCourses';
import Dashboard from './components/StudentDashboard/Dashboard';
import MyCourses from './components/StudentDashboard/MyCourses';
import Exams from './components/StudentDashboard/Exams';
import LiveClasses from './components/StudentDashboard/LiveClasses';
import CourseMaterials from './components/StudentDashboard/CourseMaterials';
import Notifications from './components/StudentDashboard/Notifications';
import ProfileSettings from './components/StudentDashboard/ProfileSettings';
import HelpSupport from './components/StudentDashboard/HelpSupport';
import MainLayout from "./components/StudentDashboard/Mainlayout";
import ScrollToTop from "./components/Top";
import ScrollToTop2 from "./components/Top2";
function App() {
  const user = useContext(AuthContext); 
 
  return (
    <Router>
      <ScrollToTop2/>
      <AuthProvider>
        <TopBar />
        <NavBar />
        <div className="mt-32" 
         >
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about-eduversity" element={<About_eduversity />} />
            <Route path="/leadership-team" element={<LeadershipTeam />} />
            <Route path="/clients" element={<Client />} />
            <Route path="/affiliation" element={<Affiliation />} />
            <Route path="/core-values" element={<CoreValue />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/vision-mission" element={<Vision_Missions />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faculties" element={<Faculties />} />
            <Route path="/courses" element={<AllCourses />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/CourseDetails/:courseId" element={<CourseDetails />} />
            if (user) {
              <Route
              path="/dashboard"
              element={
                <ProtectedRoute user={user}>
                  <MainLayout /> {/* Main Layout with Sidebar and Content */}
                </ProtectedRoute>
              }
            >
              {/* Default Dashboard Route */}
              <Route index element={<Dashboard />} /> {/* Use 'index' for default route */}

              {/* Child Routes for Dashboard Components */}
              <Route path="my-courses" element={<MyCourses />} />
              <Route path="exams" element={<Exams />} />
              <Route path="live-classes" element={<LiveClasses />} />
              <Route path="course-materials" element={<CourseMaterials />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="profile-settings" element={<ProfileSettings />} />
              <Route path="help-support" element={<HelpSupport />} />
            </Route>
            }
            {/* Protected Routes */}
            
          </Routes>
        <ScrollToTop/>
        </div>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
