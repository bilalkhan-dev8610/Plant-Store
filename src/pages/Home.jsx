import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import TopSellingSection from "../components/TopSellingSection"
import ReviewSection from "../components/ReviewSection"
import O2Section from "../components/O2Section"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="bg-[#1B2316] min-h-screen py-8">

      {/* Main Desktop Container */}
      <div
        className="
          max-w-[1728px]
          mx-auto
          rounded-[14px]
          overflow-hidden
          border
          border-[#2f3b2b]
          shadow-2xl
          bg-[#0d160d]
        "
      >

        <Navbar />

        <HeroSection />

        

        <TopSellingSection />

        <ReviewSection />

        <O2Section />

        <Footer />

      </div>

    </div>
  )
}

export default Home 