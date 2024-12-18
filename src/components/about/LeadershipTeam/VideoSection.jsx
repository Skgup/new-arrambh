import React from "react";

const VideoSection = () => {
  const videoAboutEduversity = {
    videoUrl: "https://www.youtube.com/embed/UIDwl_kP2MU", // Replace with your actual video ID
    // description: "Hear from our alumni about Aarambh Eduversity.",
  };

  return (
   
      <div className="bg-white">
        <div className="relative " style={{ paddingTop: "60.25%" }}>
          {" "}
          {/* Embed the video */}
          <iframe
            className="absolute top-0 left-0   w-full h-full rounded-lg"
            src={videoAboutEduversity.videoUrl}
            title="AboutEduversity Video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          {videoAboutEduversity.description}
        </p>
      </div>
    
  );
};

export default VideoSection;
