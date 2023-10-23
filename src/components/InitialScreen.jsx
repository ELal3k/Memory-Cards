export default function InitialScreen({
  onSelect,
  onStart,
  player1,
  player2,
  onSetPlayer1,
  onSetPlayer2,
}) {
  function handleCardsNumber(num) {
    onSelect(num)
  }
  return (
    <>
      <h3 className="font-pixel text-3xl text-center pt-10 pb-5 text-orange-500">
        Choose the number of cards to play
      </h3>
      <div className="flex justify-center gap-4 ">
        <button
          className="bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300   text-orange-500"
          onClick={handleCardsNumber(8)}
        >
          16
        </button>
        <button
          className="bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300 text-orange-500 "
          onClick={handleCardsNumber(10)}
        >
          20
        </button>
        <button
          className="bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300 text-orange-500"
          onClick={handleCardsNumber(12)}
        >
          24
        </button>
        <button
          className="bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300 text-orange-500"
          onClick={handleCardsNumber(14)}
        >
          28
        </button>
        <button
          className="bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300 text-orange-500"
          onClick={handleCardsNumber(16)}
        >
          32
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="font-pixel text-3xl text-orange-500">
          {" "}
          Please type your names you mem freaks!!!
        </p>
        <form className="flex flex-col justify-center items-center ">
          <div className="flex justify-center gap-44 mt-2">
            <div className="flex flex-col items-center">
              <label className="font-pixel text-xl text-orange-500">
                Player 1
              </label>
              <input
                type="text"
                value={player1}
                className="rounded-md h-10 p-3 text-center border-4 border-orange-300 focus:outline-none focus:border-orange-500 font-pixel"
                onChange={(e) => onSetPlayer1(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="font-pixel text-xl text-orange-500">
                Player 2
              </label>
              <input
                type="text"
                value={player2}
                className="rounded-md h-10 p-3 text-center border-4 border-orange-300 focus:outline-none focus:border-orange-500 font-pixel"
                onChange={(e) => onSetPlayer2(e.target.value)}
              />
            </div>
          </div>

          <button
            className="mt-20 font-pixel text-6xl text-orange-500 font-bold"
            onClick={() => onStart(true)}
          >
            Play
          </button>
        </form>
      </div>
    </>
  )
}
