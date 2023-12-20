import "./Faq.css"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

function Faq() {
    return (

        <div className="class3 bg-white md:flex-row flex-col gap-8">
            <div>
                <h2 className="text-3xl text-black">Frequently Asked Questions</h2>
                <p className="text-black">Have more questions? Contact our support team to get what you need.</p>
                <a className="dark text-black" style={{ fontWeight: 'bold' }} href="mailto:info@mailgo.dev">support@pesto.tech</a>
            </div>


            <div className="class1 md:w-6/12 w-full">

                <Disclosure >
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex bg-white text-black w-full justify-between flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium hover:bg-white-200 focus:outline-none focus-visible:ring focus-visible:ring">
                                <span>What kind of tech companies will I work with?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black bg-white">
                                Some of our previous hiring partners have been startups like Pulley, Clipboard Health, Ondeck, Opyn, and many more. We’ve also helped companies like Swiggy, Amazon, Flipkart, Razorpay, etc. directly hire for dev positions.              </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure >
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex bg-white text-black w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium  hover:bg-white-200 focus:outline-none focus-visible:ring focus-visible:ring-">
                                <span>Do you provide a placement guarantee?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black bg-white">
                                We do not guarantee placements. We will assist you in advancing your career and ensure you’re positioned well to maximize your opportunities. We win when you win.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex bg-white text-black w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium  hover:bg-white-200 focus:outline-none focus-visible:ring focus-visible:ring">
                                <span>Can I pursue a second job alongside the one I get from Pesto?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black bg-white">
                                No, Pesto Labs is for people who want to shift to a high-impact role where they’d like to give their 100%.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure >
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex bg-white text-black w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium  hover:bg-white-200 focus:outline-none focus-visible:ring focus-visible:ring">
                                <span>Will I be a full-time employee or a remote contractor?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black bg-white">
                                You will be a full-time employee of the company you work with - entitled to the same perks and benefits as all your international coworkers.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex bg-white text-black w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium  hover:bg-white-200 focus:outline-none focus-visible:ring focus-visible:">
                                <span>Can I get a high-paying WFO/hybrid job with Pesto?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black bg-white">
                                Yes, absolutely. We have partners who are looking to hire for WFO, hybrid work environments. Feel free to mention the same while signing up and we’ll match you with your preferred work environments.              </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex bg-white text-black w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium  hover:bg-white-200 focus:outline-none focus-visible:ring focus-visible:">
                                <span>What if my job requires a workstation setup I don’t have access to?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black bg-white">
                                Pesto provides the required high-quality, ergonomic, workstation setup your remote tech role needs, and gets it delivered to you before you start as an employee.              </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex bg-white text-black w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium  hover:bg-white-200 focus:outline-none focus-visible:ring focus-visible:">
                                <span>What to do if I lose my job? Will Pesto help me to secure another job?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-black`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black bg-white">
                                You can approach Pesto to help you find a new job. We will be happy to assist you if the change was genuine & not because of any disciplinary reasons.              </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

            </div>
        </div>
    )
}

export default Faq