import { CircleCheck } from "lucide-react";
import googlePlay from "../assets/google-play.svg";
import appleStore from "../assets/apple-store.svg";
import faq1 from "../assets/faq1.svg";
import faq2 from "../assets/faq2.svg";

export default function Faq() {
    return (
        <section className="px-4 xl:px-44 py-10 xl:py-20">
            <div>
                <h1 className="text-[#182700] font-semibold text-3xl text-center">
                    Get Things Running in 3 Easy Steps
                </h1>
                <div className="mt-6 flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                        <span>
                            <CircleCheck stroke="#16A34A" />
                        </span>
                        <h1 className="font-medium text-sm text-[#182700B8]">
                            Download fetswallet App from Play store and Apple
                            store.
                        </h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span>
                            <CircleCheck stroke="#16A34A" />
                        </span>
                        <h1 className="font-medium text-sm text-[#182700B8]">
                            Register in few seconds.
                        </h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span>
                            <CircleCheck stroke="#16A34A" />
                        </span>
                        <h1 className="font-medium text-sm text-[#182700B8]">
                            Fund your wallet account with debit card, bank
                            transfer or wallet to wallet transfer.
                        </h1>
                    </div>
                </div>
                <p className="text-[#182700B8] font-medium text-lg text-center pt-4 pb-9">
                    Start enjoying easy and affordable transactions.
                </p>
                <div className="flex flex-col items-center lg:items-start gap-6 mt-6">
                    <img
                        src={googlePlay}
                        alt="google playstore illustration"
                        className="w-48 h-full"
                    />
                    <img
                        src={appleStore}
                        alt="apple store illustration"
                        className="w-48 h-full"
                    />
                </div>
            </div>
            <div className="relative mt-10 w-56 mx-auto">
                <img
                    src={faq1}
                    alt="faq1 illustration"
                    className="w-48 h-auto"
                />
                <div className="absolute top-6 left-8">
                    <img
                        src={faq2}
                        alt="faq2 illustration"
                        className="w-48 h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
