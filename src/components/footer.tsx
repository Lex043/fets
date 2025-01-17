import logo from "../assets/footer-logo.svg";
import { MdOutlineFacebook } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const footer = [
    {
        title: "Quick Links",
        list: [
            {
                name: "Home",
            },
            {
                name: "Product & Services",
            },
            {
                name: "Press Release",
            },
            {
                name: "FAQ",
            },
        ],
    },
    {
        title: "Information",
        list: [
            {
                name: "About Us",
            },
            {
                name: "Airtime Top-up",
            },
            {
                name: "Pay Bills",
            },
            {
                name: "Send/Receive Cash",
            },
        ],
    },
    {
        title: "Services",
        list: [
            {
                name: "Corperate",
            },
            {
                name: "Retail",
            },
            {
                name: "Fets PTSP",
            },
        ],
    },
    {
        title: "Policies",
        list: [
            {
                name: "Policy",
            },
            {
                name: "Terms",
            },
            {
                name: "Privacy Policy",
            },
            {
                name: "Quality Policy",
            },
            {
                name: "ISMS Policy",
            },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#531F55] px-4 pt-16 pb-10 xl:px-[107px] xl:pt-[232px] xl:pb-[106px]">
            <section className="container mx-auto border flex flex-col lg:flex-row justify-between border-[#FFFFFF29] rounded-2xl px-5 pb-4 xl:pb-10 pt-7 md:pt-14 md:px-10">
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
                    {footer.map((item) => (
                        <div
                            key={item.title}
                            className={`${
                                item.title === "Policies"
                                    ? "border-0"
                                    : "md:border-r"
                            } border-[#FFFFFF14] pr-6`}
                        >
                            <h1 className="text-white font-semibold">
                                {item.title}
                            </h1>
                            <ul className="text-[#FFFFFFB8] pt-8 space-y-3">
                                {item.list.map((i) => (
                                    <li>{i.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </footer>
    );
}
