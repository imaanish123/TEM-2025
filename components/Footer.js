import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-stone-50 body-font border-t-2 border-stone-600">
        <div className=" px-5 py-12 mx-auto flex sm:items-start sm:flex-center  flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap  lg:mt-0 mt-10 lg:text-left text-center ">
            <div className="flex flex-col items-center justify-start w-72  py-2 lg:items-start">
              <h2 className="text-left title-font font-medium text-gray-900 tracking-widest text-xl mb-2 border-b-4 border-blue-500 pb-1 md:pb-2 rounded ">
                Contact Information
              </h2>
              {/* <div className="h-1 w-20 bg-teal-600 rounded lg:visible invisible"></div> */}
              <nav className="list-none mb-10 mt-3">
                <li className="text-gray-600 hover:text-gray-800 cursor-pointer ">
                  <b>EMAIL:</b> icetacm@gmail.com
                </li>
                {/* <li className="text-gray-600 hover:text-gray-800 ">
                  <b>PHONE:</b> +91 7800601025
                </li> */}
                {/*<li className="text-gray-600 hover:text-gray-800">Organizing Secretary, MAC2024</li>
            <li className="text-gray-600 hover:text-gray-800">ECED, MNNIT Allahabad</li>
            <li className="text-gray-600 hover:text-gray-800">Prayagraj-211004, UP, India</li>
            */}
              </nav>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 lg:left-[95%] right-0 lg:top-0 lg:right-0 bg-cyan-200 lg:h-full lg:w-18 p-2 flex justify-center  lg:items-center">
          <span className="flex lg:flex-col gap-4">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-full p-4 bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition duration-700 ease-in-out rounded-full cursor-pointer"
            >
              <FaFacebookF className="text-md lg:text-3xl " />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-full p-4 bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition duration-700 ease-in-out rounded-full cursor-pointer"
            >
              <BsInstagram className="text-md lg:text-3xl " />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-full p-4 bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition duration-700 ease-in-out rounded-full cursor-pointer"
            >
              <FaLinkedinIn className="text-md lg:text-3xl " />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
