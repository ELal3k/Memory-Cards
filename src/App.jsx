import { useState } from "react"

const emojiArray = [
  "🐢",
  "🐈",
  "🐸",
  "🐘",
  "🦃",
  "🐳",
  "🐬",
  "🐦",
  "🍍",
  "🥝",
  "👺",
  "🥑",
  "🌽",
  "🥕",
  "🥦",
  "🍆",
  "🥔",
  "🍠",
  "🌶️",
  "🦘",
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

const starterEmojiArr = getRandomElements(emojiArray, 3)

const gameEmojiArr = [...starterEmojiArr, ...starterEmojiArr]

const shuffledGameArray = getRandomElements(gameEmojiArr, 6)

console.log("Shuffled Game Array:", shuffledGameArray)
console.log("Starter Emoji:", starterEmojiArr)
console.log("Game Emoji:", gameEmojiArr)

//###################APP START ###################
const App = () => {
  const [rows, setRows] = useState(0)
  const [cols, setCols] = useState(0)
  const [gameArray, setGameArray] = useState(shuffledGameArray)

  function createArray() {
    let arr = []
    for (let i = 0; i < rows; i++) {
      arr[i] = []
      for (let j = 0; j < cols; j++) {
        arr[i][j] = `${i},${j}`
      }
    }
    return arr
  }

  const arrNull = createArray()

  return (
    <div className="min-h-screen bg-slate-500">
      <header className="py-4">
        <h1 className="text-center text-8xl font-nabla">MEMORY CARDS</h1>
      </header>
      <main>
        <h3 className="font-dm text-xl text-center">
          Choose the number of cards to play
        </h3>
        <InitialCards />
      </main>
    </div>
  )
}
export default App

function InitialCards() {
  return (
    <div className="flex justify-center gap-4 py-10">
      <button className="bg-slate-300 text-4xl p-10 rounded-lg border-4 border-blue-500 ">
        4
      </button>
      <button className="bg-slate-300 text-4xl p-10 rounded-lg border-4 border-blue-500 ">
        6
      </button>
      <button className="bg-slate-300 text-4xl p-10 rounded-lg border-4 border-blue-500">
        8
      </button>
      <button className="bg-slate-300 text-4xl p-10 rounded-lg border-4 border-blue-500">
        10
      </button>
      <button className="bg-slate-300 text-4xl p-10 rounded-lg border-4 border-blue-500">
        12
      </button>
    </div>
  )
}
