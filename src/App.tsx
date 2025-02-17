import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import BankingBasics from "./components/banking-basics";
import Features from "./components/features";
import Faq from "./components/faq";
import Testimonials from "./components/testimonials";
import OurPartners from "./components/our-partners";
import Footer from "./components/footer";
import SmoothScroll from "./components/smooth-scroll";

function App() {
    return (
        <section className="min-h-screen bg-[#F6F3F6] font-inter">
            <SmoothScroll>
                <Navbar />
                <HeroSection />
                <BankingBasics />
                <Features />
                <Testimonials />
                <Faq />
                <OurPartners />
                <Footer />
            </SmoothScroll>
        </section>
    );
}

export default App;
