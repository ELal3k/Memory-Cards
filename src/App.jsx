import { useState } from "react"

const emojiArray = [
  { id: 1, type: "🐢", isFlipped: false },
  { id: 2, type: "🐳", isFlipped: false },
  { id: 3, type: "🐬", isFlipped: false },
  { id: 4, type: "🐦", isFlipped: false },
  { id: 5, type: "🍍", isFlipped: false },
  { id: 6, type: "🥝", isFlipped: false },
  { id: 7, type: "👺", isFlipped: false },
  { id: 8, type: "🥑", isFlipped: false },
  { id: 9, type: "🌽", isFlipped: false },
  { id: 10, type: "🥕", isFlipped: false },
  { id: 11, type: "🥦", isFlipped: false },
  { id: 12, type: "🍆", isFlipped: false },
  { id: 13, type: "🥔", isFlipped: false },
  { id: 14, type: "🍠", isFlipped: false },
  { id: 15, type: "🌶️", isFlipped: false },
  { id: 16, type: "🦘", isFlipped: false },
]

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // swap elements array[i] and array[j]
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function getRandomElements(arr, n) {
  const copyArr = [...arr] // Create a copy if you don't want to modify the original array
  shuffleArray(copyArr)
  return copyArr.slice(0, n)
}

//###################APP START ###################
const App = () => {
  const [selectedNumber, setSelectedNumber] = useState(null)

  const starterEmojiArr = getRandomElements(emojiArray, selectedNumber)

  const gameEmojiArr = [...starterEmojiArr, ...starterEmojiArr]

  const shuffledGameArray = getRandomElements(gameEmojiArr, 2 * selectedNumber)

  console.log("selectedNumber:", selectedNumber)
  console.log("gameEmojiArr:", gameEmojiArr)
  console.log("shuffledGameArray:", shuffledGameArray)

  function handleSelect(number) {
    setSelectedNumber(number)
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
          <GameCards shuffledArray={shuffledGameArray} />
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

function GameCards({ shuffledArray }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-8 gap-2">
          {shuffledArray.map((emoji, index) => (
            <button key={index} className="text-3xl border-4 h-20">
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
