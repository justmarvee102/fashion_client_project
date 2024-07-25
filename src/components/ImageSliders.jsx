import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { motion } from 'framer-motion';

import { images } from '../constants';

function ImageSliders({
  children: slide = [],
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slide.length - 1 : curr - 1));
  const next = useCallback(
    () => setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1)),
    [slide.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const items = [
    {
      title: 'Typography',
      description: [
        'Clean and sleek fonts were chosen to ensure readability and to complement the overall aesthetic of the brand.',
      ],
    },
    {
      title: 'Project Duration',
      description: ['May 2023-June 2023'],
    },
    {
      title: 'Role and Responsibility',
      description: ['Graphic Designer'],
    },
  ];

  const items2 = [
    {
      title: 'Objectives',
      description: [
        '1. To develop a cohesive visual identity that aligns with TK Fashion House’s brand. ',
        <br />,
        '2. To create eye-catching and trendy designs for both digital and print media.',
        <br />,
        '3. Enhance brand recognition and engagement through visually appealing graphics.',
      ],
    },
    {
      title: 'Challenges & Solutions',
      description: [
        'Challenge: Balancing modern design elements with a warm and inviting feel.',
        <br />,
        ' Solution: I utilized a combination of elegant fonts, vibrant colors, and soft textures to create a welcoming and memorable brand identity.',
      ],
    },

    {
      title: 'Client Information',
      description: [
        'TK Fashion House is a dynamic local fashion brand. The brand caters to a style-savvy clientele who appreciate high-quality, stylish apparel.',
      ],
    },
  ];

  const items3 = [
    {
      title: 'Deliverables',
      title2: 'Social Media Graphics',
      description: [
        'I designed a set of try out logos before getting to the main logo that captured the essence of the brand. The main logo later chosen by client incorporates elegant elements and a color palette that evokes the sophistication and creativity of the fashion brand.',
      ],
    },
    {
      title: 'Deliverables',
      title2: 'Print Materials',
      description: [
        'I created a flyer that can also be used as a banner as needed by the client to support the brand in store marketing and in-store promotions .',
      ],
    },
    {
      title: 'Result',
      description: [
        'The new graphic materials significantly enhanced TK Fashion House’s visual identity, leading to increased brand recognition and customer engagement. The designs received positive feedback from both the client and their customers.',
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 sm:p-14 lg:p-14 min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl w-full box overflow-hidden shadow-lg bg-white dark:bg-gray-800 mt-10">
          <div className="relative w-full lg:w-3/6 overflow-hidden ">
            <motion.div
              className=" flex transition-transform ease-out duration-500 h-full"
              style={{ transform: `translateX(-${curr * 100}%)` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {slide.map((child, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center">
                    {child}
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prev}
                className="p-2 rounded-full shadow bg-white/80  dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-white hover:dark:bg-gray-500 "
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full shadow bg-white/80  dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-white hover:dark:bg-gray-500"
              >
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
              <div className="flex items-center justify-center space-x-2">
                {slide.map((_, i) => (
                  <div
                    key={i}
                    className={`transition-all w-2 h-2 rounded-full ${
                      curr === i ? 'bg-black p-1' : 'bg-black bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-3/6 p-6 sm:w-2/2">
            <div className="bold-text mb-3 dark:text-gray-200">
              Graphic Design for TK Fashion House
            </div>
            <p className="s-text mb-4">
              The owner of TK Fashion House, a vibrant local fashion brand
              approached me with an exciting project. They wanted a series of
              graphic materials that would not only enhance their brand identity
              but also bring a touch of fun and flair to their visual presence.
              The project included designing lively marketing collateral,
              eye-catching social media graphics, engaging promotional materials
              to reflect the brand's sophisticated and stylish image.
            </p>
            <div className="flex flex-col mb-3">
              <span className="font-semibold dark:text-gray-200">
                Organization Name:
              </span>
              <span className="s-text">TK Fashion House</span>
            </div>
            <div className="font-semibold mb-1 dark:text-gray-200">
              Tools Used:
            </div>
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex flex-col items-center">
                <img src={images.canva} alt="Canva" className="w-7 h-7 mt-1" />
                <span className="s-text">Canva</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={images.photoshop}
                  alt="Photoshop"
                  className="w-7 h-7 mt-1 rounded"
                />
                <span className="s-text">Photoshop</span>
              </div>
            </div>
            <div className="flex-col flex mb-4">
              <div className="font-semibold dark:text-gray-200">
                Color Palette:
              </div>
              <h2 className="s-text mb-2">
                Modern and elegant color palette featuring a mix of bold and
                neutral tones.
              </h2>
              <div className="flex-row flex ">
                <img
                  src={images.flyer_1}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />
                <div className="colors">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>

              <div className="flex-row flex mt-2">
                <img
                  src={images.logo_4}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full"
                />

                <div className="colors2">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>

              <div className="flex-row flex mt-2">
                <img
                  src={images.logo_2}
                  alt="canva"
                  className="w-8 b1 h-8 mt-1 ml-1 rounded-full "
                />

                <div className="colors3">
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b1"></button>
                  <button className=" w-8 h-8 rounded-full shadow hover:bg-white mt-1 ml-2 b2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b3 hover:bg-white mt-1 ml-3"></button>
                  <button className=" w-8 h-8 rounded-full shadow b4 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b5 hover:bg-white mt-1 ml-2"></button>
                  <button className=" w-8 h-8 rounded-full shadow b6 hover:bg-white mt-1 ml-2"></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <div className="font-semibold mb-2 dark:text-gray-200">
                Project Link:
              </div>
              <a href="blank" className="text-blue-500 underline">
                *Check out a full PDF of the designs*
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-center dark:text-gray-200 ">
        Other Important Info:
      </h1>

      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item.title}
            </div>
            {item.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items2.map((item2, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item2.title}
            </div>
            {item2.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-full p-6 sm:p-10 lg:p-6">
        {items3.map((item3, index) => (
          <motion.div
            key={index}
            className="flex flex-col overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-800 w-full sm:w-5/12 lg:w-1/4 items-center p-6 hover-text"
            variants={containerVariants}
            whileDrag={{ scale: 1.05 }}
            whileHover={{
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
              rotate: 10,
              scale: 1.05,
            }}
            whileTap={{
              scaleX: -1,
              rotate: 10,
              y: -10,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            }}
            animate="visible"
            style={{ cursor: 'pointer' }}
            initial="hidden"
          >
            <div className="font-semibold mb-2 text-center text-black dark:text-white">
              {item3.title}
            </div>
            {item3.description.map((desc, i) => (
              <h2
                key={i}
                className="h-text text-center text-black dark:text-white"
              >
                {desc}
              </h2>
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default ImageSliders;
