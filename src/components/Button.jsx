function Button({ text }) {
  return (
    <button
      className="
        px-6
        py-3
        bg-green-600
        text-white
        rounded-full
        font-medium
        hover:bg-green-700
        transition-all
        duration-300
      "
    >
      {text}
    </button>
  )
}

export default Button