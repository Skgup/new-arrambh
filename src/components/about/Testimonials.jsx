import React from "react";

const Testimonials = () => {
  const videoTestimonial = {
    videoUrl: "https://www.youtube.com/embed/UIDwl_kP2MU", // Replace with your actual video ID
    description:
      "Hear from our alumni about their transformative learning experiences.",
  };

  const textTestimonials = [
    {
      name: "John Doe",
      designation: "Alumni, Class of 2020",
      text: "The learning experience was exceptional, and I gained skills that directly helped me in my career.",
    },
    {
      name: "Jane Smith",
      designation: "Partner, Tech Solutions Inc.",
      text: "Our collaboration has been incredibly fruitful. We've seen significant growth since we partnered.",
    },
    {
      name: "David Lee",
      designation: "Client, Global Finance Corp.",
      text: "The quality of service and support has been outstanding, and we couldn't be happier with the results.",
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-[#85132c] text-white py-6 px-6 lg:px-[9%] md:[8%]">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold ">Testimonials</h1>
        </div>
      </header>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-[9%] md:[8%]">
          <div className="text-start mb-12">
            <h2 className="text-3xl font-bold text-[#85132c]">
              Success Stories
            </h2>
            <p className="text-gray-600 mt-4">
              Hear directly from our alumni, partners, and clients about their
              positive experiences with us.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video Testimonial */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                {" "}
                {/* 16:9 Aspect Ratio */}
                {/* Embed the video */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={videoTestimonial.videoUrl}
                  title="Testimonial Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-4 text-gray-600 text-center">
                {videoTestimonial.description}
              </p>
            </div>

            {/* Text Testimonials */}
            <div className="space-y-8">
              {textTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
                >
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  <div className="mt-4 text-right">
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">{testimonial.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;


