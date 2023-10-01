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
    <main className="min-h-screen bg-slate-500">
      {cols === 0 && rows === 0 ? (
        <div className="flex flex-col items-center">
          <p className=" ">Set the number of cards to play!</p>
          <div className="flex gap-6">
            <button
              className="p-3 m-3 rounded-md bg-gray-400 border-2 border-green-400"
              onClick={() => {
                setRows(2)
                setCols(3)
              }}
            >
              6
            </button>
            <button
              className=" p-3 m-3 rounded-md bg-gray-400 border-2 border-green-400 "
              onClick={() => {
                setRows(2)
                setCols(4)
              }}
            >
              8
            </button>
            <button
              className=" p-3 m-3 rounded-md bg-gray-400 border-2 border-green-400"
              onClick={() => {
                setRows(2)
                setCols(5)
              }}
            >
              10
            </button>
            <button
              className=" p-3 m-3 rounded-md bg-gray-400 border-2 border-green-400"
              onClick={() => {
                setRows(3)
                setCols(4)
              }}
            >
              12
            </button>
          </div>
        </div>
      ) : (
        arrNull.map((row, ridx) => {
          return (
            <div key={ridx} className="flex justify-center my-auto">
              {row.map((cell, cidx) => {
                return (
                  <button
                    key={cidx}
                    className="p-3 m-3 rounded-md bg-gray-400 border-2 border-green-400 "
                    onClick={() => console.log("row:", ridx, "col:", cidx)}
                  >
                    {cell}
                  </button>
                )
              })}
            </div>
          )
        })
      )}
    </main>
  )
}
export default App
