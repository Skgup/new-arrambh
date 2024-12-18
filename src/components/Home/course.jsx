import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  title,
  university,
  description,
  duration,
  fee,
  tag,
  imageUrl,
  bgColor,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-shadow">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        {tag && (
          <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
            {tag}
          </div>
        )}
      </div>
      <div className="p-4 ">
        <h3
          className={`text-base font-bold text-gray-900 px-2 py-1 rounded ${bgColor}`}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{university}</p>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="mt-3 flex justify-between items-center text-sm">
          <span className="text-gray-600">{duration}</span>
          <span className="font-semibold text-blue-600">₹{fee}</span>
        </div>

        <Link
  to={`/CourseDetails/${title.replace(/\s+/g, '-').toLowerCase()}`}
  className="mt-4 text-blue-500 text-sm hover:scale-105"
>
  Know More
</Link>

      </div>
    </div>
  );
};

const CourseGrid = () => {
  const colors = ["bg-[#DEEDFF]", "bg-[#BFE9E7]", "bg-[#DEFFD3]"]; // Define the three colors

  const courses = [
    {
      title: "MBA",
      university: "Manipal University Jaipur",
      description: "Master of Business Administration",
      duration: "24 Months",
      fee: "1,50,000",
      imageUrl:
        "https://cache.careers360.mobi/media/article_images/2020/4/18/mba.jpg",
      tag: "Popular Course",
    },
    {
      title: "MCA",
      university: "Manipal Academy of Higher Education",
      description: "Master of Computer Applications (MCA)",
      duration: "24 Months",
      fee: "2,50,000",
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.d-wo64y5OEsmNfyEwgF5gwHaEK&pid=Api&P=0&h=180",
      tag: "New Launch",
    },
    {
      title: "BCA",
      university: "Manipal University Jaipur",
      description: "Bachelor of Computer Applications",
      duration: "36 Months",
      fee: "1,20,000",
      imageUrl:
        "https://www.dusquad.com/wp-content/uploads/2023/09/BCA-Course-1.jpg",
    },
    {
      title: "MBA",
      university: "Sikkim Manipal University",
      description: "Master of Business Administration",
      duration: "24 Months",
      fee: "1,50,000",
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.bejrRXFesRXKxRY7KaR5qQHaEK&pid=Api&P=0&h=180",
      tag: "Goal Specialization",
    },
    {
      title: "BA",
      university: "Sikkim Manipal University",
      description: "Bachelor of Arts",
      duration: "36 Months",
      fee: "80,000",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/309432083/IS/VP/KI/115939399/ba-course-500x500.png",
    },
    {
      title: "BBA",
      university: "Manipal University Jaipur",
      description: "Bachelor of Business Administration",
      duration: "36 Months",
      fee: "1,20,000",
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.Y6W_BpFfGeDcG9oXYsNvCwHaE3&pid=Api&P=0&h=180",
    },
    {
      title: "BBA",
      university: "Manipal University Jaipur",
      description: "Bachelor of Business Administration",
      duration: "36 Months",
      fee: "1,20,000",
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.Y6W_BpFfGeDcG9oXYsNvCwHaE3&pid=Api&P=0&h=180",
    },
    {
      title: "BBA",
      university: "Manipal University Jaipur",
      description: "Bachelor of Business Administration",
      duration: "36 Months",
      fee: "1,20,000",
      imageUrl:
        "https://tse1.mm.bing.net/th?id=OIP.Y6W_BpFfGeDcG9oXYsNvCwHaE3&pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-6  lg:px-[9%] md:[8%]">
      <div className="flex align-middle justify-between">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Explore our online{" "}
          <span className="italic text-[#85132c]">
            Courses 
          </span>
        </h2>
        <button className="bg-[#85132c] text-white  font-[500]  hover:scale-105  py-0 px-4 mb-8">
          Browse All Courses
        </button>
      </div>
      {/* Grid of Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCard className=" *: "
            key={index}
            {...course}
            bgColor={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
