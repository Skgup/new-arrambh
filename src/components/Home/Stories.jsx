import React, { useState, useEffect } from "react";

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
      title: "Learner Testimonial: Devyani's Journey With Online BBA (MUJ)",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
      title: "Learner Testimonial: Akhil's Journey With Online MBA (MUJ)",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
      title: "Learner Testimonial: Ritu's Story with Online MCA (MAHE)",
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
      title: "Learner Testimonial: Rahul's Transition with Online MBA (MUJ)",
    },
    {
      id: 5,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
      title: "Learner Testimonial: Nikita's Experience with Online BBA (MUJ)",
    },
  ];

  const getVisibleVideos = () => {
    if (window.innerWidth >= 1440) return 4; // Extra Large Screens
    if (window.innerWidth >= 1024) return 3; // Desktop
    if (window.innerWidth >= 768) return 2; // Tablet
    return 1; // Mobile
  };

  const [visibleVideos, setVisibleVideos] = useState(getVisibleVideos());

  useEffect(() => {
    const handleResize = () => setVisibleVideos(getVisibleVideos());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalVideos = videos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= totalVideos - visibleVideos ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [totalVideos, visibleVideos]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full py-6 lg:py-11  px-6 lg:px-[9%] md:px-[8%] mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 text-left text-[#85132c]">
        Our <span className="italic">stories</span>
      </h2>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        {/* Video Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleVideos}%)`,
          }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className={`flex-shrink-0 ${
                visibleVideos === 1
                  ? "w-full"
                  : visibleVideos === 2
                  ? "w-1/2"
                  : visibleVideos === 3
                  ? "w-1/3"
                  : "w-1/4"
              } p-2`}
            >
              {/* Embed YouTube Video */}
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={`${
                    visibleVideos === 1
                      ? "h-40"
                      : visibleVideos === 2
                      ? "h-48"
                      : "h-56"
                  } w-full object-cover`}
                  title={video.title}
                ></iframe>
              </div>
              {/* Video Title */}
              <p className="text-center text-sm md:text-base font-medium mt-3 text-gray-700">
                {video.title}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-[#85132c]" : "bg-gray-300"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
