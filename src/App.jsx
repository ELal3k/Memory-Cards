import { useState } from "react"
const App = () => {
  const [rows, setRows] = useState(0)
  const [cols, setCols] = useState(0)

  const createArray = () => {
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

  const arr = createArray(5, 3)
  console.log(arr)
  return (
    <main className="h-screen bg-slate-500">
      {cols === 0 && rows === 0 ? (
        <div className="flex justify-center my-auto">
          Set the number of cards to play!
        </div>
      ) : (
        arr.map((row, ridx) => {
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
