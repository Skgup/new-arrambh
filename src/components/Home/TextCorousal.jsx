import React, { useEffect, useRef, useState } from 'react';

const InfiniteSlider = () => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Inline style to define keyframes animation for scrolling
  const keyframesStyle = `
    @keyframes scrollInfinite {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        // Scroll by the width of one slide
        sliderRef.current.scrollBy({
          left: 200, // Adjust this value to the width of your content
          behavior: 'smooth',
        });

        // Reset to the beginning when reaching the end
        if (sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // This function will ensure the content loops seamlessly in a circular manner
  const handleAnimationEnd = () => {
    if (sliderRef.current && isAnimating) {
      // When the first set of slides ends, we move them to the end to create a circular effect
      setIsAnimating(false);
      setTimeout(() => {
        sliderRef.current.scrollLeft = 0; // Reset scroll to the start
        setIsAnimating(true); // Enable animation again
      }, 500); // Delay for a smoother transition
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      {/* Fixed Title on the left */}
      <div className="w-1/4 flex-shrink-0">
        <h2 className="text-2xl font-bold">Fixed Title</h2>
      </div>

      {/* Slider Section */}
      <div className="flex-1 overflow-hidden relative">
        <style>{keyframesStyle}</style> {/* Add keyframes directly inside the component */}
        <div
          ref={sliderRef}
          className="flex space-x-8 w-full"
          onAnimationIteration={handleAnimationEnd} // Ensures circular reset on completion
          style={{
            animation: isAnimating ? 'scrollInfinite 10s linear infinite' : 'none',
          }}
        >
          {/* Slide 1 */}
          <div className="min-w-max p-6 bg-blue-300 rounded-lg shadow-lg">
            <p className="text-white font-semibold">Slide 1 Content</p>
          </div>

          {/* Slide 2 */}
          <div className="min-w-max p-6 bg-green-300 rounded-lg shadow-lg">
            <p className="text-white font-semibold">Slide 2 Content</p>
          </div>

          {/* Slide 3 */}
          <div className="min-w-max p-6 bg-red-300 rounded-lg shadow-lg">
            <p className="text-white font-semibold">Slide 3 Content</p>
          </div>

          {/* Slide 4 */}
          <div className="min-w-max p-6 bg-yellow-300 rounded-lg shadow-lg">
            <p className="text-white font-semibold">Slide 4 Content</p>
          </div>

          {/* Slide 5 */}
          <div className="min-w-max p-6 bg-purple-300 rounded-lg shadow-lg">
            <p className="text-white font-semibold">Slide 5 Content</p>
          </div>

          {/* Duplicate Slides to create the illusion of an infinite loop */}
          <div className="min-w-max p-6 bg-blue-300 rounded-lg shadow-lg">
            <p className="text-white font-semibold">Slide 1 Content</p>
          </div>

          <div className="min-w-max p-6 bg-green-300 rounded-lg shadow-lg">
            <p className="text-white font-semibold">Slide 2 Content</p>
          </div>

          <div className="min-w-max p-6 bg-red-300 rounded-lg shadow-lg">
            <p className="text-white font-semibold">Slide 3 Content</p>
          </div>

          <div className="min-w-max p-6 bg-yellow-300 rounded-lg shadow-lg">
            <p className="text-white font-semibold">Slide 4 Content</p>
          </div>

          <div className="min-w-max p-6 bg-purple-300 rounded-lg shadow-lg">
            <p className="text-white font-semibold">Slide 5 Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
