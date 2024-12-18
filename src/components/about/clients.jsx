import React from "react";

const Clients = () => {
  const clients = [
    {
      logo: "https://via.placeholder.com/150x50?text=Client+1", // Replace with actual logos
      description: "Corporate partner in the tech industry.",
    },
    {
      logo: "https://via.placeholder.com/150x50?text=Client+2",
      description: "Institution focused on research and development.",
    },
    {
      logo: "https://via.placeholder.com/150x50?text=Client+3",
      description: "Global firm providing financial services.",
    },
    {
      logo: "https://via.placeholder.com/150x50?text=Client+4",
      description: "Leading educational institution in healthcare.",
    },
    {
      logo: "https://via.placeholder.com/150x50?text=Client+5",
      description: "Industry leader in renewable energy solutions.",
    },
    {
      logo: "https://via.placeholder.com/150x50?text=Client+6",
      description: "Industry leader in renewable energy solutions.",
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-[#85132c] text-white py-6 px-6 lg:px-[9%] md:[8%]">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold ">Our Clients</h1>
        </div>
      </header>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-[9%] md:[8%]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Clients</h2>
            <p className="text-gray-600 mt-4">
              We are proud to collaborate with these corporates, institutions,
              and organizations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
              >
                <img
                  src={client.logo}
                  alt={`Client logo ${index + 1}`}
                  className="mx-auto mb-4 h-16 object-contain"
                />
                <p className="text-gray-600">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
