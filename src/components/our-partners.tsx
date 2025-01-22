import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import kfc from "../assets/kfc.svg";
import fanmilk from "../assets/fanmilk.svg";
import ibdc from "../assets/ibdc.svg";
import huawei from "../assets/huawei.svg";
import jumia from "../assets/jumia.svg";
import miniso from "../assets/miniso.svg";

gsap.registerPlugin(useGSAP);

const ourPartners = [
    {
        description: "kfc illustration",
        image: kfc,
    },
    {
        description: "fanmilk illustration",
        image: fanmilk,
    },
    {
        description: "ibdc illustration",
        image: ibdc,
    },
    {
        description: "huawei illustration",
        image: huawei,
    },
    {
        description: "jumia illustration",
        image: jumia,
    },
    {
        description: "miniso illustration",
        image: miniso,
    },
];

export default function OurPartners() {
    const container = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        if (container.current) {
            const wrapper = container.current;

            const logos = wrapper.querySelectorAll("img");
            logos.forEach((logo) => {
                const clone = logo.cloneNode(true);
                wrapper.appendChild(clone);
            });

            gsap.to(wrapper, {
                xPercent: -50,
                duration: 8,
                repeat: -1,
                ease: "none",
            });
        }
    }, []);
    return (
        <section className="bg-[#85C2270D] pt-10 xl:pt-11 pb-20 px-4 xl:px-24 xl:pb-28">
            <div className="container mx-auto overflow-hidden">
                <h1 className="text-black text-2xl font-semibold xl:text-[32px] text-center">
                    Our Partners
                </h1>
                <div
                    ref={container}
                    className="flex justify-center items-center gap-6 xl:gap-16 mt-10 xl:mt-14 whitespace-nowrap"
                >
                    {ourPartners.map((partner) => (
                        <img
                            key={partner.description}
                            src={partner.image}
                            alt={partner.description}
                            className="w-20 xl:w-[155px] bg-inherit h-full opacity-[30%]"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
