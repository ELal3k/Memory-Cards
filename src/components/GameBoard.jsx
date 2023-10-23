/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

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

  return (
    <>
      <div className="text-center">
        <p className="font-pixel pt-6 pb-3 text-3xl text-orange-500 font-bold">
          {" "}
          {currentPlayer}
        </p>
      </div>

      <div className="flex justify-center">
        <div className={`grid ${colsNumber} gap-4`}>
          {gameCards.map((card) => (
            <Card
              key={card.id}
              type={card.type}
              isFlipped={card.isFlipped}
              onFlip={() => handleFlip(card)}
            />
          ))}
        </div>
      </div>

      <div className="text-center pt-3 text-lg font-dm">
        {countdown > 0 && (
          <p>
            <span className="text-7xl font-nabla">{countdown}</span>
          </p>
        )}
      </div>
    </>
  )
}

function Card({ type, isFlipped, onFlip }) {
  return type === null ? (
    <div className="bg-slate-500 border-[1px] border-dotted rounded-md"></div>
  ) : (
    <button
      className="border-[1px] text-4xl p-8 rounded-md bg-sky-500 "
      onClick={onFlip}
    >
      {isFlipped ? type : <p className="font-nabla text-blue-400"> M </p>}
    </button>
  )
}
