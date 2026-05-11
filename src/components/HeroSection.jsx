import { FaPlay, FaChevronRight, FaShoppingBag } from "react-icons/fa";
import RosePlant from "../assets/RosePlant.png";
import bgImg from "../assets/bgImg.jpg";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Img10 from "../assets/Img10.png";

function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0b160b]
        pb-24
      "
    >
      {/* Background */}
      <div className="absolute  inset-0">
        <img
          src={bgImg}
          alt="background"
          className="
            w-full
            h-full
            object-cover
            opacity-70
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Main */}
      <div
        className="
          relative
          z-10
          max-w-[1600px]
          mx-auto
          px-8
          pt-10
        "
      >
        {/* Navbar Space */}
        <div className="h-[20px]"></div>

        {/* HERO */}
        <div className="relative min-h-[1150px] md:min-h-[850px]">
          {/* Left Content */}
          <div className="max-w-full md:max-w-[520px] text-center md:text-left pt-12">
            <h1
              className="
                text-white
              text-[52px] md:text-[82px]
              leading-[58px] md:leading-[88px]
                font-semibold
              "
            >
              Earth’s Exhale
            </h1>

            <p
              className="
                text-[#d9d9d9]
                text-[18px]
                leading-[30px]
                mt-5
                max-w-[480px]
              "
            >
              “Earth Exhale” symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center md:justify-start gap-5 mt-8">
              <button
                className="
                  px-8
                  h-[52px]
                  rounded-[14px]
                  border
                  border-white/30
                  text-white
                "
              >
                Buy Now
              </button>

              <button
                className="
                  w-[52px]
                  h-[52px]
                  rounded-full
                  border
                  border-white/30
                  flex
                  items-center
                  justify-center
                  text-white
                "
              >
                <FaPlay className="ml-1 text-sm" />
              </button>

              <span className="text-white">Live Demo...</span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
    relative
    md:absolute
    md:right-[55px]
    md:top-[10px]
    flex
    justify-center
    mt-10
    md:mt-0
  "
          >
            <div className="relative">
              {/* Main Card */}
              <div
                className="
        relative
        w-[220px]
        h-[330px]
        rounded-t-[90px]
        rounded-b-[28px]
        border
        border-white/20
        bg-black/10
        backdrop-blur-xl
        px-5
        pt-[120px]
      "
              >
                {/* Plant Image */}
                <img
                  src={RosePlant}
                  alt="plant"
                  className="
          absolute
          top-[-38px]
          left-1/2
          -translate-x-1/2
          w-[170px]
          object-contain
        "
                />

                {/* Small Text */}
                <p
                  className="
          text-[#cfcfcf]
          text-[10px]
        "
                >
                  Indoor Plant
                </p>

                {/* Title Row */}
                <div
                  className="
          flex
          items-center
          justify-between
          mt-2
        "
                >
                  <h2
                    className="
            text-white
            text-[16px]
            leading-[24px]
            font-light
          "
                  >
                    Aglaonema plant
                  </h2>

                  <FaChevronRight
                    className="
            text-white
            text-[11px]
          "
                  />
                </div>

                {/* Button */}
                <button
                  className="
          mt-5
          w-[110px]
          h-[36px]
          rounded-[10px]
          border
          border-white/20
          text-white
          text-[14px]
        "
                >
                  Buy Now
                </button>

                {/* Dots */}
                <div
                  className="
          flex
          items-center
          justify-center
          gap-2
          mt-6
        "
                >
                  <div className="w-[5px] h-[5px] rounded-full bg-white"></div>

                  <div className="w-[5px] h-[5px] rounded-full bg-white/40"></div>

                  <div className="w-[5px] h-[5px] rounded-full bg-white/40"></div>
                </div>
              </div>
            </div>
          </div>

          {/* REVIEW CARD */}
          <div
            className="
           relative
md:absolute
md:left-0
md:top-[430px]
mt-[420px]
md:mt-0
z-20
            "
          >
            <div
              className="
               w-full max-w-[300px]
                rounded-[28px]
                border
                border-white/20
                bg-white/5
                backdrop-blur-xl
                p-5
                mb-10
              "
            >
              <div className="flex items-center gap-4">
                <img
                  src={Image2}
                  alt="user"
                  className="w-[54px] h-[54px] rounded-full
                  object-cover

                  "
                />

                <div>
                  <h3 className="text-white">Ronnie Hamill</h3>

                  <p className="text-yellow-400 text-sm">★★★★★</p>
                </div>
              </div>

              <p
                className="
                  text-gray-300
                  text-[14px]
                  leading-[24px]
                  mt-5
                  
                "
              >
                I can't express how thrilled I am with my new natural plants!
                They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>
        </div>

        {/* TRENDY TITLE */}
        <div className="flex justify-center mt-1">

  <h2
    className="
      relative
      text-white
      text-[22px]
      md:text-[54px]
      font-semibold
      mt-[-300px]
      leading-none
    "
  >

    Our Trendy plants

    {/* Left Yellow Corner */}
    <span
      className="
        absolute
        left-[-12px]
        bottom-[230px]
        w-[20px]
        h-[20px]
        border-l-[3px]
        border-b-[3px]
        border-[#c7b84e]
        rounded-bl-[7px]
      "
    ></span>

    {/* Right Yellow Corner */}
    <span
      className="
        absolute
        right-[-12px]
        top-[6px]
        w-[20px]
        h-[20px]
        border-r-[3px]
        border-t-[3px]
        border-[#c7b84e]
        rounded-tr-[10px]
      "
    ></span>

  </h2>

</div>

        {/* TRENDY CARD 1 */}
        <div
          className="
    relative
  min-h-[100px] md:h-[300px]
    rounded-[151px]
    border
    border-white/10
    bg-black/20
    backdrop-blur-[12px]
    overflow-hidden
flex
   flex-col
  md:flex-row
items-center
justify-between
    px-16
  "
        >
          {/* Blur Glow */}
          <div
            className="
      absolute
      inset-0
      bg-gradient-to-r
      from-white/5
      via-transparent
      to-white/5
    "
          ></div>

          {/* LEFT IMAGE */}

          <img
            src={Image1}
            alt="plant"
            className="
        w-[300px]
        overflow-hidden
        left-[50px]
top-[-95px]
        
      "
          />

          {/* RIGHT CONTENT */}
          <div
            className="
      relative
      z-10
      max-w-[420px]
      text-white
    "
          >
            <h2
              className="
        text-[26px]
        leading-[36px]
        font-semibold
      "
            >
              For Your Desks Decorations
            </h2>

            <p
              className="
        text-[13px]
        text-gray-300
        leading-[22px]
        mt-4
      "
            >
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </p>

            <h3
              className="
        text-[38px]
        font-semibold
        mt-5
      "
            >
              Rs. 599/-
            </h3>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-5">
              <button
                className="
          w-[120px]
          h-[42px]
          
          rounded-[12px]
          border
          border-white/20
          text-white
          text-[14px]
        "
              >
                Explore
              </button>

              <button
                className="
          w-[42px]
          h-[42px]
         
          rounded-[12px]
          border
          border-white/20
          flex
          items-center
          justify-center
          text-white
          text-sm
        "
              >
                <FaShoppingBag />
              </button>
            </div>
          </div>
        </div>

        {/* TRENDY CARD 2 */}
        <div
          className="
    relative
   min-h-[100px] md:h-[300px]
    rounded-[151px]
    border
    border-white/10
    bg-black/20
    backdrop-blur-[12px]
    overflow-hidden
    flex
flex-col
md:flex-row
items-center
justify-between
    px-16
    mt-14
  "
        >
          {/* Glow */}
          <div
            className="
      absolute
      inset-0
      bg-gradient-to-r
      from-white/5
      via-transparent
      to-white/5
    "
          ></div>

          {/* LEFT CONTENT */}
          <div
            className="
      relative
      z-10
      max-w-[420px]
      text-white
    "
          >
            <h2
              className="
        text-[26px]
        leading-[36px]
        font-semibold
      "
            >
              For Your Desks Decorations
            </h2>

            <p
              className="
        text-[13px]
        text-gray-300
        leading-[22px]
        mt-4
      "
            >
              The greenery adds a touch of nature and serenity to my desk,
              making it feel more inviting and calm.
            </p>

            <h3
              className="
        text-[38px]
        font-semibold
        mt-5
      "
            >
              Rs. 399/-
            </h3>

            <div className="flex items-center gap-4 mt-5">
              <button
                className="
          w-[120px]
          h-[42px]
          rounded-[12px]
          border
          border-white/20
          text-white
          text-[14px]
        "
              >
                Explore
              </button>

              <button
                className="
          w-[42px]
          h-[42px]
          rounded-[12px]
          border
          border-white/20
          flex
          items-center
          justify-center
          text-white
          text-sm
        "
              >
                <FaShoppingBag />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative z-10">
            <img
              src={Img10}
              alt="plant"
              className="
        w-[260px]
        object-contain
        mt-4
        h-[400px]
      "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
