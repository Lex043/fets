import logo from "../assets/footer-logo.svg";
import { MdOutlineFacebook } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="bg-[#531F55] px-4 pt-16 pb-10 xl:px-[107px] xl:pt-[232px] xl:pb-[106px]">
            <section className="container mx-auto border flex flex-col xl:flex-row justify-between border-[#FFFFFF29] rounded-2xl px-5 pb-4 xl:pb-10 pt-7 md:pt-14 md:px-10">
                <div>
                    <div className="w-[93px] h-10">
                        <img src={logo} alt="logo" className="w-full h-full" />
                    </div>
                    <p className="italic text-[#FFFFFFB8] pt-9">
                        Think payments, think fets
                    </p>
                    <div className="flex gap-4 items-center pt-16 xl:pt-32">
                        <MdOutlineFacebook size={32} fill="#FFFFFF" />
                        <BiLogoInstagramAlt size={32} fill="#FFFFFF" />
                        <AiFillLinkedin size={32} fill="#FFFFFF" />
                        <FaTwitter size={32} fill="#FFFFFF" />
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-7 md:flex-row md:flex-wrap">
                    <div className="border-r border-[#FFFFFF14] pr-6">
                        <h1 className="text-white font-semibold">
                            Quick Links
                        </h1>
                        <ul className="text-[#FFFFFFB8] pt-8 space-y-3">
                            <li>Home</li>
                            <li>Product & Services</li>
                            <li>Press Release</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="border-r border-[#FFFFFF14] pr-6">
                        <h1 className="text-white font-semibold">
                            Information
                        </h1>
                        <ul className="text-[#FFFFFFB8] pt-8 space-y-3">
                            <li>About Us</li>
                            <li>Airtime Top-up</li>
                            <li>Pay Bills</li>
                            <li>Send/Receive Cash</li>
                        </ul>
                    </div>
                    <div className="border-r border-[#FFFFFF14] pr-6">
                        <h1 className="text-white font-semibold">Services</h1>
                        <ul className="text-[#FFFFFFB8] pt-8 space-y-3">
                            <li>Corperate</li>
                            <li>Retail</li>
                            <li>Fets PTSP</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white font-semibold">Policies</h1>
                        <ul className="text-[#FFFFFFB8] pt-8 space-y-3">
                            <li>Policy</li>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li>Quality Policy</li>
                            <li>ISMS Policy</li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
}
