import { RiSmartphoneFill } from "react-icons/ri";
import currency from "../assets/currency.svg";
import walletTowallet from "../assets/wallet1.svg";
import topup from "../assets/topup.svg";
import tt from "../assets/tt.svg";
import Card from "./card";

export default function Features() {
    return (
        <section className="bg-white pt-10 px-4 xl:px-24">
            <h1 className="text-center font-semibold text-3xl xl:text-[64px] xl:w-[768px] xl:mx-auto xl:leading-[72px] text-[#182700]">
                Get the best experience with our features
            </h1>
            <div className="mt-20 flex flex-col gap-6 xl:mt-[122px]">
                <Card className="rounded-[20px]">
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
                        <h1 className="text-[#182700] text-xl xl:text-3xl">
                            Sending Money Made Simple
                        </h1>
                        <p className="pt-5 text-[#182700B8] font-medium">
                            Send money to loved ones or settle bills with ease.
                            fets keeps you connected when it matters most.
                        </p>
                    </div>
                    <div className="mt-6 px-6 xl:px-12 xl:mt-12 relative w-full">
                        <img
                            src={walletTowallet}
                            alt="wallet to wallet illustration"
                            className="w-64 relative"
                        />
                        <div className="absolute top-5 right-4">
                            <img
                                src={tt}
                                alt="wallet to wallet illustration"
                                className="w-52 h-auto"
                            />
                        </div>
                    </div>
                </Card>
                <Card className="rounded-[20px]">
                    <div className="pt-5 px-6 xl:pt-10 xl:px-11">
                        <div className="mb-6 flex justify-between items-center">
                            <div className="rounded-full border border-[#1524001A] w-20 h-20 flex justify-center items-center">
                                <RiSmartphoneFill className="w-6 h-8" />
                            </div>
                            <button className="bg-[#85C227] p-4 rounded-full text-white">
                                Buy Airtime
                            </button>
                        </div>
                        <h1 className="text-[#182700] text-xl xl:text-3xl">
                            Airtime Top-Up In Seconds
                        </h1>
                        <p className="pt-5 text-[#182700B8] font-medium">
                            Top up your airtime in a flash and enjoy more
                            quality time with friends.
                        </p>
                    </div>
                    <div className="mt-6 px-6 xl:px-12 xl:mt-12">
                        <img src={topup} alt="topup illustration" />
                    </div>
                </Card>
            </div>
        </section>
    );
}
