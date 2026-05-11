import { FaShoppingBag } from "react-icons/fa"

function PlantCard({
  image,
  title,
  description,
  price,
}) {
  return (
    <div
      className="
        relative
        overflow-visible
        h-[320px]
        rounded-[34px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-[10px]
        pt-[95px]
        px-5
        pb-5
        mt-10
      "
    >

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-[34px]
          bg-gradient-to-b
          from-white/[0.03]
          to-transparent
        "
      ></div>

      {/* Floating Plant Image */}
      <div
        className="
          absolute
          top-[-35px]
          left-1/2
          -translate-x-1/2
          z-20
        "
      >

        <img
          src={image}
          alt={title}
          className="
            w-[205px]
            h-[205px]
            mt-[-30px]
            object-contain
          "
        />

      </div>

      {/* Content */}
      <div className="relative z-10 text-white">

        {/* Title */}
        <h3
          className="
            text-[18px]
            font-normal
            leading-[94px]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            text-[15px]
            text-gray-300
            leading-[17px]
            mt-1
          "
        >
          {description}
        </p>

        {/* Bottom */}
        <div className="flex items-end justify-between mt-5">

          {/* Price */}
          <h4
            className="
              text-[28px]
              font-medium
            "
          >
            Rs. {price}/-
          </h4>

          {/* Bag Button */}
          <button
            className="
              w-[34px]
              h-[34px]
              rounded-[10px]
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
              text-[12px]
            "
          >
            <FaShoppingBag />
          </button>

        </div>

      </div>

    </div>
  )
}

export default PlantCard