import { MoveRight } from "lucide-react";
import { PiHandCoinsFill } from "react-icons/pi";
import { PiCardholderFill } from "react-icons/pi";
import { PiScrollFill } from "react-icons/pi";
import { RiSmartphoneFill } from "react-icons/ri";
import centerLogo from "../assets/center-logo.svg";
import Card from "./card";

export default function BankingBasics() {
    return (
        <section className="bg-white px-4 xl:px-24 py-10 xl:py-14">
            <div>
                <div className="text-center text-[#14191F]">
                    <h1 className="text-3xl font-semibold xl:text-[60px]">
                        Do More Today, With Fets
                    </h1>
                    <p className="opacity-[80%] pt-4 xl:pt-6">
                        Have fun. We&apos;ll take care of the rest!. Get started
                        today!
                    </p>
                </div>
                <button className="mt-6 xl:mt-12 bg-[#85C227] text-white font-semibold py-5 px-7 mx-auto rounded-full flex items-center gap-3">
                    Get Started
                    <span className="bg-white rounded-full flex items-center justify-center w-9 h-9">
                        <MoveRight color="#85C227" className="w-5 h-5" />
                    </span>
                </button>
            </div>
            <section className="grid grid-cols-2 gap-2 relative mt-10 rounded-[21px] border border-[#14191F14] p-[10px]">
                <Card className="py-11">
                    <div className="px-7 flex flex-col items-center">
                        <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center">
                            <PiHandCoinsFill size={36} />
                        </div>
                        <p className="text-center pt-10 text-[#14191F] font-medium">
                            Receive/Transfer Cash with Fets
                        </p>
                    </div>
                </Card>
                <Card className="py-11">
                    <div className="px-7 flex flex-col items-center">
                        <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center">
                            <PiScrollFill size={36} />
                        </div>
                        <p className="text-center pt-10 text-[#14191F] font-medium">
                            Pay bills today with Fets
                        </p>
                    </div>
                </Card>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={centerLogo}
                        alt="Center Logo Illustration"
                        className="w-48 h-auto"
                    />
                </div>
                <Card className="py-11">
                    <div className="px-7 flex flex-col items-center">
                        <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center">
                            <RiSmartphoneFill size={36} />
                        </div>
                        <p className="text-center pt-10 text-[#14191F] font-medium">
                            Buy Airtime today with Fets
                        </p>
                    </div>
                </Card>
                <Card className="py-11">
                    <div className="px-7 flex flex-col items-center">
                        <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center">
                            <PiCardholderFill size={36} />
                        </div>
                        <p className="text-center pt-10 text-[#14191F] font-medium">
                            Get a hold of your Finances
                        </p>
                    </div>
                </Card>
            </section>
        </section>
    );
}
