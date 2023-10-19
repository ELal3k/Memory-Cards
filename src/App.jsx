import { useState } from "react"

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
      <header className="pt-4 pb-20">
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
      <h3 className="font-dm text-2xl text-center">
        Choose the number of cards to play
      </h3>
      <div className="flex justify-center gap-4 py-10">
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

function Card({ type, isFlipped, onClick }) {
  return (
    <button className=" border-2 text-4xl p-8 rounded-md bg-green-400">
      {isFlipped ? type : "✪"}
    </button>
  )
}

function GameBoard({ shuffledGameCards }) {
  const [gameCards, setGameCards] = useState(shuffledGameCards)
  console.log("gameCards", gameCards)
  function handleFlip(card) {
    card.isFlipped = !card.isFlipped
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4 ">
          {gameCards.map((card) => (
            <Card
              key={card.id}
              type={card.type}
              isFlipped={card.isFlipped}
              onFlip={() => handleFlip()}
            />
          ))}
        </div>
      </div>
    </>
  )
}
