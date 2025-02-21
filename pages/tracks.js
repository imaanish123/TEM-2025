import React from "react";
import Link from "next/link";
import CenterImageCard from "../components/CenterImageCard";
import SponsorFix from "../components/SponsorFix";

const Tracks = () => {
  return (
    <main className="flex-grow overflow-x-clip bg-gray-50 pt-14">
      <div className="min-h-full bg-gradient-to-r from-white to-indigo-50">
        <div className="relative flex-grow items-start justify-start space-x-2 px-4 md:flex md:flex-row md:px-8 xl:px-10">
          <main className="w-full space-x-6 pt-4 md:flex-grow">
            <div className="flex flex-col items-center justify-center px-4 py-2 sm:p-6">
              <h1 className="text-center text-black text-4xl sm:text-6xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3">
                Tracks
              </h1>
            </div>

            <CenterImageCard
              title="Track 1"
              description={[
                "Medical, therapeutic, and holistic approaches to trauma management",
                "Theorising Trauma",
                "Representing Trauma",
                "Spirituality, and trauma",
              ]}
            />

            <CenterImageCard
              title="Track 2"
              description={[
                "GERIATRIC EMERGENCY MEDICINE",
                "RESUSCITATION, TRAUMA, AND CRITICAL CARE",
                "POCUS",
                "QUALITY IMPROVEMENT AND PATIENT SAFETY (QIPS)",
              ]}
            />

            <CenterImageCard
              title="Track 3"
              description={[
                "HARD CORE EM - JUST THE FACTS",
                "DISASTER EMERGENCY MEDICINE",
                "INTERNATIONAL & GLOBAL EMERGENCY MEDICINE",
                "PLANETARY HEALTH IN EMERGENCY MEDICINE",
              ]}
            />

            <CenterImageCard
              title="Track 4"
              description={[
                "THE ED IN THE SYSTEM LEADING HEALTHCARE DELIVERY & WELLNESS",
                "EQUITY, DIVERSITY, INCLUSIVITY, AND ACCESSIBILITY",
                "EMS",
                "MEDICAL EDUCATION AND LIFELONG LEARNING",
              ]}
            />
          </main>
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            // download={true}
            className="block w-[20%] text-white bg-orange-400 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-[10px] sm:text-sm px-4 py-2 text-center mb-1 sm:mb-10"
          >
            Download CFP
          </a>
        </div>
      </div>
      {/* <SponsorFix /> */}
    </main>
  );
};

export default Tracks;
