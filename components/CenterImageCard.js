import React from "react";
import Link from "next/link";
import hovers from "../styles/track.module.css";

const CenterImageCard = ({ title, description }) => {
  return (
    <section
      className={`${hovers.coolHover} hover:text-black text-gray-600 body-font border rounded-lg my-12 flex justify-center items-center text-center p-10`}
    >
      <div className="max-w-2xl w-full">
        <h1 className="title-font sm:text-3xl text-2xl mb-4 font-bold text-black">
          {title}
        </h1>
        <p className="mb-8 leading-relaxed text-lg">
          <ul className="list-disc pl-5 text-left inline-block">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </p>
        <div className="flex justify-center">
          <Link href="/PaperSubmission">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit Your Papers
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CenterImageCard;
