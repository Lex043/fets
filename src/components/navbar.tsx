import logo from "../assets/logo.svg";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <section className="p-4 lg:px-10 lg:py-9 xl:px-20 bg-white">
            <nav className="container mx-auto flex justify-between items-end">
                <div className="w-[93px] h-10">
                    <img src={logo} alt="logo" className="w-full h-full" />
                </div>
                <Menu size={30} />
            </nav>
        </section>
    );
}
