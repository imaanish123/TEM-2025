import React from "react";
import Lottie from "lottie-react";
import examsPreparation from "../lottieFiles/examsPreparation.json";
import gradients from "../styles/customGradient.module.css";
import SponsorFix from "../components/SponsorFix";

const guideline = () => {
  return (
    <main
      className={`flex-grow overflow-x-clip bg-gray-50 pt-14 ${gradients.homePage}`}
    >
      <div className="min-h-full bg-gradient-to-r from-white to-indigo-50 ">
        <div className="relative flex-grow items-start justify-start space-x-2 md:flex md:flex-row md:px-8 xl:px-10 ">
          <main className="w-full space-x-6 pt-4 md:flex-grow ">
            <div className="flex flex-col items-center justify-center px-4 py-2 sm:px-6 sm:py-2">
              <h1 className=" text-center text-black text-4xl sm:text-5xl font-bold leading-[3rem] border-b-4 border-blue-500 pb-1 md:pb-3 ">
                Submission Guidelines
              </h1>
            </div>
            <section className="p-5 text-gray-600 body-font border-rose-500 rounded mt-4 !ml-0">
              <div className="flex gap-4 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Procedure
                  </h1>
                  <p className="px-6 md:px-0 md:mb-8 leading-relaxed md:font-semibold md:text-lg text-justify">
                    Kindly submit papers at the{" "}
                    <a
                      href="https://iser.org.in/conf/abstract.php?id=2781921"
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Paper Submission
                    </a>{" "}
                    link on the website. <br />
                    If you have any queries, please reach us at{" "}
                    <a
                      href="mailto:ic25tem2025@gmail.com"
                      className="text-blue-500"
                    >
                      ic25tem2025@gmail.com
                    </a>
                  </p>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-8 md:mt-2 font-medium text-gray-900 block">
                    Language
                  </h1>
                  <p className="px-16 md:px-0 mb-4 leading-relaxed md:font-semibold md:text-lg">
                    The official language of all the conferences and papers is
                    English. Therefore, the paper must be written in English,
                    which must be straightforward and free of grammatical
                    errors.
                  </p>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 block">
                    Our Review Process
                  </h1>
                  <p className="mb-4 leading-relaxed md:font-semibold md:text-lg">
                    All the successfully submitted papers will be assessed by
                    the Program Chair, who will initiate the peer review
                    process. Then, the Program Chair will designate at least two
                    suitable technical committee members (Reviewers) with ample
                    field knowledge. After a thorough review, the comments will
                    be submitted to the Program Chair personnel, who will make
                    the final decision about submitting the paper.
                  </p>
                  <p className="mb-4 leading-relaxed md:font-semibold md:text-lg">
                    Finally, the conference secretary will inform the concerned
                    authors about the decision. The papers which are not
                    accepted will be sent back for revision, and those that pass
                    the second review will be accepted.
                  </p>
                  <p className="mb-4 leading-relaxed md:font-semibold md:text-lg text-red-500">
                    Note: Please check your email regularly during the review
                    process.
                  </p>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 block">
                    Academic Ethics
                  </h1>
                  <p className="mb-4 leading-relaxed md:font-semibold md:text-lg">
                    The submitted papers, abstracts, etc., must be original,
                    unpublished work that is not considered for publication
                    elsewhere. In addition, we request the academicians submit
                    original, experimental, or theoretical work that follows the
                    proper citation rules.
                  </p>
                  <p className="mb-4 leading-relaxed md:font-semibold md:text-lg">
                    Following academic ethics is the foundation of any academic.
                    Therefore, plagiarism will not be accepted and will lead to
                    rejection. Some of the actions plagiarism may include are:
                  </p>
                  <ul className="list-disc pl-5 md:font-semibold md:text-lg">
                    <li>
                      Rejection of the article or removal of the article from
                      the final publications.
                    </li>
                    <li>
                      Reporting the issue to the concerned author's
                      supervisor(s) and affiliated institution(s).
                    </li>
                    <li>
                      Reporting the case to the office of academic ethics and
                      research funding agency.
                    </li>
                    <li>
                      A right to mention the author's name(s), the title of the
                      article, the name(s) of the affiliated institution, and
                      the details of misconduct, etc., of the plagiarist.
                    </li>
                  </ul>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-12">
                  <Lottie animationData={examsPreparation} loop={true} />
                </div>
              </div>
            </section>
          </main>
        </div>
        <SponsorFix />
      </div>
    </main>
  );
};

export default guideline;
