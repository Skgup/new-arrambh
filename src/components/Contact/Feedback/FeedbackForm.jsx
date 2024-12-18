import React from "react";

const FeedbackForm = () => {
  return (
    <div className=" bg-gray-100 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
      <div className="w-16 h-1 bg-[#85132c] mb-6"></div>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label htmlFor="first-name" className="block font-semibold mb-2">
            First Name *
          </label>
          <input
            id="first-name"
            type="text"
            placeholder="First name"
            className="w-full p-2 border rounded bg-gray-200"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="message" className="block font-semibold mb-2">
            Your Message *
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            className="w-full h-20 p-2 border rounded bg-gray-200"
          ></textarea>
        </div>
        <div className="col-span-1">
          <label htmlFor="email" className="block font-semibold mb-2">
            E-mail *
          </label>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            className="w-full p-2 border rounded bg-gray-200"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="phone" className="block font-semibold mb-2">
            Phone *
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Phone"
            className="w-full p-2 border rounded bg-gray-200"
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="px-6 py-2 bg-[#85132c] text-white font-bold rounded flex items-center space-x-2"
          >
            <span>Submit</span>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
