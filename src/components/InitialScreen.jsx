import { useState } from "react"
import { motion } from "framer-motion"
const cardsNumber = [
  { id: 1, number: 8 },
  { id: 2, number: 10 },
  { id: 3, number: 12 },
  { id: 4, number: 14 },
  { id: 5, number: 16 },
]

export default function InitialScreen({
  selectedNumber,
  onSelect,
  onStart,
  player1,
  player2,
  onSetPlayer1,
  onSetPlayer2,
}) {
  const [animated, setAnimated] = useState("")

  function handleCardsNumber(card) {
    onSelect(card.number)
    setAnimated(card.id)
  }

  return (
    <>
      <h3 className="font-pixel text-3xl text-center pt-10 pb-5 text-orange-500">
        Choose the number of cards to play
      </h3>
      <div className="flex justify-center gap-4 ">
        {cardsNumber.map((card) => (
          <button
            key={card.id}
            className={`bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300 text-orange-500 ${
              card.id === animated ? "animate-pulse" : ""
            } duration-100`}
            onClick={() => handleCardsNumber(card)}
          >
            {2 * card.number}
          </button>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        {!selectedNumber ? (
          ""
        ) : (
          <motion.p
            className="font-pixel text-3xl text-orange-500"
            initial={{ scale: 0 }} // Initial state (small scale)
            animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }} // Keyframes for scale and opacity
            transition={{ duration: 0.8, ease: "easeOut" }} // Duration and easing
          >
            Please type your names you mem freaks!!!
          </motion.p>
        )}
        <form className="flex flex-col justify-center items-center ">
          {!selectedNumber ? (
            ""
          ) : (
            <motion.div
              className="flex justify-center gap-44 mt-2"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center">
                <label className="font-pixel text-xl text-orange-500">
                  Player 1
                </label>
                <input
                  type="text"
                  value={player1.name}
                  className="rounded-md h-10 p-3 text-center border-4 border-orange-300 focus:outline-none focus:border-orange-500 font-pixel"
                  onChange={(e) => onSetPlayer1(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-center">
                <label className="font-pixel text-xl text-orange-500">
                  Player 2
                </label>
                <input
                  type="text"
                  value={player2}
                  className="rounded-md h-10 p-3 text-center border-4 border-orange-300 focus:outline-none focus:border-orange-500 font-pixel"
                  onChange={(e) => onSetPlayer2(e.target.value)}
                />
              </div>
            </motion.div>
          )}

          {player1 !== "" && player2 !== "" && selectedNumber && (
            <motion.button
              className="mt-20 font-pixel text-6xl text-orange-500 font-bold"
              onClick={() => onStart(true)}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              Play
            </motion.button>
          )}
        </form>
      </div>
    </>
  )
}
