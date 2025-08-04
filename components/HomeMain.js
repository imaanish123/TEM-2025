import React, { useEffect } from "react";
import HomeImageGallery from "./HomeImageGallery";
import { MdLocationOn } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import gradients from "../styles/customGradient.module.css";
import Lottie from "lottie-react";
import research from "../lottieFiles/research.json";
import { useRouter } from "next/router";
import Map from "./Map";
import TechCollabGallery from "./TechCollabGallery";
import Link from "next/link";
import Sponsors from "../components/Sponsors";
import Sponsors1 from "../components/Sponsors1";
import { IoMdNotifications } from "react-icons/io";
import SponsorCarousel from "./SponsorCarousel";
import NotificationCarousel from "./Notification";

const HomeMain = () => {
  const router = useRouter();

  const navigate = (dest) => {
    router.push(dest);
  };

  return (
    <>
      {/* <div className={`container mx-auto flex flex-wrap justify-center bg-transparent ${gradients.homePage}`}>
  <div className={`w-full flex justify-center ${gradients.homePage}`} style={{ marginTop: "85px", marginBottom: "-35px" }}>
    <div className="flex justify-between items-center overflow-x-scroll w-full md:w-[90%] xl:w-[80%] bg-transparent ">
      <img src="apslogo1.png" alt="Logo 1" className="h-20 md:h-24 xl:h-32 mx-2" />
      <img src="ieeeUP.jpg" alt="Logo 2" className="h-20 md:h-24 xl:h-32 mx-2" />
      <img src="apslogo1.png" alt="Logo 1" className="h-20 md:h-24 xl:h-32 mx-2" />
      <img src="ieeeUP.jpg" alt="Logo 2" className="h-20 md:h-24 xl:h-32 mx-2" />
      <img src="apslogo1.png" alt="Logo 1" className="h-20 md:h-24 xl:h-32 mx-2" />
    </div>
  </div>
</div> */}

      {/* <SponsorCarousel />
      <NotificationCarousel />
      <img
        src="Standee1.jpg"
        className="h-[60%] w-[60%] object-contain mx-auto"
      /> */}

      <div
        className={`h-[60vh] md:h-[95vh] mt-[80px] relative ${gradients.homePage}`}
      >
        <HomeImageGallery />
        <div className="absolute top-10 flex flex-col justify-center items-center sm:flex-row sm:gap-10 ">
          <div className="md:top-[20%] lg:top-[20%] xl:top-[5%] left-0 z-10 w-[90%] md:w-[65%] lg:w-[60%]  md:border-2 md:pt-8 md:mx-4 rounded-2xl md:px-10 ">
            <div className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left pt-4 mb-6">
              <span className="text-orange-400"></span>{" "}
              <span className="text-white">
                4th International conference of
              </span>{" "}
              <span className="text-white">Emergency Trauma</span>{" "}
              <span className="text-white">and Acute Care</span>{" "}
              <span className="text-white">Medicine </span>{" "}
              <span className="text-white">2025 </span>
              <span className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                <br></br>
              </span>
            </div>
            <div className="w-full my-2 sm:pl-0 flex flex-col justify-center gap-4 lg:justify-start lg:gap-10 font-semibold">
              <div className="flex w-full max-w-[650px] justify-around md:justify-between">
                <div>
                  <p className="flex items-center gap-3">
                    <Link href="/registration">
                      <span className="bg-purple-200 rounded-full p-[13px] cursor-pointer">
                        <BsFillCalendarCheckFill className="w-3 h-3 md:w-5 md:h-5 text-lime-600" />
                      </span>
                    </Link>
                    <span className="text-sm lg:text-lg text-white">
                      {" "}
                      August 12-14, 2025
                    </span>
                  </p>
                </div>

                <div>
                  <p className="flex items-center justify-end gap-2">
                    <Link href="/#venue">
                      <span className="bg-purple-200 rounded-full p-2 cursor-pointer">
                        <MdLocationOn className="w-5 h-5 md:w-8 md:h-8 text-blue-500" />
                      </span>
                    </Link>
                    <span className="text-sm lg:text-lg text-white">
                      {" "}
                      Kochi, Kerala
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:px-32"></div>
            </div>
          </div>
          {/* <div className="top-[10%] md:top-[10%] lg:top-[20%] xl:top-[5%] py-8 px-4 w-[90%] md:w-[30%] lg:w-[30%] flex flex-col justify-center items-center text-white rounded-2xl z-10 ">
            <a
              href="/CFP_MAC2025.pdf"
              download={true}
              // className="block w-[70%] text-white bg-orange-400 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-[12px] sm:text-sm px-5 py-2.5 text-center mb-1 sm:mb-10 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              className="block w-[50%] text-blue-900 bg-blue-200 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[12px] sm:text-sm px-5 py-2.5 text-center mb-1 sm:mb-10 dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
            >
              Call For Papers
            </a>

            <a
              href="https://cmt3.research.microsoft.com/MAC2025/"
              // className="block w-[70%] text-white bg-orange-400 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-[12px] sm:text-sm px-5 py-2.5 text-center mb-1 sm:mb-10 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              className="block w-[50%] text-blue-900 bg-blue-200 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[12px] sm:text-sm px-5 py-2.5 text-center mb-1 sm:mb-10 dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
            >
              Submit Papers
            </a>

             <a href="/registration" class="block w-[70%] text-white bg-orange-400 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-[12px] sm:text-sm px-5 py-2.5 text-center mb-1 sm:mb-10 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Registration</a> 
            <Link href="/registration">
              <span className="block w-[50%] text-blue-900 bg-blue-200 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-[12px] sm:text-sm px-5 py-2.5 text-center mb-1 sm:mb-10 dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
                Registration
              </span>
            </Link>
          </div> */}
        </div>
      </div>

      <div className={`w-full text-black ${gradients.homePage}`}>
        <section className="pt-6 w-full">
          <div className=" container mx-auto flex md:px-5 py-2 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 px-6 lg:pr-24 md:pr-16 relative flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="relative title-font text-4xl md:text-6xl mb-4 font-bold border-b-4 pb-4 px-8 md:px-0 md:pr-24 border-cyan-600">
                <span className="text-orange-400">ETACM</span>2025
              </h1>
              <h2 className="text-lg">
                {/* <span>Co-Organised By</span> */}

                <p>
                  {/* <span className="text-orange-500 font-bold text-xl block">
                    MANIT Bhopal, India
                  </span>
                  <span className="text-orange-500 font-bold text-xl block">
                    RGPV Bhopal, India
                  </span> */}

                  {/* <span className="text-orange-500 font-bold text-xl block">
                    VMSB UTU (THDC-IHET), Uttarakhand, India
                  </span> */}
                  {/* <span className="text-black-500 font-bold text-xl block">
    &
  </span> */}
                  {/* <span className="text-orange-500 font-bold text-xl block">
                    MNNIT ALLAHABAD, India
                  </span> */}
                </p>
              </h2>
              <br />
              <p className="md:mb-8 leading-relaxed font-semibold text-lg text-justify">
                Welcome to the 4th International conference of Emergency Trauma
                and Acute Care medicine 2025!
                <br />
                The 4th International conference on Emergency Trauma and Acute
                Care Medicine will serve as a platform for healthcare
                professionals, trauma surgeons, emergency physicians, and
                researchers to discuss advancements, challanges, and innovations
                in the critical field of acute care. As emergency and trauma
                cases continue to rise globally due to accidents, natural
                disasters, and violence, the demand for rapid, evidence-based
                interventions is greater than ever.
                <br />
                This conference brings together leading experts to share
                clinical insights, research findings, and practical strategies
                that can significantly improve patient outcomes. Topics include
                trauma resuscitation protocols, surgical emergencies, intensive
                care management, pre-hospital care, and the integration of new
                technologies such as AI-driven diagnostics and telemedicine in
                emergency settings.
                <br />
                Interactive workshops, keynote lectures, and panel discussions
                will address both the clinical and ethical complexities of
                trauma care, especially in resource-limited settings. The event
                also provides opportunities for early-career professionals to
                present case studies and research, fostering collaboration
                across institutions and disciplines. <br/> By promoting
                interdisciplinary dialogue and continuous education, the
                conference aims to strengthen emergency response systems,
                optimize trauma care delivery, and ultimately save lives.
                <br/> Come,
                join the conference to underscore the urgent need for
                preparedness, quick decision-making, and global cooperation in
                addressing the evolving landscape of emergency and acute medical
                care.
                <br />
                Organising committee,
                <br />
                4th International conference of Trauma and emergency medicine
                <br />
                2025, Kochi, Kerala
              </p>
            </div>

            {/* <div className="w-full lg:w-[40%] bg-red-100">
              <img
                className="object-cover object-center"
                alt="hero"
                src="/conf.webp"
              />
            </div> */}
          </div>
        </section>

        <section id="callforpaper" className="body-font">
          <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 order-last md:order-first mt-8 md:mt-0">
  <img src="/25039-removebg-preview.png" alt="Emergency Medicine" />
</div>

            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font text-4xl md:text-[5vw] lg:text-6xl mb-4 font-bold border-b-4 pb-4 border-cyan-600">
                <span className="pr-6">Call For Papers</span>
              </h1>
              <h2 className="text-orange-600 font-bold text-xl mb-6">
                4th International conference on Emergency Trauma and Acute Care
                Medicine
              </h2>

              <div className="my-8 leading-relaxed">
                <p className="text-lg">
                  The technical sessions will have four tracks covering recent
                  and emerging research topics in the field of Emergency Trauma
                  and acute care medicines. Every track will have the following
                  events:
                </p>
                <ul className="pl-6 font-semibold pt-4 text-left text-lg">
                  <li className="list-disc">
                    Paper Presentations and best paper awards
                  </li>
                  <li className="list-disc">Key Note Lectures</li>
                  <li className="list-disc">Special Sessisons</li>
                  <li className="list-disc">Panel Discussions</li>
                  <li className="list-disc">Technical/Industrial Workshop</li>
                </ul>
              </div>

              <p className="px-16 md:px-0 mb-4 leading-relaxed  md:font-semibold md:text-lg"></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeMain;
