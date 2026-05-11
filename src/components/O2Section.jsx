import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"

import RosePlant from "../assets/RosePlant.png"

function O2Section() {
  return (
    <section className="pt-24 pb-20">

      <div className="max-w-[1200px] mx-auto px-4">

        {/* SECTION TITLE */}
        <div className="flex justify-center mb-16">

          <h2
            className="
              relative
              text-white
              text-[22px]
              font-medium
            "
          >
            Our Best o2

            {/* Golden Corner */}
            <span
              className="
                absolute
                left-[-8px]
                bottom-[-4px]
                w-[18px]
                h-[10px]
                border-l
                border-b
                border-[#d3c46b]
                rounded-bl-[6px]
              "
            ></span>

          </h2>

        </div>

        {/* MAIN CARD */}
        <div
          className="
            relative
            h-[300px]
            rounded-[92px]
            border
            border-white/10
            bg-black/20
            backdrop-blur-[12px]
            overflow-visible
            flex
            items-center
            justify-between
            px-14
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
             
             
             
            "
          ></div>

          {/* LEFT IMAGE */}
          <div
            className="
              absolute
              left-[10px]
              top-[-85px]
              z-20
             
            "
          >

            <img
              src={RosePlant}
              alt="plant"
              className="
                w-[340px]
                object-contain
              "
            />

          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              relative
              z-10
              ml-auto
              max-w-[470px]
              text-white
             
            "
          >

            <h2
              className="
                text-[18px]
                leading-[38px]
                font-medium
              "
            >
              We Have Small And Best O2 Plants Collection's
            </h2>

            <p
              className="
                text-[13px]
                leading-[24px]
                text-gray-300
                mt-5
              "
            >
              Oxygen-producing plants, often referred to as
              “O2 plants,” are those that release oxygen into
              the atmosphere through the process of photosynthesis.
            </p>

            <p
              className="
                text-[13px]
                leading-[24px]
                text-gray-300
                mt-5
              "
            >
              Many plants can help filter out pollutants and toxins
              from the air, such as formaldehyde, benzene, and
              trichloroethylene. This makes the air cleaner and
              healthier to breathe.
            </p>

            {/* Bottom Row */}
            <div className="flex items-center justify-between mt-6">

              {/* Explore Button */}
              <button
                className="
                  w-[90px]
                  h-[34px]
                  rounded-[8px]
                  border
                  border-white/20
                  text-white
                  text-[12px]
                "
              >
                Explore
              </button>

              {/* Slider Controls */}
              <div className="flex items-center gap-5">

                <FaChevronLeft
                  className="
                    text-white/60
                    text-[11px]
                    cursor-pointer
                  "
                />

                <span
                  className="
                    text-[11px]
                    text-white/70
                  "
                >
                  01/04
                </span>

                <FaChevronRight
                  className="
                    text-[#8f5bff]
                    text-[11px]
                    cursor-pointer
                  "
                />

              </div>

            </div>

          </div>

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-10">

          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>

          <div className="w-[6px] h-[6px] rounded-full bg-white/40"></div>

          <div className="w-[6px] h-[6px] rounded-full bg-white/40"></div>

        </div>

      </div>

    </section>
  )
}

export default O2Section