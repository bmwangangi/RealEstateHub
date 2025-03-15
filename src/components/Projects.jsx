import React, { useRef } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x:-200}}
      transition={{ duration: 1}}
      whileInView={{ opacity: 1, x:0}}
      viewport={{ once: true}} 
    className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-md mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button onClick={scrollLeft} className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Projects">
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={scrollRight} className="p-3 bg-gray-200 rounded" aria-label="Next Projects">
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Scrollable Project Section */}
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-8 transition-transform duration-500 ease-in-out overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-72 sm:w-96">
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-lg shadow-lg mb-14" />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md text-center'>
                  <h2 className='text-xl font-semibold text-gray-800'>
                    {project.title}
                  </h2>
                  <p className='text-gray-500 text-sm flex justify-center items-center'>
                    {project.price} <span className="mx-2">|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
