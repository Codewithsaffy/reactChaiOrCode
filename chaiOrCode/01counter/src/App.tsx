import { useState } from "react";
import "./index.css";

function App() {
  let [count, setCount] = useState<number>(0);
  function add() {
    if (count < 20) {
      //! hum ager chahte hain k eak saath sub update karen to hum aese nahe ker sakte hain keo k use satate eak he dafa change hoga
      //  setCount(count + 1)
      //  setCount(count + 1)
      setCount(count + 1);
      //  setCount(count + 1)

      //! sahe tareeka ye hai k hum call back fn ka use kare jis me wo previous value ko update kare
      setCount((preCount) => preCount + 1);
      setCount((preCount) => preCount + 1);
      setCount((preCount) => preCount + 1);
      setCount((preCount) => preCount + 1); //! add 5 times because first time count = count + 1 and then count = count + 1
    }
  }
  function remove() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className=" w-screen h-screen bg-slate-800 gap-0 grid place-items-center">
        <div className="text-white flex flex-col text-center gap-4">
          <h1 className="text-4xl text-purple-600 font-bold">
            Code With Saffy
          </h1>
          <h2 className="text-2xl text-pink-800 font-bold text-center">
            Counter Value :{" "}
            <span className="text-3xl text-yellow-500">{count}</span>
          </h2>
          <button
            onClick={add}
            className="text-xl rounded bg-black py-1 border-4 font-bold text-white  border-green-800"
          >
            Add Value
          </button>
          <button
            onClick={remove}
            className="text-xl rounded bg-black py-1 font-bold text-white  border-red-800 border-4"
          >
            Remove Value
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
