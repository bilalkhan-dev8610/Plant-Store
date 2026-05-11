import plant from "../assets/plant.png"

function Footer() {
  return (
    <footer className="pt-24 pb-10">

      <div
        className="
          max-w-[1200px]
          mx-auto
          px-10
        "
      >

        {/* Footer Box */}
        <div
          className="
            rounded-[6px]
           
            px-10
            py-12
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              gap-14
            "
          >

            {/* LEFT */}
            <div className="max-w-[240px]">

              {/* Logo */}
              <div className="flex items-center gap-2">

                <img
                  src={plant}
                  alt="logo"
                  className="
                    w-[28px]
                    h-[28px]
                    object-contain
                  "
                />

                <h2
                  className="
                    text-white
                    text-[18px]
                    font-semibold
                  "
                >
                  FloraVision.
                </h2>

              </div>

              {/* Text */}
              <p
                className="
                  text-[#d2d2d2]
                  text-[11px]
                  leading-[18px]
                  mt-5
                "
              >
                “From lush indoor greens to vibrant outdoor blooms,
                our plants are crafted to thrive and elevate your
                living environment.”
              </p>

              {/* Socials */}
              <div
                className="
                  flex
                  items-center
                  gap-6
                  mt-10
                  text-white
                  text-[12px]
                "
              >

                <span>FB</span>
                <span>TW</span>
                <span>LI</span>

              </div>

            </div>

            {/* CENTER */}
            <div>

              <h3
                className="
                  text-white
                  text-[13px]
                  font-semibold
                  mb-5
                "
              >
                Quick Link’s
              </h3>

              <ul
                className="
                  flex
                  flex-col
                  gap-1
                  text-[11px]
                  text-white
                "
              >

                <li className="underline cursor-pointer">
                  Home
                </li>

                <li className="underline cursor-pointer">
                  Type’s Of plant’s
                </li>

                <li className="underline cursor-pointer">
                  Contact
                </li>

                <li className="underline cursor-pointer">
                  Privacy
                </li>

              </ul>

            </div>

            {/* RIGHT */}
            <div className="max-w-[320px]">

              <h3
                className="
                  text-white
                  text-[13px]
                  font-semibold
                  mb-5
                "
              >
                For Every Update.
              </h3>

              {/* Input */}
              <div className="flex items-center">

                <input
                  type="email"
                  placeholder="Enter Email"
                  className="
                    w-[230px]
                    h-[34px]
                    bg-transparent
                    border
                    border-white/20
                    px-3
                    text-[11px]
                    text-white
                    outline-none
                  "
                />

                <button
                  className="
                    w-[95px]
                    h-[34px]
                    bg-white
                    text-black
                    text-[10px]
                    font-semibold
                  "
                >
                  SUBSCRIBE
                </button>

              </div>
{/* Bottom */}
          <div
            className="
              flex
              justify-center
              mt-14
            "
          >

            <p
              className="
                text-[#d2d2d2]
                text-[10px]
              "
            >
              FloraVision © all right reserve
            </p>

          </div>
            </div>

          </div>

          

        </div>

      </div>

    </footer>
  )
}

export default Footer