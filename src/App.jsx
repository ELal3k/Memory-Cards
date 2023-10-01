import { useState } from "react"

function generatePairs(numPairs, minRange, maxRange) {
  const pairs = []

  for (let i = 0; i < numPairs; i++) {
    const num = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange
    pairs.push([num, num])
  }

  return pairs
}

// Example usage: generate 3 pairs of equal integers within the range 1 to 10
const result = generatePairs(3, 1, 10)
console.log("RANDOM PAIRS:", result)

const App = () => {
  const [rows, setRows] = useState(3)
  const [cols, setCols] = useState(3)

  function createArray() {
    let arr = []
    for (let i = 0; i < rows; i++) {
      arr[i] = []
      for (let j = 0; j < cols; j++) {
        arr[i][j] = 0
        0
      }
    }
    return arr
  }

  function gameArray() {
    let arr = createArray()
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        arr[i][j] = Math.floor(Math.random() * 8)
      }
    }
    return arr
  }

  const arrNull = createArray()
  const arrGame = gameArray()
  console.log(arrGame)

  return (
    <main className="h-screen bg-slate-500">
      {cols === 0 && rows === 0 ? (
        <div className="flex justify-center my-auto">
          Set the number of cards to play!
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
