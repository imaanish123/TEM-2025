import React from "react";
import Link from "next/link";
import SponsorFix from "../components/SponsorFix";

const Registration = () => {
  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      <div id="registration" className="h-12 w-full"></div>
      <h1 className="text-center text-lg sm:text-xl md:text-3xl font-bold mt-12">
        <span className="border-b-4 border-blue-500 px-4 pb-4">
          Registration Fee
        </span>
      </h1>
      {/* <div className="flex justify-center mt-16">
        <div className="p-1 md:p-4 border-2 border-stone-400 overflow-x-scroll">
          <table className="text-left text-[12px] md:text-lg lg:text-lg w-[39rem] md:w-[59rem] lg:w-[67rem]">
            <tbody>
              <tr className="border-b-2 border-stone-600">
                <td
                  className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400"
                  rowSpan={3}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="text-red-500 font-bold">Physician</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b-2 border-stone-400">
                <td className="py-2">USD 300</td>
              </tr>

              <tr className="border-b-2 border-stone-600">
                <td
                  className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400"
                  rowSpan={3}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="text-red-500 font-bold">
                      Medical Student
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="border-b-2 border-stone-400">
                <td className="py-2">USD 200</td>
              </tr>

              <tr className="border-b-2 border-stone-600">
                <td
                  className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400"
                  rowSpan={3}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="text-red-500 font-bold">Attendee</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b-2 border-stone-400">
                <td className="py-2">USD 100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      {/* <div className="flex justify-center mt-16">
        <div className="p-1 md:p-4 border-2 border-stone-400 overflow-x-scroll">
          <table className="text-left text-[12px] md:text-lg lg:text-lg w-[39rem] md:w-[59rem] lg:w-[67rem]">
            <tbody>
              <tr className="border-b-2 border-stone-600">
                <td className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400">
                  <div className="flex justify-center items-center">
                    <span className="text-red-500 font-bold">Physician</span>
                  </div>
                </td>
                <td className="py-2">USD 300</td>
              </tr>

              <tr className="border-b-2 border-stone-600">
                <td className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400">
                  <div className="flex justify-center items-center">
                    <span className="text-red-500 font-bold">
                      Medical Student
                    </span>
                  </div>
                </td>
                <td className="py-2">USD 200</td>
              </tr>

              <tr className="border-b-2 border-stone-600">
                <td className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400">
                  <div className="flex justify-center items-center">
                    <span className="text-red-500 font-bold">Attendee</span>
                  </div>
                </td>
                <td className="py-2">USD 100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      <div className="flex justify-center mt-16">
        <div className="p-1 md:p-4 border-2 border-stone-400 w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <table className="text-center text-xs sm:text-sm md:text-lg lg:text-lg w-full table-auto">
            <tbody>
              <tr className="border-b-2 border-stone-600">
                <td className="w-1/2 md:w-72 text-xs font-semibold md:text-lg lg:text-lg px-1 md:px-2 border-b-2 border-stone-400 text-center break-words">
                  <span className="text-black font-bold">Category</span>
                </td>
                <td className="py-2 font-bold border-b-2 border-stone-400">
                  Fees
                </td>
              </tr>
              <tr className="border-b-2 border-stone-600">
                <td className="w-1/2 md:w-72 text-xs font-semibold md:text-lg lg:text-lg px-1 md:px-2 border-b-2 border-stone-400 text-center break-words">
                  <span className="text-red-500 font-bold">Physician</span>
                </td>
                <td className="py-2 text-center">INR 10,000</td>
              </tr>
              <tr className="border-b-2 border-stone-600">
                <td className="w-1/2 md:w-72 text-xs font-semibold md:text-lg lg:text-lg px-1 md:px-2 border-b-2 border-stone-400 text-center break-words">
                  <span className="text-red-500 font-bold">
                    Medical Student
                  </span>
                </td>
                <td className="py-2 text-center">INR 6,000</td>
              </tr>
              <tr className="border-b-2 border-stone-600">
                <td className="w-1/2 md:w-72 text-xs font-semibold md:text-lg lg:text-lg px-1 md:px-2 border-b-2 border-stone-400 text-center break-words">
                  <span className="text-red-500 font-bold">Attendee</span>
                </td>
                <td className="py-2 text-center">INR 5,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mt-12">
        <p>
          To proceed with registration, please{" "}
          <a
            href="#"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            click here
          </a>
          .
        </p>
      </div>
      <div className="text-center mt-8">
        {/* <p>
          If you require an invitation letter for VISA application purposes,
          please{" "}
          <a
            href="#"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            click here
          </a>{" "}
          to submit your request.
        </p> */}
      </div>
      <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-12 mb-8">
        <span className="border-b-4 border-blue-500 px-4 pb-4">
          Registration Cancellation Policy
        </span>
      </h1>

      <div className="text-center text-lg text-gray-700 px-8">
        <p>All event cancellations must be made in writing by email.</p>
        <p>
          A full refund (less Rs. 200 credit card admin fee) will be granted if
          notification is received by August 1st. No refunds are possible after
          this date.
        </p>
        {/* <p className="font-semibold text-red-500">
          Social tickets are non-refundable.
        </p> */}
      </div>

      <div className="h-12 w-full"></div>
    </div>
  );
};

export default Registration;
