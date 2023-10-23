export default function InitialScreen({ onSelect }) {
  return (
    <>
      <h3 className="font-pixel text-3xl text-center pt-10 pb-5 text-orange-500">
        Choose the number of cards to play
      </h3>
      <div className="flex justify-center gap-4 ">
        <button
          className="bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300   text-orange-500"
          onClick={() => onSelect(8)}
        >
          16
        </button>
        <button
          className="bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300 text-orange-500 "
          onClick={() => onSelect(10)}
        >
          20
        </button>
        <button
          className="bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300 text-orange-500"
          onClick={() => onSelect(12)}
        >
          24
        </button>
        <button
          className="bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300 text-orange-500"
          onClick={() => onSelect(14)}
        >
          28
        </button>
        <button
          className="bg-slate-600 text-6xl p-10 rounded-lg border-4 font-pixel border-orange-300 text-orange-500"
          onClick={() => onSelect(16)}
        >
          32
        </button>
      </div>
      <p className="flex justify-center mt-10 font-pixel text-3xl text-orange-500">
        {" "}
        Please input your names you mem freaks!!!
      </p>
      <form className="flex justify-center gap-44 mt-10">
        <input
          type="text"
          placeholder="Player 1"
          className="rounded-md h-10 p-3 text-center border-4 border-orange-300 focus:outline-none focus:border-orange-500 font-pixel"
        />
        <input
          type="text"
          placeholder="Player 2"
          className="rounded-md h-10 p-3 text-center border-4 border-orange-300 focus:outline-none focus:border-orange-500 font-pixel"
        />
      </form>
    </>
  )
}
