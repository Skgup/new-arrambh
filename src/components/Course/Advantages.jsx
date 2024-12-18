import React, { useState } from "react";

const Advantage = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(0);

  const benefits = [
    {
      id: 0,
      title: "  Comprehensive Coverage of Psychology ",
      image: "https://via.placeholder.com/600x300", 
      heading: "Recognized Globally",
      description:
        "This programme offers a well-rounded curriculum covering foundational and advanced topics in psychology, including biological bases of behavior, cognitive processes, developmental stages, and mental health. It ensures a strong grasp of both theoretical and practical aspects of the discipline. ",
    },
    {
      id: 1,
      title: " Balanced and Modular Approach ",
      image: "https://via.placeholder.com/600x300", 
      heading: "Recognized Globally",
      description:
        "The course structure is designed with 20 hours of focused learning, divided into 9 sections, each addressing a critical area of psychology. The modular design enables learners to progresssystematically and build knowledge step-by-step.",
    },
    {
      id: 2,
      title: "Academic Credibility with Credit Allocation ",
      image: "https://via.placeholder.com/600x300", 
      heading: "Study at Your Pace",
      description:
        "With a total of 10 academic credits, this programme meets the standard credit system, making it a credible addition to your academic or professional portfolio. Each section's credits are proportionally distributed to ensure fair weighting based on content depth. ",
    },
    {
      id: 3,
      title: "Expertly Curated Topics",
      image: "https://via.placeholder.com/600x300", // Replace with actual image URL
      heading: "Stay Relevant",
      description:
        "From the Introduction to Psychology to advanced areas like Mental Health and Psychopathology, this programme includes: • Biological Foundations of Behavior: Understanding how brain and biology influence thoughts and actions.• Cognitive Psychology: Exploring mental processes like thinking, problem-solving, and decision-making. • Social Psychology: Gaining insights into interpersonal dynamics and societal influences. ",
    },
    {
      id: 4,
      title: " Real-World Relevance ",
      image: "https://via.placeholder.com/600x300", // Replace with actual image URL
      heading: "Achieve Your Goals",
      description:
        "Whether you are a student, educator, or professional, this course provides insights that are directly applicable in fields like healthcare, education, counseling, and human resources. Topics such as Learning and Memory and Personality and Individual Differences help enhance practical skills for real-world applications. ",
    },
    {
      id: 5,
      title: " Mental Health Awareness ",
      image: "https://via.placeholder.com/600x300", 
      description:
        "A dedicated section on Mental Health and Psychopathology equips learners with critical knowledge to understand psychological disorders, fostering empathy and the ability o address mental health challenges effectively.  ",
    },
    {
      id: 6,
      title: "Flexible and Time-Efficient  ",
      image: "https://via.placeholder.com/600x300", 
      description:
        "With only 20 hours of total learning, the programme is ideal for busy individuals seeking to upskill without a long-term commitment. The bite-sized sections provide flexibility to learn at your own pace.  ",
    },
    {
      id: 7,
      title: " Prepares for Advanced Study or Career",
      image: "https://via.placeholder.com/600x300", 
      description:
        " This programme lays a solid foundation for further academic pursuits in psychology or related fields. It also provides the knowledge base for career advancement in roles requiring psychological insights, such as counseling, social work, or organizational behavior.",
    },
    {
      id: 8,
      title: "Scientifically Structured Content",
      image: "https://via.placeholder.com/600x300", 
      description:
        " The course is aligned with educational standards, ensuring: • Balanced focus between foundational knowledge (e.g., Sensation and Perception) and advanced topics (e.g., Mental Health).         Fair distribution of credits and hours, promoting consistent and thorough learning.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-2 lg:px-8 py-12 bg-gray-100">
      {/* Left Column: Headings */}
      <div className="flex flex-col w-full lg:w-1/3 border-r border-gray-300 pr-4">
        <h2 className="text-2xl font-bold text-[#85132c] mb-4">Why Should Anyone Join This Programme? </h2>
        <ul className="space-y-4">
          {benefits.map((benefit) => (
            <li
              key={benefit.id}
              onClick={() => setSelectedBenefit(benefit.id)}
              className={`cursor-pointer text-md font-medium shadow-md p-2  ${
                selectedBenefit === benefit.id
                  ? "text-[#85132c] border-r-4 border-[#85132c] pl-2"
                  : "text-gray-700 hover:text-[#85132c]"
              }`}
            >
              {benefit.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Dynamic Content */}
      <div className="flex flex-col w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
        {/* Image */}
        <div className="w-full mb-6">
          <img
            src={benefits[selectedBenefit].image}
            alt={benefits[selectedBenefit].title}
            className="w-full  shadow-2xl"
          />
        </div>

        {/* Description */}
        <div className="text-left space-y-4">
          {/* Heading */}
          <h3 className="text-xl font-bold text-black">
            {benefits[selectedBenefit].heading}
          </h3>

          {/* Title */}
          {/* <p className="text-lg font-semibold text-gray-800">
            {benefits[selectedBenefit].title}
          </p> */}

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {benefits[selectedBenefit].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
