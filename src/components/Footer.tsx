import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4 lg:gap-16">

                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        {/* Logo */}
                        <div className="mb-4 flex items-center gap-2">
                            <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-purple-500 to-pink-500">
                                <span className="text-[6px] font-bold text-white">
                                    DS
                                </span>
                            </div>

                            <span className="text-sm font-bold text-pink-500">
                                Dev Stack
                            </span>
                        </div>

                        {/* Description */}
                        <p className="max-w-xs text-[10px] leading-relaxed text-[#64748B]">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-5 flex items-center gap-5">
                            <a
                                href="#"
                                className="text-[9px] font-medium text-[#64748B] transition hover:text-purple-500"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-[9px] font-medium text-[#64748B] transition hover:text-purple-500"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-[9px] font-medium text-[#64748B] transition hover:text-purple-500"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-5 text-[9px] font-bold tracking-wide text-[#64748B]">
                            PRODUCT
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a
                                href="#"
                                className="w-fit text-[9px] text-[#64748B] transition hover:text-purple-500"
                            >
                                Home
                            </a>

                            <a
                                href="#"
                                className="w-fit text-[9px] text-[#64748B] transition hover:text-purple-500"
                            >
                                Technologies
                            </a>

                            <a
                                href="#"
                                className="w-fit text-[9px] text-[#64748B] transition hover:text-purple-500"
                            >
                                Projects
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-5 text-[9px] font-bold tracking-wide text-[#64748B]">
                            COMPANY
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a
                                href="#"
                                className="w-fit text-[9px] text-[#64748B] transition hover:text-purple-500"
                            >
                                About
                            </a>

                            <a
                                href="#"
                                className="w-fit text-[9px] text-[#64748B] transition hover:text-purple-500"
                            >
                                Contact
                            </a>

                            <a
                                href="#"
                                className="w-fit text-[9px] text-[#64748B] transition hover:text-purple-500"
                            >
                                Careers
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-5 text-[9px] font-bold tracking-wide text-[#64748B]">
                            LEGAL
                        </h3>

                        <div className="flex flex-col gap-3">
                            <a
                                href="#"
                                className="w-fit text-[9px] text-[#64748B] transition hover:text-purple-500"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="w-fit text-[9px] text-[#64748B] transition hover:text-purple-500"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-100">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">

                    {/* Copyright */}
                    <p className="text-[9px] text-[#64748B]">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    {/* Bottom Links */}
                    <div className="flex items-center gap-5">
                        <a
                            href="#"
                            className="text-[9px] text-[#64748B] transition hover:text-purple-500"
                        >
                            Privacy
                        </a>

                        <a href="#" className="text-[9px] text-[#64748B] transition hover:text-purple-500">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;