import { RiSmartphoneFill } from "react-icons/ri";
import { MoveRight } from "lucide-react";
import currency from "../assets/currency.svg";
import agent from "../assets/angela.svg";
import pos from "../assets/pos.svg";
import profile1 from "../assets/profile1.svg";
import profile2 from "../assets/profile2.svg";
import profile3 from "../assets/profile3.svg";
import posArrow1 from "../assets/pos-arrow1.svg";
import posArrow2 from "../assets/pos-arrow2.svg";
import walletTowallet from "../assets/wallet1.svg";
import topup from "../assets/topup.svg";
import tt from "../assets/tt.svg";
import Card from "./card";

export default function Features() {
    return (
        <section className="bg-white pt-10 pb-20 px-4 xl:px-28">
            <div className="container mx-auto">
                <h1 className="text-center font-semibold text-3xl md:text-[64px] xl:w-[768px] xl:mx-auto md:leading-[72px] text-[#182700]">
                    Get the best experience with our features
                </h1>
                <div className="mt-20 flex flex-col lg:flex-row justify-between gap-6 xl:mt-[122px] ">
                    <Card className="rounded-[20px] w-full">
                        <div className="pt-5 px-6 xl:pt-10 xl:px-11">
                            <div className="mb-6 flex justify-between items-center">
                                <div className="rounded-full border border-[#1524001A] w-20 h-20 flex justify-center items-center">
                                    <img
                                        src={currency}
                                        alt="currency illustration"
                                        className="w-6 h-8"
                                    />
                                </div>
                                <button className="bg-[#85C227] p-4 rounded-full text-white">
                                    Send Cash
                                </button>
                            </div>
                            <h1 className="text-[#182700] font-semibold text-xl md:text-3xl">
                                Sending Money Made Simple
                            </h1>
                            <p className="pt-5 text-[#182700B8] font-medium max-w-sm">
                                Send money to loved ones or settle bills with
                                ease. fets keeps you connected when it matters
                                most.
                            </p>
                        </div>
                        <div className="mt-6 px-6 xl:px-12 xl:mt-12 relative">
                            <img
                                src={walletTowallet}
                                alt="wallet to wallet illustration"
                                className="w-64 md:w-[414px] relative mx-auto"
                            />
                            <div className="absolute top-5 right-4 ">
                                <img
                                    src={tt}
                                    alt="wallet to wallet illustration"
                                    className="w-52 md:w-[273px] h-auto"
                                />
                            </div>
                        </div>
                    </Card>
                    <Card className="rounded-[20px] w-full">
                        <div className="pt-5 px-6 xl:pt-10 xl:px-11">
                            <div className="mb-6 flex justify-between items-center">
                                <div className="rounded-full border border-[#1524001A] w-20 h-20 flex justify-center items-center">
                                    <RiSmartphoneFill className="w-6 h-8" />
                                </div>
                                <button className="bg-[#85C227] p-4 rounded-full text-white">
                                    Buy Airtime
                                </button>
                            </div>
                            <h1 className="text-[#182700] font-semibold text-xl md:text-3xl">
                                Airtime Top-Up In Seconds
                            </h1>
                            <p className="pt-5 text-[#182700B8] font-medium max-w-sm">
                                Top up your airtime in a flash and enjoy more
                                quality time with friends.
                            </p>
                        </div>
                        <div className="mt-6 px-6 xl:px-12 xl:mt-12">
                            <img
                                src={topup}
                                alt="topup illustration"
                                className="md:w-[500px] h-auto mx-auto"
                            />
                        </div>
                    </Card>
                </div>
                <Card className="mt-6 lg:flex px-7 py-5 xl:px-14">
                    <div>
                        <div className="rounded-full border border-[#1524001A] w-20 h-20 flex justify-center items-center">
                            <img
                                src={pos}
                                alt="pos illustration"
                                className="w-6 h-8"
                            />
                        </div>
                        <div className="mt-[20px]">
                            <h1 className="text-[#182700] font-semibold text-2xl xl:text-4xl">
                                Be a Fets Agent
                            </h1>
                            <p className="text-[#182700B8] pt-5">
                                Take the first step towards earning and
                                financial independence now!
                            </p>
                            <button className="mt-[20px] xl:mt-12 bg-[#7C2F7F] text-white font-semibold py-5 px-7 rounded-full flex items-center gap-3">
                                Become an agent
                                <span className="bg-white rounded-full flex items-center justify-center w-9 h-9">
                                    <MoveRight
                                        color="#7C2F7F"
                                        className="w-5 h-5"
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                    <section className="relative mt-40 md:mt-52 w-[14.5rem] md:w-[50%] xl:max-w-md lg:mt-0 mx-auto lg:mx-0">
                        <div
                            className="bg-white p-3 md:p-4 rounded-lg md:rounded-2xl w-fit absolute right-[6.5rem] 
                            bottom-[6.8rem] md:bottom-44 md:right-32 lg:right-28 lg:bottom-60 xl:bottom-72 xl:right-[14.5rem]"
                        >
                            <img
                                src={profile1}
                                alt="profile illustration"
                                className="w-5 h-5 md:w-10 md:h-10"
                            />
                        </div>
                        <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-2xl w-fit absolute right-14 bottom-10 lg:bottom-36 lg:right-10 xl:right-40">
                            <img
                                src={profile2}
                                alt="profile illustration"
                                className="w-5 h-5 md:w-10 md:h-10"
                            />
                        </div>
                        <div className="absolute bottom-11 left-1 md:bottom-[4.5rem] lg:bottom-32 xl:bottom-44">
                            <img
                                src={posArrow2}
                                alt="pos arrow illustration"
                                className="w-20 md:w-full h-full"
                            />
                        </div>
                        <div className="absolute left-12 bottom-6 md:left-[4.5rem] lg:bottom-32">
                            <img
                                src={posArrow1}
                                alt="pos arrow illustration"
                                className="w-20 md:w-full h-full"
                            />
                        </div>
                        <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-2xl w-fit lg:bottom-28 lg:absolute">
                            <img
                                src={profile3}
                                alt="pos illustration"
                                className="w-5 h-5 md:w-10 md:h-10"
                            />
                        </div>
                    </section>

                    <div className="mt-10">
                        <img
                            src={agent}
                            alt="pos illustration"
                            className="w-full md:w-[371px] md:mx-auto lg:mx-0 h-full"
                        />
                    </div>
                </Card>
            </div>
        </section>
    );
}
