import Navbar from "../../components/navbar/Navbar";
import PricingSection from "./Pricing";
import FooterSection from "../../components/footer/Footer";
import CallToActionSection from "./CallToAction";
import ContactUsSection from "./ContactUs";
import HeroSection from "./Hero";
import AboutSection from "./About";
import WhyExantaraSection from "./WhyExantara";
import FeatureSection from "./Features";
import StartExportSection from "./StartExport";

const LandingPage = () => {

    return (
        <>
            <Navbar />
            <main className="text-gray-100 bg-[#080a1f]">
                {/* HERO SECTION */}
                <HeroSection />

                <div className="relative z-50 bg-[#080a1f] rounded-t-[10px] md:rounded-t-[25px] lg:rounded-t-[50px]">

                    {/* ABOUT EXANTARA */}
                    <AboutSection />

                    {/* WHY EXANTARA */}
                    <WhyExantaraSection />

                    {/* FEATURES */}
                    <FeatureSection />

                    {/* SECTION: EASY TO USE */}
                    <StartExportSection />

                    {/* SECTION: Call To Action */}
                    <CallToActionSection />

                    {/* SECTION: PRICING */}
                    <PricingSection />

                    {/* SECTION: Contact Us */}
                    <ContactUsSection />

                </div>

            </main>
            <FooterSection />
        </>
    );
}

export default LandingPage;