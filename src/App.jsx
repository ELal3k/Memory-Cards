/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"
import InitialScreen from "./components/InitialScreen"
import GameBoard from "./components/GameBoard"
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
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [startGame, setStartGame] = useState(false)

  console.log("Player1", player1)
  console.log("Player2", player2)

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
        <h1 className="text-center text-7xl font-nabla">MEMORY CARDS</h1>
      </header>
      <main>
        {!startGame ? (
          <InitialScreen
            selectedNumber={selectedNumber}
            onSelect={handleSelect}
            onStart={setStartGame}
            player1={player1}
            player2={player2}
            onSetPlayer1={setPlayer1}
            onSetPlayer2={setPlayer2}
          />
        ) : (
          <GameBoard
            shuffledGameCards={shuffledGameArrayWithUniqueIds(
              emojiCards,
              selectedNumber
            )}
            selectedNumber={selectedNumber}
            player1={player1}
            player2={player2}
          />
        )}
      </main>
    </div>
  )
}
export default App
