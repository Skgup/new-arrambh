// WhyOurFaculty.js
import React from 'react';

const WhyOurFaculty = () => {
  return (
    <div className="my-12   rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#85132c] mb-4">Why Our Faculty?</h2>
      <p className="text-lg text-gray-700">
        Our faculty members are seasoned experts in their fields, bringing years of industry experience and global exposure to the classroom. With a strong commitment to innovation and academic excellence, our faculty ensures students receive an education that is both cutting-edge and rooted in practical knowledge.
      </p>
      <ul className="mt-4 space-y-2 list-disc pl-6 text-gray-600">
        <li><strong>Experienced</strong>: Our faculty members have a wealth of experience, both in academia and industry.</li>
        <li><strong>Industry Experts</strong>: Many of our faculty members have worked with top companies and bring valuable insights from the real world.</li>
        <li><strong>Global Exposure</strong>: Our faculty has international experience, bringing diverse perspectives to our courses.</li>
      </ul>
    </div>
  );
};

export default WhyOurFaculty;
