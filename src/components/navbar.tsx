import logo from "../assets/logo.svg";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <section className="flex justify-between items-end p-4 container mx-auto lg:px-10 lg:py-9 xl:px-20 bg-white">
            <div className="w-[93px] h-10">
                <img src={logo} alt="logo" className="w-full h-full" />
            </div>
            <Menu size={30} />
        </section>
    );
}
