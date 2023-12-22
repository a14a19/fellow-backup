import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const Pricing = () => {
  return (
    <div>
      <div>
        <div className="text-center py-16">
          <p className="sm:text-3xl text-2xl font-semibold">
            Schedule a 1:1 meeting with Our Counsellor
          </p>
          <p className="my-4">
            Get a chance to interact with the team before enrolling <br />
            in the program.
          </p>
          <button className="mt-5 px-6 py-3 font-semibold rounded boder-blue-700 bg-blue-700 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400">
            Book now
          </button>
        </div>
        <h1 className="bg-white py-24 text-4xl font-semibold text-center text-black">
          Program fees{" "}
        </h1>
        <div className=" flex flex-col sm:flex-row gap-16 sm:px-24 px-8 py-15 bg-white">
          <div className="p-8 rounded-2xl border-2 border-white  bg-black">
            <div className="text-2xl font-semibold">Placement 101</div>
            <div className="py-2 text-4xl font-semibold mt-4 mb-8 package-price">
              $99
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Linkedin / CV review
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Industry Readiness
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Access to Protothon
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Placement assistance
            </div>
            <div className="py-2 font-semibold">
              <XCircleIcon className="h-6 w-6 bg-white text-red-500 rounded-full inline mr-4" />
              1:1 live sessions
            </div>
            <div className="py-2 font-semibold">
              <XCircleIcon className="h-6 w-6 bg-white text-red-500 rounded-full inline mr-4" />
              Real world experience
            </div>
            <div className="py-2 font-semibold">
              <XCircleIcon className="h-6 w-6 bg-white text-red-500 rounded-full inline mr-4" />
              Job Guarantee or Refund
            </div>
          </div>
          <div className="p-8 rounded-2xl border-d border-blue-500 bg-black">
            <div className="text-2xl font-semibold">Pay after placement</div>
            <div className="py-2 text-4xl font-semibold mt-4 mb-8 package-price">
              $999
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Industry Readiness
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Access to Protothon
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Linkedin / CV review
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              1:1 live sessions
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Real world experience
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Placement assistance
            </div>
            <div className="py-2 font-semibold">
              <XCircleIcon className="h-6 w-6 bg-white text-red-500 rounded-full inline mr-4" />
              Job Guarantee or Refund
            </div>
            <div className="py-2 font-semibold">
              <p>
                A small{" "}
                <span className="text-green-500 font-semibold">
                  pre - deposit of $ 200{" "}
                </span>
                required for accountability*
              </p>
            </div>
          </div>
          <div className="p-8 rounded-2xl border-2 border-white bg-black">
            <div className="text-2xl font-semibold">Elite Pack</div>
            <div className="py-2 text-4xl font-semibold mt-4 mb-8 package-price">
              $2999{" "}
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Linkedin / CV review
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Industry Readiness
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Access to Protothon
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              1:1 live sessions
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Real world experience
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Placement assistance
            </div>
            <div className="py-2 font-semibold">
              <CheckCircleIcon className="h-6 w-6 bg-white text-green-500 rounded-full inline mr-4" />
              Job Guarantee or Refund
            </div>
          </div>
        </div>
      </div>
      <div className="gap-20 sm:px-24 px-8 py-24 bg-white ">
        <div>
          <div className="bg-white py-1 font-semibold text-blue-500 design">
            Explore Programs
          </div>
          <div className="bg-white py-2 font-bold text-xl text-black">
            Our Most Popular Class
          </div>
          <div className="bg-white join py-2 pb-8 text-xs">
            Let's join our famous class the knowledge provided will definitely
            be useful for you.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-16 py-15">
          <div className="flex-1 shadow-lg">
            <img src="../src/assets/images/image-read.png" alt="hrh" />
            <div className="gap-9 mx-5">
              <div className="flex flex-row">
                <span>
                  <img
                    className="h-8 w-8 my-4"
                    src="../src/assets/images/Google-.png"
                    alt=""
                  />
                </span>
                <span className=" py-6 font-semibold text-xm mx-4 design">
                  Google
                </span>
              </div>
              <div className="py-2 font-semibold text-black ">
                Google Project Management:
              </div>
              <span className="text-black">Skills you'll gain:</span>
              <span className="text-3">
                Project Management, Strategy and Operations, Leadership and
                Management, Communications, Business..
              </span>
              <div className="flex flex-row gap-4 w-100 py-3">
                <div className="text-black text-xs">4.3</div>
                <img src="../src/assets/images/rating.png" alt="hrh" />
                <div className="text-black text-xs">(99K reviwes)</div>
              </div>
              <div className="text-1 py-4">
                Beginner Specialization 3 - 6 Months
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-lg">
            <img src="../src/assets/images/project.png" alt="hrh" />
            <div className="gap-9 mx-5">
              <div className="flex flex-row">
                <span>
                  <img
                    className="h-8 w-8 my-4"
                    src="../src/assets/images/software.png"
                    alt=""
                  />
                </span>
                <span className=" py-6 font-semibold text-xm mx-4 design">
                  Scaler
                </span>
              </div>
              <div className="py-2 font-semibold text-black ">
                Software Project Management:
              </div>
              <span className="text-black">Skills you'll gain:</span>
              <span className="text-3">
                Sosftware Engineering, Agile Softare Devlopment, Product
                Management, Design and Product...
              </span>
              <div className="flex flex-row gap-4 w-100 py-3">
                <div className="text-black text-xs">4.7</div>
                <img src="../src/assets/images/rating.png" alt="hrh" />
                <div className="text-black text-xs">(11K reviews)</div>
              </div>
              <div className="text-1 py-4">
                Beginner Specialization 3 - 6 Months
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-lg">
            <img src="../src/assets/images/Concept-2.png" alt="hrh" />
            <div className="gap-9 mx-5">
              <div className="flex flex-row">
                <span>
                  <img
                    className="h-8 w-8 my-4"
                    src="../src/assets/images/digital-product.png"
                    alt=""
                  />
                </span>
                <span className=" py-6 font-semibold text-xm mx-4 design">
                  Coursera
                </span>
              </div>
              <div className="py-2 font-semibold text-black ">
                Digital Product Management:
              </div>
              <span className="text-black">Skills you'll gain:</span>
              <span className="text-3">
                Project Management, Strategy and Operations, Leadership and
                Management, Communications, Business..
              </span>
              <div className="flex flex-row gap-4 w-100 py-3">
                <div className="text-black text-xs">4.7</div>
                <img src="../src/assets/images/rating.png" alt="hrh" />
                <div className="text-black text-xs">(9.1K reviews)</div>
              </div>
              <div className="text-1 py-4">
                Beginner Specialization 3 - 6 Months
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
