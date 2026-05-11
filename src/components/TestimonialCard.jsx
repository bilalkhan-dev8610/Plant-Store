function TestimonialCard({
  image,
  name,
  review,
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        p-6
      "
    >

      {/* Glow Effect */}
      <div
        className="
          absolute
          w-[180px]
          h-[180px]
          bg-green-500/10
          blur-[100px]
          rounded-full
          top-0
          right-0
        "
      ></div>

      {/* Content */}
      <div className="relative z-10">

        {/* User Info */}
        <div className="flex items-center gap-4">

          <img
            src={image}
            alt={name}
            className="
              w-14
              h-14
              rounded-full
              object-cover
            "
          />

          <div>

            <h3 className="text-white text-lg font-medium">
              {name}
            </h3>

            <p className="text-yellow-400 text-sm mt-1">
              ★★★★★
            </p>

          </div>

        </div>

        {/* Review */}
        <p
          className="
            text-gray-300
            leading-relaxed
            text-sm
            mt-6
          "
        >
          {review}
        </p>

      </div>

    </div>
  )
}

export default TestimonialCard