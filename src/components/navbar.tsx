import logo from "../assets/logo.svg";
import { ChevronDown } from "lucide-react";
import { UserRound } from "lucide-react";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <section className="p-4 lg:px-10 lg:py-9 xl:px-20 bg-white">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex gap-24">
                    <div className="w-[93px] h-10 cursor-pointer">
                        <img src={logo} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="hidden lg:flex items-center gap-12 text-[#182700] text-lg font-medium">
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
                <Menu size={30} className="lg:hidden" />
                <button className="border-2 hidden border-[#14191F0F] text-lg font-semibold lg:flex gap-2 text-[#182700] py-4 px-6 rounded-full">
                    Log in
                    <UserRound />
                </button>
            </nav>
        </section>
    );
}
