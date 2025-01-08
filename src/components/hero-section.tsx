import appleStore from "../assets/apple-store.svg";
import googlePlay from "../assets/google-play.svg";
import heroImage from "../assets/hero-image.svg";
import cbn from "../assets/cbn.svg";
import ndic from "../assets/ndic.svg";
import walletId from "../assets/wallet-id.svg";
import borderBottom from "../assets/underline.svg";

export default function HeroSection() {
    return (
        <section className="px-4 xl:pl-24 bg-[url('/backgroundDesign.svg')] bg-cover bg-center bg-no-repeat xl:flex xl:justify-between container mx-auto">
            <div className="pt-14">
                <h1 className="text-[#182700] xl:leading-[90px] text-center xl:text-left font-semibold text-5xl xl:w-[565px] md:text-[80px]">
                    The{" "}
                    <span className="inline-flex flex-col items-center">
                        Simplified
                        <img
                            src={borderBottom}
                            alt="border bottom illustration"
                            className="w-full h-full"
                        />
                    </span>
                    Payment Experience
                </h1>

                <div className="mt-7 md:w-[422px] md:mx-auto xl:mx-0">
                    <p className="text-[#14191FE0] text-center xl:text-left font-bold">
                        Stress less, spend smarter, and enjoy seamless
                        transactions with fets!
                    </p>
                    <div className="flex flex-col items-center xl:items-start gap-6 mt-6">
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
                <div className="mt-5">
                    <div className="flex items-center xl:justify-start justify-center">
                        <h1 className="text-[#000313] opacity-[20%] font-bold">
                            Licensed by the CBN
                        </h1>
                        <img
                            src={cbn}
                            alt="cbn illustration"
                            className="w-12 h-full"
                        />
                    </div>
                    <div className="flex items-start justify-center xl:justify-start">
                        <h1 className="text-[#000313] opacity-[20%] font-bold">
                            Deposits Insured by
                        </h1>
                        <img
                            src={ndic}
                            alt="ndic illustration"
                            className="w-20 h-full"
                        />
                    </div>
                </div>
            </div>
            <div className="relative lg:w-[766px] mx-auto">
                <img
                    src={heroImage}
                    alt="Hero Image illustration"
                    className="w-full h-full relative"
                />
                <div className="absolute bottom-20 md:-left-3 md:bottom-40 xl:bottom-36 xl:-left-24">
                    <img
                        src={walletId}
                        alt="Wallet Image illustration"
                        className="w-24 md:w-44 xl:w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
