import React from 'react';
import { Navbar } from './components';
import ImageSliders from './components/ImageSliders';
import { images } from './constants';
import './App.scss';

const slide = [
  images.flyer_1,
  images.logo_1,
  images.logo_2,
  images.logo_3,
  images.logo_4,
  images.logo_5,
  images.logo_6,
  images.logo_7,
];

export default function App() {
  return (
    <>
      <div className="app">
        <Navbar />

        <ImageSliders autoSlide autoSlideInterval={5000}>
          {slide.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full"
            />
          ))}
        </ImageSliders>
        <div className="copyright">
          <p
            className="p-text hover:scale-75
        hover:cursor-pointer hover:rotate-2 px-8 py-0.3"
          >
            @2024, All rights reserved
          </p>

          <p className="p-text hover:scale-75 hover:bx-blue-500 hover:cursor-pointer hover:rotate-2 px-8 py-0.3">
            Designed And Developed From Scratch By Marvy.
          </p>
        </div>
      </div>
    </>
  );
}
