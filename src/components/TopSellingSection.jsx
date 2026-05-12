import PlantCard from "./PlantCard"
import RosePlant from "../assets/RosePlant.png"
import Image1 from "../assets/Image1.png"
import Img3 from "../assets/Img3.png"
import Img4 from "../assets/Img4.png"
import Img5 from "../assets/Img5.png"
import Img6 from "../assets/Img6.png"

function TopSellingSection() {

  const plants = [
    {
      id: 1,
      image: RosePlant,
      title: "Aglaonema plant",
      description:
        "The Aglaonema plant, commonly known as Chinese Evergreen and known for its attractive foliage.",
      price: 300,
    },

    {
      id: 2,
      image: Image1,
      title: "Plantain Lilies",
      description:
        "Hostas are primarily grown for their lush decorative leaves and beautiful appearance.",
      price: 380,
    },

    {
      id: 3,
      image: Img3,
      title: "Cactus",
      description:
        "It is known for their ability to thrive in arid environments and dry weather.",
      price: 259,
    },

    {
      id: 4,
      image: Img4,
      title: "Swiss cheese Plant",
      description:
        "It is a popular tropical houseplant known for its dramatic perforated leaves.",
      price: 400,
    },

    {
      id: 5,
      image: Img5,
      title: "Sansevieria plant",
      description:
        "It is a popular indoor plant admired for its striking appearance and low maintenance nature.",
      price: 450,
    },

    {
      id: 6,
      image: Img6,
      title: "Agave plant",
      description:
        "The Agave plant is a genus of succulent plants known for their striking structure.",
      price: 359,
    },
  ]

  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-4">

        {/* Section Heading */}
        <div className="flex justify-center mb-16">

          <h2
            className="
      relative
      text-white
      text-[22px]
      md:text-4xl
      font-semibold
      leading-none
    "
          >

            Our Top Selling Plants

            {/* Left Yellow Corner */}
            <span
              className="
        absolute
        left-[-10px]
        bottom-[-1px]
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
        right-[-10px]
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

        {/* Plants Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
           md:grid-cols-2 lg:grid-cols-3
            gap-8
            
          "
        >

          {
            plants.map((plant) => (
              <PlantCard
                key={plant.id}
                image={plant.image}
                title={plant.title}
                description={plant.description}
                price={plant.price}
              />
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default TopSellingSection