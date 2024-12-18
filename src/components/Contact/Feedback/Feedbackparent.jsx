import React from "react";
import FeedbackForm from "./FeedbackForm";
import ContactList from "./ContactList";

const App = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
      {/* FeedbackForm will span full width on small screens and two-thirds on larger screens */}
      <div className="col-span-1 md:col-span-2">
        <FeedbackForm />
      </div>
      {/* ContactList will span full width on small screens and one-third on larger screens */}
      <div className="col-span-1">
        <ContactList />
      </div>
    </div>
  );
};

export default App;
