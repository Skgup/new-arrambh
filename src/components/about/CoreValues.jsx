import React from "react";

const CoreValues = () => {
  const values = [
    {
      title: "Commitment to Quality",
      description: "We prioritize delivering the highest standard of education to empower our learners.",
      icon: "📘",
    },
    {
      title: "Integrity",
      description: "Upholding honesty and ethical principles in all our endeavors.",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description: "Embracing creativity and modern solutions to enhance learning experiences.",
      icon: "💡",
    },
    {
      title: "Inclusion & Excellence",
      description: "Fostering a diverse environment that drives outstanding performance.",
      icon: "🌍",
    },
    {
      title: "Commitment to Quality",
      description: "We prioritize delivering the highest standard of education to empower our learners.",
      icon: "📘",
    },
    {
      title: "Integrity",
      description: "Upholding honesty and ethical principles in all our endeavors.",
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-white  my-7 rounded-lg shadow-lg py-12">
      <div className="container   px-6 md:px-12 lg:px-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#85132c]">Core Values</h2>
          <p className="text-gray-600 mt-4">
            Our guiding principles shape everything we do to provide a transformative learning experience.
          </p>
        </div>
        <div className="grid   grid-cols-1  lg:grid-cols-2  shrink-0 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white  shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl ">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mt-4">{value.title}</h3>
              <p className="text-gray-600 mt-2">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
