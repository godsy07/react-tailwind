/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../../images/logo.png";

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex flex-col bg-gray-900 w-full px-4 py-2 min-h-12 text-white'>
      <div className='flex justify-between md:justify-start px-4'>
        <a href='#' title='logo'>
          <img src={logo} alt='logo' className='w-6' />
        </a>
        <div className='hidden mx-10 md:block'>
          <div className='flex'>
            <a
              href='#'
              className='px-3 mr-2 h-full hover:bg-gray-700 font-bold rounded'
            >
              Home
            </a>
            <a
              href='#'
              className='px-3 mr-2 h-full hover:bg-gray-700 font-bold rounded'
            >
              Info
            </a>
            <a
              href='#'
              className='px-3 mr-2 h-full hover:bg-gray-700 font-bold rounded'
            >
              About Us
            </a>
            <a
              href='#'
              className='px-3 mr-2 h-full hover:bg-gray-700 font-bold rounded'
            >
              Contact Us
            </a>
          </div>
        </div>
        <div
          className=' md:hidden px-2 rounded hover:bg-gray-600 bg-gray-800 cursor-pointer'
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </div>
      </div>

      {open ? (
        <div className='md:hidden py-2'>
          <div className='flex flex-col'>
            <a
              href='#'
              className='px-3 mr-2 h-full hover:bg-gray-700 font-bold rounded'
            >
              Home
            </a>
            <a
              href='#'
              className='px-3 mr-2 h-full hover:bg-gray-700 font-bold rounded'
            >
              Info
            </a>
            <a
              href='#'
              className='px-3 mr-2 h-full hover:bg-gray-700 font-bold rounded'
            >
              About Us
            </a>
            <a
              href='#'
              className='px-3 mr-2 h-full hover:bg-gray-700 font-bold rounded'
            >
              Contact Us
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarContainer;
