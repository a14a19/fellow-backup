// import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function Footer() {
    return (
        <>
            <div className="footer bg-black p-12 px-8 flex flex-col md:p-12 px-20">
                <div className="footer-box w-full flex flex-col justify-between items-start gap-6 md:flex-row">
                    <div className="footer-log flex flex-col gap-6">
                        <div className="flex justify-start items-center gap-2">
                            <div className="border-2 border-[#a3a3a3] rounded-full">
                                <img className="h-6 w-6 rounded-full" src="https://ugc.production.linktr.ee/daa2917a-c36c-4ec6-b287-6329219e3a13_Fellow.png?io=true&size=avatar-v1_0" alt="logo" />
                            </div>
                            <div className="footer-logo-name text-[#FCFAFF] text-lg font-bold">Fellow</div>
                        </div>
                        <div className="text-sm text-gray-300 font-normal">
                            Top learning experiences that create more talent in the world.
                        </div>
                    </div>

                    <div className="footer-product flex flex-col gap-1">
                        <div className="text-xs text-gray-300">Product</div>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Overview</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Features</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Solutions</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Tutorials</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Pricing</div></Link>
                    </div>

                    <div className="footer-product flex flex-col gap-1">
                        <div className="text-xs text-gray-300">Company</div>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">About us</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Careers</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Press</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">News</div></Link>
                    </div>

                    <div className="footer-product flex flex-col gap-1">
                        <div className="text-xs text-gray-300">Social</div>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Twitter</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">LinkedIn</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">GitHub</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Dribbble</div></Link>
                    </div>

                    <div className="footer-product flex flex-col gap-1">
                        <div className="text-xs text-gray-300">Legal</div>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Terms</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Privacy</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Cookies</div></Link>
                        <Link><div className="transition ease delay-50 text-sm hover:text-[#5a5a5a]">Contact</div></Link>
                    </div>
                </div>
                <div className="social-icons pt-12 flex flex-col gap-4 justify-between items-center md:flex-row">
                    <div className="left-copy text-sm">
                        © 2022 Ed-Circle. All rights reserved.
                    </div>
                    <div className="icons flex justify-between items-center gap-4">
                        <Link><LinkedInIcon /></Link>
                        <Link><InstagramIcon /></Link>
                        <Link><MailOutlineIcon /></Link>
                        <Link><AlternateEmailIcon /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}