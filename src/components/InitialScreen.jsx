export default function InitialScreen({ onSelect }) {
  return (
    <>
      <h3 className="font-pixel text-3xl text-center pt-10 text-orange-500">
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
    </>
  )
}
