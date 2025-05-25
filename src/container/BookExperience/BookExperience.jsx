import React from 'react';
import { images } from '../../constants';
import './BookExperience.module.css'; // Create and style this file as needed

const BookExperience = () => (
  <div className="relative app__bg flex__center section__padding" id="book-experience">
    <div className="absolute inset-0 flex__center" style={{ opacity: 0.2 }}>
      <img src={images.G} alt="G_overlay" className="z-0 h-1/4 sm:h-2/6 lg:w-96 lg:h-96 " />
    </div>

    <div className="w-full z-2 flex__center flex-col lg:flex-row">
      <div className="flex-one flex justify-end items-end flex-col text-right">
        <h1 className="headtext__cormorant">Book Your Experience</h1>
        <img src={images.spoon} alt="book_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray">
          Reserve your table for an unforgettable dining experience. Fill out the form below and our team will confirm your booking.
        </p>
        <button type="button" className="custom__button">Book Now</button>
      </div>

      <div className="my-1 mx-2 lg:my-8 lg:mx-16 lg:rotate-0 rotate-90 flex__center">
        <img src={images.knife} alt="book_knife" className="h-80vwh lg:h-screen 2xl:h-70vh" />
      </div>

      <div className="flex-one flex justify-start items-start flex-col text-left">
        <h1 className="headtext__cormorant">Why Book With Us?</h1>
        <img src={images.spoon} alt="book_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray">
          Enjoy exclusive menus, chef’s specials, and a memorable atmosphere. We look forward to hosting you at United Chicken Kingdom!
        </p>
        <button type="button" className="custom__button">Contact Us</button>
      </div>
    </div>
  </div>
);

export default BookExperience;