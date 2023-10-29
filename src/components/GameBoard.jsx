/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function GameBoard({
  shuffledGameCards,
  selectedNumber,
  player1,
  player2,
}) {
  const [gameCards, setGameCards] = useState(shuffledGameCards)
  const [flippedCards, setFlippedCards] = useState([])
  const [countdown, setCountdown] = useState(null)
  const [currentPlayer, setCurrentPlayer] = useState(player1)
  const [points1, setPoints1] = useState(0)
  const [points2, setPoints2] = useState(0)
  const [winner, setWinner] = useState(null)

  const colsNumber =
    selectedNumber === 8
      ? "grid-cols-4"
      : selectedNumber === 10
      ? "grid-cols-5"
      : selectedNumber === 12
      ? "grid-cols-6"
      : selectedNumber === 14
      ? "grid-cols-7"
      : selectedNumber === 16
      ? "grid-cols-8"
      : "grid-cols-9"

  useEffect(() => {
    if (points1 + points2 === 2 * selectedNumber) {
      if (points1 > points2) {
        setWinner(player1)
      } else {
        setWinner(player2)
      }
    }
  })

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards
      if (firstCard.type === secondCard.type && currentPlayer === player1) {
        setPoints1((prev) => prev + 2)
      } else if (
        firstCard.type === secondCard.type &&
        currentPlayer === player2
      ) {
        setPoints2((prev) => prev + 2)
      }
    }
  }, [flippedCards])

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards

      if (
        firstCard.type === secondCard.type &&
        firstCard.id !== secondCard.id
      ) {
        setTimeout(() => {
          setGameCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, type: null }
                : c
            )
          )
          setFlippedCards([])
        }, 2000)
      } else {
        setCountdown(4)
      }
    }
  }, [flippedCards])

  useEffect(() => {
    if (countdown === null) return
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      const [firstCard, secondCard] = flippedCards

      setGameCards((prev) =>
        prev.map((c) =>
          c.id === firstCard.id || c.id === secondCard.id
            ? { ...c, isFlipped: false }
            : c
        )
      )
    }
    setFlippedCards([])
    setCurrentPlayer(currentPlayer === player1 ? player2 : player1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown])

  function handleFlip(card) {
    if (flippedCards.length < 2) {
      setGameCards((prev) =>
        prev.map((c) => (c.id === card.id ? { ...c, isFlipped: true } : c))
      )
      setFlippedCards((prev) => [...prev, card])
    }
  }
  console.log(selectedNumber)
  return (
    <>
      <div className="text-center">
        <p className="font-pixel pt-6 pb-3 text-4xl text-yellow-400 font-bold">
          <span className="capitalize">{currentPlayer}</span>
          `s turn
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-9">
          <div className="col-span-2 px-16 font-pixel text-center text-4xl text-orange-500 font-bold capitalize">
            <p className="text-yellow-400">{player1}</p>
            <p className="text-yellow-400">Cards:{points1}</p>
          </div>
          <div className={`grid ${colsNumber} gap-4 col-span-5`}>
            {gameCards.map((card) => (
              <Card
                key={card.id}
                type={card.type}
                isFlipped={card.isFlipped}
                onFlip={() => handleFlip(card)}
              />
            ))}
          </div>
          <p className="col-span-2 px-16 font-pixel text-center text-4xl text-orange-500 font-bold capitalize">
            <p className="text-yellow-400">{player2}</p>
            <p className="text-yellow-400">Cards:{points2}</p>
          </p>
        </div>
      </div>

      <div className="text-center pt-3">
        {countdown > 0 && (
          <p>
            <span className="text-7xl font-nabla">{countdown}</span>
          </p>
        )}
      </div>

      {points1 + points2 === 2 * selectedNumber && (
        <div className="text-center">
          <p className="text-7xl font-nabla">Game Over</p>
        </div>
      )}
    </>
  )
}

function Card({ type, isFlipped, onFlip }) {
  const cardVariants = {
    flipped: { rotateY: 180, transition: { duration: 0.5 } },
    unflipped: { rotateY: 0, transition: { duration: 0.5 } },
  }

  return type === null ? (
    <motion.div
      className="bg-slate-500 border-[1px] border-dotted rounded-md"
      initial={isFlipped ? "flipped" : "unflipped"}
      animate={isFlipped ? "flipped" : "unflipped"}
    ></motion.div>
  ) : (
    <motion.button
      className="border-[1px] text-4xl p-8 rounded-md bg-sky-500 flex justify-center items-center"
      disabled={isFlipped}
      onClick={onFlip}
      whileTap={isFlipped ? {} : { rotateY: 180 }}
    >
      {isFlipped ? (
        <motion.div
          variants={cardVariants}
          initial="unflipped"
          animate={isFlipped ? "flipped" : "unflipped"}
        >
          {type}
        </motion.div>
      ) : (
        <p className="font-nabla text-blue-400"> M </p>
      )}
    </motion.button>
  )
}
