import kfc from "../assets/kfc.svg";
import fanmilk from "../assets/fanmilk.svg";
import ibdc from "../assets/ibdc.svg";
import huawei from "../assets/huawei.svg";
import jumia from "../assets/jumia.svg";
import miniso from "../assets/miniso.svg";

export default function OurPartners() {
    return (
        <section className="bg-[#85C2270D] pt-10 xl:pt-11 pb-20 px-4 xl:px-24 xl:pb-28">
            <div className="container mx-auto">
                <h1 className="text-black text-2xl font-semibold xl:text-[32px] text-center">
                    Our Partners
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-6 xl:gap-16 mt-10 xl:mt-14">
                    <img
                        src={kfc}
                        alt="kfc illustration"
                        className="w-20 xl:w-[155px] bg-inherit h-full opacity-[30%]"
                    />
                    <img
                        src={fanmilk}
                        alt="fanmilk illustration"
                        className="w-20 xl:w-[155px] bg-inherit h-full opacity-[30%]"
                    />
                    <img
                        src={ibdc}
                        alt="ibdc illustration"
                        className="w-20 xl:w-[155px] bg-inherit h-full opacity-[30%]"
                    />
                    <img
                        src={huawei}
                        alt="huawei illustration"
                        className="w-20 xl:w-[155px] bg-inherit h-full opacity-[30%]"
                    />
                    <img
                        src={jumia}
                        alt="jumia illustration"
                        className="w-20 xl:w-[155px] bg-inherit h-full opacity-[30%]"
                    />
                    <img
                        src={miniso}
                        alt="miniso illustration"
                        className="w-20 xl:w-[155px] bg-inherit h-full opacity-[30%]"
                    />
                </div>
            </div>
        </section>
    );
}
