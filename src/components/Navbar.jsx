import { useState } from "react"
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa"

import plant from "../assets/plant.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-[1150px] mx-auto px-8 py-7 flex items-center justify-between">

        {/* plant */}
        <div className="flex items-center gap-2">

          <img
            src={plant}
            alt="plant"
            className="w-10 h-10 object-contain"
          />

          <h2 className="text-white text-3xl font-semibold">
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

          <li className="cursor-pointer hover:text-green-300 transition-all duration-300">
            Home
          </li>

          <li className="cursor-pointer hover:text-green-300 transition-all duration-300">
            Plants Type
          </li>

          <li className="cursor-pointer hover:text-green-300 transition-all duration-300">
            More
          </li>

          <li className="cursor-pointer hover:text-green-300 transition-all duration-300">
            Contact
          </li>

        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-7 text-white text-lg">

          <FaSearch className="cursor-pointer" />

          <FaShoppingBag className="cursor-pointer" />

          <FaBars className="cursor-pointer" />

        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {
            menuOpen ? <FaTimes /> : <FaBars />
          }
        </div>

      </div>

      {/* Mobile Dropdown */}
      {
        menuOpen && (
          <div
            className="
              md:hidden
              bg-black/90
              backdrop-blur-lg
              px-8
              py-6
            "
          >

            <ul className="flex flex-col gap-5 text-white">

              <li>Home</li>
              <li>Plants Type</li>
              <li>More</li>
              <li>Contact</li>

            </ul>

          </div>
        )
      }

    </nav>
  )
}

export default Navbar