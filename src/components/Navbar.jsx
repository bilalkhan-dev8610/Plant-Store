import { useState } from "react"
import {
  FaTimes,
  FaSearch,
} from "react-icons/fa"

import plant from "../assets/plant.png"
import bag from "../assets/bag.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">

      <div
        className="
          max-w-[1150px]
          mx-auto
          px-6
          md:px-8
          py-7
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}
        <div className="flex items-center gap-2">

          <img
            src={plant}
            alt="plant"
            className="
              w-9
              h-9
              md:w-10
              md:h-10
              object-contain
            "
          />

          <h2
            className="
              text-white
              text-[28px]
              md:text-3xl
              font-semibold
            "
          >
            FloraVision.
          </h2>

        </div>

        {/* Desktop Menu */}
        <ul
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-white
            text-sm
          "
        >

          <li className="cursor-pointer">
            Home
          </li>

          <li className="cursor-pointer">
            Plants Type
          </li>

          <li className="cursor-pointer">
            More
          </li>

          <li className="cursor-pointer">
            Contact
          </li>

        </ul>

        {/* Desktop Right Icons */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-7
            text-white
          "
        >

          {/* Search */}
          <FaSearch
            className="
              text-[18px]
              cursor-pointer
            "
          />

          {/* Bag PNG */}
          <img
            src={bag}
            alt="bag"
            className="
              w-[18px]
              h-[18px]
              object-contain
              cursor-pointer
            "
          />

        </div>

        {/* Mobile Icons */}
        <div
          className="
            md:hidden
            flex
            items-center
            gap-5
            text-white
          "
        >

          {/* Search */}
          <FaSearch className="text-[18px]" />

          {/* Bag PNG */}
          <img
            src={bag}
            alt="bag"
            className="
              w-[16px]
              h-[16px]
              object-contain
            "
          />

          {/* Mobile Hamburger */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex
              flex-col
              items-end
              gap-[5px]
              cursor-pointer
            "
          >

            {
              menuOpen ? (
                <FaTimes className="text-[20px]" />
              ) : (
                <>
                  <span
                    className="
                      w-[20px]
                      h-[2px]
                      bg-white
                      rounded-full
                    "
                  ></span>

                  <span
                    className="
                      w-[12px]
                      h-[2px]
                      bg-white
                      rounded-full
                    "
                  ></span>
                </>
              )
            }

          </div>

        </div>

      </div>

      {/* Mobile Dropdown */}
      {
        menuOpen && (
          <div
            className="
              md:hidden
              bg-black/80
              backdrop-blur-xl
              px-8
              py-6
            "
          >

            <ul
              className="
                flex
                flex-col
                gap-5
                text-white
                text-sm
              "
            >

              <li className="cursor-pointer">
                Home
              </li>

              <li className="cursor-pointer">
                Plants Type
              </li>

              <li className="cursor-pointer">
                More
              </li>

              <li className="cursor-pointer">
                Contact
              </li>

            </ul>

          </div>
        )
      }

    </nav>
  )
}

export default Navbar