// import React from 'react';
// import { TbMathGreater } from "react-icons/tb";
import archi1 from "../assets/archi1.svg";
import archi2 from "../assets/archi2.svg";
import archi3 from "../assets/archi3.svg";

function EngagingLearning() {
    return (
        <section className="w-full bg-[#fff] flex justify-center items-center py-14">
            <div className="w-[1199px] bg-white mx-auto flex-col justify-start items-center gap-10 inline-flex">
                <div className="flex-col justify-start items-center gap-5 flex">
                    <div className="self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
                        <div className="self-stretch text-center text-black text-base font-semibold font-['Inter'] leading-normal">Our Services</div>
                        <div className="self-stretch text-center text-black text-4xl font-semibold font-['Inter'] leading-[44px]">Fostering a playful & engaging learning <br />environment</div>
                    </div>
                </div>
                <div className="flex-col justify-start items-center gap-10 flex">
                    <div className="md:justify-start justify-center items-start gap-8 flex flex-wrap">
                        <div className="px-10 py-[30px] bg-black-500 rounded-xl shadow border flex-col justify-center items-start gap-[22px] inline-flex">
                            <div className="flex-col justify-start items-start gap-[30px] flex">
                                <div className="justify-start items-center gap-5 inline-flex">
                                    <div className="px-[11px] py-3 bg-blue rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
                                        <div className="w-[20px] h-7 relative">
                                            <img className="w-[50.13px] h-[35.69px] left-[4.87px] top-[3.31px] absolute" src={archi1} />
                                        </div>
                                    </div>
                                    <div className="text-black text-2xl font-bold font-['Inter'] leading-9 tracking-wide">User Experience</div>
                                </div>
                                <div className="w-[293px] text-black text-base font-normal font-['Inter'] leading-7">Lessons on design that cover the <br /> most recent developments.</div>
                            </div>
                            <div className="justify-start items-center gap-[21px] inline-flex">
                                <div className="text-center text-black text-lg font-medium font-['Inter'] leading-[25.20px] tracking-tight">
                                    <button className="bg-gray-200 rounded-md p-2">Learn more</button>
                                </div>
                            </div>
                        </div>
                        <div className="px-10 py-[30px] bg-white rounded-xl shadow border border-zinc-300 border-opacity-40 flex-col justify-center items-start gap-[22px] inline-flex">
                            <div className="flex-col justify-start items-start gap-[30px] flex">
                                <div className="justify-start items-center gap-5 inline-flex">
                                    <div className="px-[11px] py-3 bg-indigo-100 rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
                                        <div className="w-6 h-6 relative">
                                            <img className="w-[50.13px] h-[24.69px] left-[0.87px] top-[3.31px] absolute border" src={archi2} />
                                        </div>
                                    </div>
                                    <div className="text-gray-900 text-2xl font-bold font-['Inter'] leading-9 tracking-wide">Web Development</div>
                                </div>
                                <div className="w-[293px] text-stone-500 text-base font-normal font-['Inter'] leading-7">Classes in development that cover the <br /> most recent advancements in web.</div>
                            </div>
                            <div className="justify-start items-center gap-[21px] inline-flex">
                                <div className="text-center text-black text-lg font-medium font-['Inter'] leading-[25.20px] tracking-tight">
                                    <button className="bg-gray-200 rounded-md p-2">Learn more</button>
                                </div>
                            </div>
                        </div>
                        <div className="px-10 py-[30px] bg-white rounded-xl shadow border border-zinc-300 border-opacity-40 flex-col justify-center items-start gap-[22px] inline-flex">
                            <div className="flex-col justify-start items-start gap-[30px] flex">
                                <div className="justify-start items-center gap-5 inline-flex">
                                    <div className="px-[11px] py-3 bg-pink-100 rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
                                        <div className="w-[25.71px] h-6 relative">
                                            <img className="w-[50.13px] h-[24.69px] left-[0.87px] top-[3.31px] absolute border" src={archi3} />
                                        </div>
                                    </div>
                                    <div className="text-gray-900 text-2xl font-bold font-['Inter'] leading-9 tracking-wide">Marketing</div>
                                </div>
                                <div className="w-[293px] text-stone-500 text-base font-normal font-['Inter'] leading-7">Marketing courses that cover the most <br /> recent marketing trends</div>
                            </div>
                            <div className="justify-start items-center gap-[21px] inline-flex">
                                <div className="text-center text-black text-lg font-medium font-['Inter'] leading-[25.20px] tracking-tight">
                                    <button className="bg-gray-200 rounded-md p-2">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-24 h-3 relative">
                    <div className="w-12 h-3 left-0 top-0 absolute bg-grey-500 rounded-md" />
                    <div className="w-3 h-3 left-[60px] top-0 absolute bg-zinc-300 rounded-full" 
                    <div className="w-3 h-3 left-[60px] top-0 absolute bg-zinc-300 rounded-full"></
                    <div className="w-3 h-3 left-[84px] top-0 absolute bg-zinc-300 rounded-full" />
                </div> */}
                    <div className="w-24 h-3 relative">
                        <div className="w-3 h-3 left-[40px] top-0 absolute bg-zinc-300 rounded-full" />
                        <div className="w-3 h-3 left-[60px] top-0 absolute bg-zinc-300 rounded-full" />
                        <div className="w-3 h-3 left-[80px] top-0 absolute bg-zinc-300 rounded-full" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default EngagingLearning
