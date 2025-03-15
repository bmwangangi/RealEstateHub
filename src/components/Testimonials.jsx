import React from 'react';
import { testimonialsData, assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x:200}}
      transition={{ duration: 1}}
      whileInView={{ opacity: 1, x:0}}
      viewport={{ once: true}}
    className='container mx-auto py-10 px-6 md:px-12 lg:px-32 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-md mx-auto'>
        Real Stories from Those Who Found Home with Us
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='border shadow-lg px-8 py-12 text-center rounded-lg bg-white'>
            <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
            <h2 className='text-xl text-gray-700 font-semibold'>{testimonial.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 mb-4'>
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img key={index} className='w-5 h-5' src={assets.star_icon} alt="Star" />
              ))}
            </div>
            <p className='text-gray-600 text-sm'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
