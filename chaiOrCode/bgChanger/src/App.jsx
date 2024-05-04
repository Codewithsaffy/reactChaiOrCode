import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen grid place-items-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-8 bg-slate-300 p-3 flex gap-3 items-center justify-center rounded-full">
          <button
            onClick={() => setColor("red")}
            className="w-20 p-3 rounded-full bg-red-500  text-white "
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="w-20 p-3 rounded-full bg-blue-500  text-white "
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="w-20 p-3 rounded-full bg-yellow-500  text-white "
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="w-20 p-3 rounded-full bg-pink-500  text-white "
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="w-20 p-3 rounded-full bg-purple-500  text-white "
          >
            Purple
          </button>
          <button
            onClick={() => setColor("green")}
            className="w-20 p-3 rounded-full bg-green-500  text-white "
          >
            Green
          </button>
          <button
            onClick={() => setColor("orange")}
            className="w-20 p-3 rounded-full bg-orange-500  text-white "
          >
            Orange
          </button>
          <button
            onClick={() => setColor("white")}
            className="w-20 p-3 rounded-full bg-white  text-black "
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="w-20 p-3 rounded-full bg-black  text-white "
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
