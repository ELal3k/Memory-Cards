/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

const emojiCards = [
  { type: "🐢", isFlipped: false },
  { type: "🐳", isFlipped: false },
  { type: "🐬", isFlipped: false },
  { type: "🐦", isFlipped: false },
  { type: "🍍", isFlipped: false },
  { type: "🥝", isFlipped: false },
  { type: "👺", isFlipped: false },
  { type: "🥑", isFlipped: false },
  { type: "🌽", isFlipped: false },
  { type: "🥕", isFlipped: false },
  { type: "🥦", isFlipped: false },
  { type: "🍆", isFlipped: false },
  { type: "🥔", isFlipped: false },
  { type: "🍠", isFlipped: false },
  { type: "🌶️", isFlipped: false },
  { type: "🦘", isFlipped: false },
]

// ################## SHUFFLE METHOD ####################
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // swap elements array[i] and array[j]
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

// ################## GET RANDOM ELEMENTS METHOD ####################
function getRandomElements(arr, n) {
  const copyArr = [...arr]
  shuffleArray(copyArr)
  return copyArr.slice(0, n)
}

//################### $$$$$ APP START  $$$$$ ###################
const App = () => {
  const [selectedNumber, setSelectedNumber] =
    useState(null) /* number of cards to play */

  function handleSelect(number) {
    setSelectedNumber(number)
  }

  function shuffledGameArrayWithUniqueIds(cards, number) {
    const starterEmojiArr = getRandomElements(cards, number)

    const gameEmojiArr = [...starterEmojiArr, ...starterEmojiArr]

    const shuffledGameArray = getRandomElements(
      gameEmojiArr,
      2 * selectedNumber
    )

    const shuffledGameArrayWithUniqueIds = shuffledGameArray.map(
      (item, index) => ({
        id: index,
        ...item,
      })
    )

    return shuffledGameArrayWithUniqueIds
  }

  return (
    <div className="min-h-screen bg-slate-500">
      <header className="pt-4 pb-100">
        <h1 className="text-center text-8xl font-nabla">MEMORY CARDS</h1>
      </header>
      <main>
        {selectedNumber === null ? (
          <InitialCards onSelect={handleSelect} />
        ) : (
          <GameBoard
            shuffledGameCards={shuffledGameArrayWithUniqueIds(
              emojiCards,
              selectedNumber
            )}
            selectedNumber={selectedNumber}
          />
        )}
      </main>
    </div>
  )
}
export default App

// ################### INITIAL CARDS ###################
function InitialCards({ onSelect }) {
  return (
    <>
      <h3 className="font-dm text-2xl text-center pt-10">
        Choose the number of cards to play
      </h3>
      <div className="flex justify-center gap-4 ">
        <button
          className="bg-slate-300 text-4xl p-10 rounded-lg border-4 border-blue-500 "
          onClick={() => onSelect(8)}
        >
          16
        </button>
        <button
          className="bg-slate-300 text-4xl p-10 rounded-lg border-4 border-blue-500 "
          onClick={() => onSelect(10)}
        >
          20
        </button>
        <button
          className="bg-slate-300 text-4xl p-10 rounded-lg border-4 border-blue-500"
          onClick={() => onSelect(12)}
        >
          24
        </button>
        <button
          className="bg-slate-300 text-4xl p-10 rounded-lg border-4 border-blue-500"
          onClick={() => onSelect(14)}
        >
          28
        </button>
        <button
          className="bg-slate-300 text-4xl p-10 rounded-lg border-4 border-blue-500"
          onClick={() => onSelect(16)}
        >
          32
        </button>
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

// ################### GAME BOARD ###################
function GameBoard({ shuffledGameCards, selectedNumber }) {
  const [gameCards, setGameCards] = useState(shuffledGameCards)
  const [flippedCards, setFlippedCards] = useState([])
  const [countdown, setCountdown] = useState(null)
  const [currentPlayer, setCurrentPlayer] = useState("Player1")

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
          setCurrentPlayer(currentPlayer === "Player1" ? "Player2" : "Player1")
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
        <p className="font-dm pt-10 pb-3 text-lg">
          {" "}
          Current Player: {currentPlayer}
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
            <span className="text-8xl text-red-600 font-nabla">
              {countdown}
            </span>
          </p>
        )}
      </div>
    </>
  )
}
