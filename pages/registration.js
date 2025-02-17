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
        <div className="p-1 md:p-4 border-2 border-stone-400 overflow-x-scroll">
          <table className="text-center text-[12px] md:text-lg lg:text-lg w-[39rem] md:w-[59rem] lg:w-[67rem]">
            <tbody>
              <tr className="border-b-2 border-stone-600">
                <td className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400 text-center">
                  <span className="text-black font-bold">Category</span>
                </td>
                <td className="py-2 font-bold border-b-2 border-stone-400">
                  Fees
                </td>
              </tr>
              <tr className="border-b-2 border-stone-600">
                <td className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400 text-center">
                  <span className="text-red-500 font-bold">Physician</span>
                </td>
                <td className="py-2 text-center">USD 300</td>
              </tr>

              <tr className="border-b-2 border-stone-600">
                <td className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400 text-center">
                  <span className="text-red-500 font-bold">
                    Medical Student
                  </span>
                </td>
                <td className="py-2 text-center">USD 200</td>
              </tr>

              <tr className="border-b-2 border-stone-600">
                <td className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400 text-center">
                  <span className="text-red-500 font-bold">Attendee</span>
                </td>
                <td className="py-2 text-center">USD 100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center mt-12">
        <p>
          To proceed with registration, please{" "}
          <a
            href="https://iser.org.in/conf/abstract.php?id=2781921"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            click here
          </a>
          .
        </p>
      </div>
      <div className="text-center mt-8">
        <p>
          If you require an invitation letter for VISA application purposes,
          please{" "}
          <a
            href="https://forms.gle/6C3KGNVBqxREtFUt5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            click here
          </a>{" "}
          to submit your request.
        </p>
      </div>
      <h1 className="text-center text-3xl font-bold mt-12 mb-8">
        <span className="border-b-4 border-blue-500 px-4 pb-4">
          Registration Cancellation Policy
        </span>
      </h1>
      <div className="text-center text-lg text-gray-700 px-8">
        <p>All event cancellations must be made in writing by email.</p>
        <p>
          A full refund (less $200 credit card admin fee) will be granted if
          notification is received by March 1st. No refunds are possible after
          this date.
        </p>
        <p className="font-semibold text-red-500">
          Social tickets are non-refundable.
        </p>
      </div>
      <h1 className="text-center text-3xl font-bold mt-12 mb-8">
        <span className="border-b-4 border-blue-500 px-4 pb-4">
          Bank Details
        </span>
      </h1>

      <div className="flex justify-center">
        <div className="md:mx-28 bg-red-100 max-w-[700px] w-[90%] md:w-[70%] lg:w-[50%] text-sm md:text-lg p-4 mt-8 flex flex-col items-center border-2 border-stone-400 rounded-2xl">
          <div className="w-full flex justify-between  py-2">
            <span>Account Name</span>
            <span className="text-right">
              Maulana Azad National Institute of Technology (MANIT) Bhopal
            </span>
          </div>
          <div className="w-full flex justify-between  py-2">
            <span>Account Number</span>
            <span className="text-right">10020150107</span>
          </div>
          <div className="w-full flex justify-between  py-2">
            <span>IFSC Code</span>
            <span className="text-right">SBIN0001608</span>
          </div>

          <div className="w-full flex justify-between  py-2">
            <span>Bank Name</span>
            <span className="text-right">State Bank of India</span>
          </div>
          <div className="w-full flex justify-between  py-2">
            <span>Branch</span>
            <span className="text-right">
              MAULANA AZAD COL OF TECH (BPL) BHOPAL-1608
            </span>
          </div>
        </div>
      </div>

      <div className="h-12 w-full"></div>
    </div>
  );
};

export default Registration;
