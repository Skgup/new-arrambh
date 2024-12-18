import React from 'react';
import HeroSection from './components/Home/HeroSection';
import HighlightsSection from './components/Home/HighlightsSection';
import KeyFeatures from './components/Home/KeyFeatures';
import CourseGrid from './components/Home/Course';
// import ContactPage from './components/Contact/ContacUs';
import MainContainer from './components/Home/MainContainer';
import FloatingEnrollButton from './components/Home/FliationgButton';
// import InfiniteCarousel from './components/Home/TextCorousal';
import Marquee from "react-fast-marquee";
import OnlineBenefits from './components/Home/OnlineBenifits';
import PlacementAssistance from './components/Home/Placement';
import StudentSay from './components/Home/StudentSay';
import Stories from './components/Home/Stories'
import Chatbot from './components/Chatbot';

function Home() {
    return (
        <><FloatingEnrollButton />
            <div  className="  overflow-hidden">
                <HeroSection />
                <HighlightsSection />
                <KeyFeatures />
                <CourseGrid />
                <div className="overflow-hidden h-24 bg-gradient-to-br flex justify-between from-blue-500 text-white to-[#85132c]">
                    <div className='w-1/2 flex justify-center items-center text-center text-xl md:text-3xl font-bold text-white'>Arambh Eduversity impact</div>
                    <Marquee gradient={false}>
                        <h1 className="px-32 font-bold">
                     <span className='text-3xl font-bold'>75,000+</span> learners have been empowered through Online Manipal
                        </h1>
                        <h1 className="px-32 font-bold">
                        <span className='text-3xl font-bold'>Learners </span> are from  60+ countries and 1,500+ towns & cities
                        </h1>
                        <h1 className="px-32 font-bold">
                        <span className='text-3xl font-bold'>As per UGC </span>, online degrees are equivalent to on-campus degrees
                        </h1>
                        <h1 className="px-32 font-bold">
                     <span className='text-3xl font-bold'>   81% </span> of students find online is better than or equal to on-campus learning
                        </h1>
                        <h1 className="px-32 font-bold">
                        <span className='text-3xl font-bold'>97% </span> of online students & graduates would recommend online education to others
                        </h1>
                    </Marquee>
                </div>
               
                <OnlineBenefits/>
                <PlacementAssistance/> 
                <StudentSay/>
                <Stories/>
                <MainContainer />
                <Chatbot/>
            </div>
        </>
    );
}

export default Home;
