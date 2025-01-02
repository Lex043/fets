import Card from "./card";
import havirok from "../assets/havirok.svg";
import profile from "../assets/profile.svg";
import { PiArrowUpRightFill } from "react-icons/pi";
import { PiArrowDownLeftFill } from "react-icons/pi";

export default function Testimonials() {
    return (
        <section className="px-4 pt-10 xl:px-[121px] xl:pt-[70px] flex flex-col gap-6">
            <Card className="rounded-[18px] px-14 py-20 bg-[#18270014]">
                <img
                    src={havirok}
                    alt="havirok illustration"
                    className="w-44 mx-auto h-full"
                />
            </Card>
            <Card className="rounded-[18px] px-6 md:px-12 pt-12 pb-7 bg-[#531F55]">
                <p className="italic text-white">
                    I have been a fets Agent in Asaba, Delta State since 2019. I
                    started with one POS location but I have increased to 5
                    locations all using fets because for their top-notch
                    services. Their Deposit service is the fastest in the
                    industry and I also enjoy their handling of transaction
                    issues whenever it occurs. I have recommended several
                    persons to the platform and will continue to do so!
                </p>
                <div className="pt-12 flex flex-wrap justify-between gap-5">
                    <div className="flex gap-2 items-center">
                        <img
                            src={profile}
                            alt="profile picture"
                            className="w-14 h-14"
                        />
                        <div className="text-white">
                            <h1 className="text-white">Havirok Agencies</h1>
                            <p className="text-white opacity-[56%] pt-2">
                                Asaba, Nigeria
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className="bg-[#FFFFFF0A] rounded-[10px] w-14 h-11 flex justify-center items-center">
                            <PiArrowDownLeftFill size={32} fill="#ffffff" />
                        </div>
                        <div className="bg-[#B75BBB] rounded-[10px] w-14 h-11 flex justify-center items-center">
                            <PiArrowUpRightFill size={32} fill="#531F55" />
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    );
}
