import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <header className="main bg-[#FCFAFF] h-min z-100 relative">
                <div className="navbar bg-[#FCFAFF] w-full h-14 fixed flex justify-between items-center gap-2 px-2 md:px-20 z-50">
                    <div className="left-side-header flex justify-between items-center gap-2">
                        <img className="h-6 w-6 rounded-full" src="https://ugc.production.linktr.ee/daa2917a-c36c-4ec6-b287-6329219e3a13_Fellow.png?io=true&size=avatar-v1_0" alt="logo" />
                        <div className="logo-name font-bold text-black text-xl">
                            Fellow
                        </div>
                    </div>
                    <div className="right-side-header flex justify-between items-center gap-10 text-base font-medium">
                        <Popover.Group className="hidden items-center md:flex md:gap-x-8">
                            <Link><div className="text-black transition ease delay-50 hover:text-[#5a5a5a]">Course Details</div></Link>
                            <Link><div className="text-black transition ease delay-50 hover:text-[#5a5a5a]">Why Us?</div></Link>
                            <Link><div className="text-black transition ease delay-50 hover:text-[#5a5a5a]">Contact</div></Link>
                            <Link><div className="text-black transition ease delay-50 hover:text-[#5a5a5a]">Pricing</div></Link>
                            <div className="button bg-black transition ease delay-100 hover:bg-[#5a5a5a] rounded-lg  w-max   px-2 flex justify-center items-center">
                                <button className="text-white text-base">Get Started</button>
                            </div>
                        </Popover.Group>
                        <div className="flex gap-4 md:hidden">
                            <div className="button bg-black transition ease delay-100 hover:bg-[#5a5a5a] rounded-lg  w-max   px-2 flex justify-center items-center">
                                <button className="text-white text-base">Get Started</button>
                            </div>
                            {mobileMenuOpen ? (
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 bg-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
                                </button>
                            )}
                        </div>
                        {mobileMenuOpen && (
                            <div
                                className="md:hidden w-full absolute top-full right-0 left-0 z-30"
                                style={{ height: "calc(100vh - 125px)" }}
                            >
                                <div className="z-30 divide-y divide-gray-500/10 bg-black h-min flex justify-between flex-col overflow-auto">
                                    <div className="space-y-2 py-6">
                                        <Link
                                            to="/"
                                            className="-mx-3 block rounded-lg mx-6 py-2 text-base font-semibold leading-7 hover:text-[#5a5a5a]"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Course Details
                                        </Link>
                                        <Link
                                            to="/integration"
                                            className="-mx-3 block rounded-lg mx-6 py-2 text-base font-semibold leading-7 hover:text-[#5a5a5a]"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Why Us?
                                        </Link>
                                        <Link
                                            to="/pricing"
                                            className="-mx-3 block rounded-lg mx-6 py-2 text-base font-semibold leading-7 hover:text-[#5a5a5a]"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Contact
                                        </Link>
                                        <Link
                                            to="/docs"
                                            className="-mx-3 block rounded-lg mx-6 py-2 text-base font-semibold leading-7 hover:text-[#5a5a5a]"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Pricing
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header