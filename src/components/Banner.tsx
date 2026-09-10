import React from 'react';

import Logo from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Side */}
                <div className="w-full md:w-1/2">

                    <h4 className=" text-4xl md:text-5xl font-bold leading-tight mb-5">
                        Build Your Ideal
                        <br />
                        <span className="bg-gradient-to-r from-[#FF5722] via-[#FF7043] to-[#FFAB91] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h4>

                    <p className="text-gray-600 text-base md:text-lg leading-7 mb-6 max-w-xl">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">

                        <button className="bg-gradient-to-r from-[#FF5722] via-[#FF7043] to-[#FF8A65] hover:from-[#E64A19]
                         hover:via-[#FF5722] hover:to-[#FF7043] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300">
                            Explore Technologies
                        </button>

                        <button className="border border-white hover:bg-gradient-to-r hover:from-[#FF5722] hover:to-[#FF8A65]
                         hover:text-white font-medium px-6 py-3 rounded-lg transition-all duration-300">
                            Learn More
                        </button>

                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={Logo}
                        alt="Development Stack"
                        className="w-full max-w-md object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;