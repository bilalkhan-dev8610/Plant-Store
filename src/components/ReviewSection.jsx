import TestimonialCard from "./TestimonialCard"
import Img7 from "../assets/img7.png"
import Img8 from "../assets/img8.jpg"
import Img9 from "../assets/img9.png"

function ReviewSection() {

  const reviews = [
    {
      id: 1,
      image: Img7,
      name: "Shelly Russel",
      review:
        "Absolutely love these plants! They completely changed the atmosphere of my living room and added such a fresh natural vibe.",
    },

    {
      id: 2,
      image: Img8,
      name: "Lula Rolfson",
      review:
        "The quality of the plants exceeded my expectations. Everything arrived healthy, vibrant, and beautifully packaged.",
    },

    {
      id: 3,
      image: Img9,
      name: "Carol Huels",
      review:
        "I’m extremely happy with my purchase. The plants are stunning and the overall shopping experience was smooth and enjoyable.",
    },
  ]

  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
       <div className="flex justify-center mb-16">

  <h2
    className="
      relative
      text-white
      text-[22px]
      md:text-4xl
      font-semibold
      text-center
      leading-none
    "
  >

    Customer Review

    {/* Left Yellow Corner */}
    <span
      className="
        absolute
        left-[-12px]
        bottom-[2px]
        w-[16px]
        h-[16px]
        border-l-[3px]
        border-b-[3px]
        border-[#c7b84e]
        rounded-bl-[6px]
      "
    ></span>

    {/* Right Yellow Corner */}
    <span
      className="
        absolute
        right-[-12px]
        top-[2px]
        w-[16px]
        h-[16px]
        border-r-[3px]
        border-t-[3px]
        border-[#c7b84e]
        rounded-tr-[6px]
      "
    ></span>

  </h2>

</div>

        {/* Reviews Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            rounded-[77px]
           
           
          "
        >

          {
            reviews.map((review) => (
              <TestimonialCard
                key={review.id}
                image={review.image}
                name={review.name}
                review={review.review}
              />
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default ReviewSection