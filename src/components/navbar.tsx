"use client";

import logo from "../assets/logo.svg";
import { ChevronDown } from "lucide-react";
import { UserRound } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <section className="p-4 lg:px-10 lg:py-9 xl:px-20 bg-white">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex gap-12 items-end lg:gap-24">
                    <div className="w-[93px] h-10 cursor-pointer">
                        <img src={logo} alt="logo" className="w-full h-full" />
                    </div>

                    {/* desktop navbar */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-12 text-[#182700] text-lg font-medium">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a className="flex items-center" href="#">
                            Product&Services{" "}
                            <span>
                                <ChevronDown />
                            </span>
                        </a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                {/* mobile navbar */}
                <div
                    className={`${
                        showMenu ? "flex" : "hidden"
                    } font-outfit absolute left-0 top-[4.5rem] z-20 h-full w-full flex-col gap-10 bg-white py-[61px] text-[#1F1F1F] md:hidden`}
                >
                    <div className="lg:hidden flex flex-col items-center gap-12 text-[#182700] text-lg font-medium">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a className="flex items-center" href="#">
                            Product&Services{" "}
                            <span>
                                <ChevronDown />
                            </span>
                        </a>
                        <a href="#">Contact</a>
                    </div>
                    <button className="border-2 border-[#14191F0F] text-lg font-semibold flex justify-center w-36 mx-auto gap-2 text-[#182700] py-4 px-6 rounded-full">
                        Log in
                        <UserRound />
                    </button>
                </div>
                <Menu
                    onClick={() => setShowMenu(!showMenu)}
                    size={30}
                    className="md:hidden"
                />
                <button className="border-2 hidden border-[#14191F0F] text-lg font-semibold md:flex gap-2 text-[#182700] py-4 px-6 rounded-full">
                    Log in
                    <UserRound />
                </button>
            </nav>
        </section>
    );
}
