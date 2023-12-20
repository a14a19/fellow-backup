import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import "./lovefellow.css";

const LoveFellow = () => {
  return (
    <section className="w-full bg-[#fff] flex justify-center items-center py-16">
      <div className="max-w-[1190px] mx-auto bg-white w-full px-8 py-8 flex-col justify-start items-start gap-8">
        <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose my-6">
          Our recent blogs
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
          <div className="w-full flex flex-col gap-8">
            {/* Blog Post 1 */}
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                className="w-full md:w-[calc(40% - 16px)] h-[200px] md:h-[200px] lg:h-[240px] object-cover"
                src={blog1}
                alt="Blog 1"
              />
              <div className="flex-grow flex flex-col justify-start items-start gap-6">
                <div className="text-violet-700 text-sm font-semibold font-['Inter'] leading-tight">
                  November 16, 2023
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <div className="text-gray-900 text-lg font-semibold font-['Inter'] leading-7">
                    Join a global Product management aggregate.
                  </div>
                  <div className="text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                    Local recognition does not cut it anymore. Get vetted and join
                    a curated list of top Product Managers from around the world.
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-2.5 py-0.5 bg-pink-50 rounded-2xl flex justify-center items-center">
                    <div className="text-center text-pink-700 text-sm font-medium font-['Inter'] leading-tight">
                      Product Management
                    </div>
                  </div>
                  {/* <div className="px-2.5 py-0.5 bg-emerald-50 rounded-2xl flex justify-center items-center">
                  <div className="text-center text-emerald-700 text-sm font-medium font-['Inter'] leading-tight">
                    Manage
                  </div>
                </div> */}
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                className="w-full md:w-[calc(40% - 16px)] h-[200px] md:h-[200px] lg:h-[240px] object-cover"
                src={blog2}
                alt="Blog 2"
              />
              <div className="flex-grow flex flex-col justify-start items-start gap-6">
                <div className="text-violet-700 text-sm font-semibold font-['Inter'] leading-tight">
                  September 24, 2023
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <div className="text-gray-900 text-lg font-semibold font-['Inter'] leading-7">
                    Find a lifelong career partner.
                  </div>
                  <div className="text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                    Use our platform to find exciting career growth opportunities
                    when you want to switch jobs, and find mentors for life.
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-2.5 py-0.5 bg-pink-50 rounded-2xl flex justify-center items-center">
                    <div className="text-center text-pink-700 text-sm font-medium font-['Inter'] leading-tight">
                      Product Management
                    </div>
                  </div>
                  {/* <div className="px-2.5 py-0.5 bg-sky-50 rounded-2xl flex justify-center items-center">
                  <div className="text-center text-sky-700 text-sm font-medium font-['Inter'] leading-tight">
                    UI Design
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="flex-grow flex flex-col justify-start items-start gap-8">
            <img
              className="w-full h-[240px] md:h-[240px] lg:h-[240px] object-cover"
              src={blog3}
              alt="Blog 3"
            />
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="text-violet-700 text-sm font-semibold font-['Inter'] leading-tight">
                November 13, 2023
              </div>
              <div className="flex justify-start items-start gap-4">
                <div className="text-gray-900 text-2xl font-semibold font-['Inter'] leading-loose">
                  Attend events with speakers you look up to.
                </div>
              </div>
              <div className="text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                Access live community events, monthly town-halls, workshops and
                more with Fellow Alums and guest speakers throughout the year.
              </div>
              <div className="flex gap-2">
                <div className="px-2.5 py-0.5 bg-purple-50 rounded-2xl flex justify-center items-center">
                  <div className="text-center text-violet-700 text-sm font-medium font-['Inter'] leading-tight">
                    Product Management
                  </div>
                </div>
                <div className="px-2.5 py-0.5 bg-indigo-50 rounded-2xl flex justify-center items-center">
                  <div className="text-center text-indigo-700 text-sm font-medium font-['Inter'] leading-tight">
                    Research
                  </div>
                </div>
                {/* <div className="px-2.5 py-0.5 bg-pink-50 rounded-2xl flex justify-center items-center">
                <div className="text-center text-pink-700 text-sm font-medium font-['Inter'] leading-tight">
                  Developments
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveFellow;
