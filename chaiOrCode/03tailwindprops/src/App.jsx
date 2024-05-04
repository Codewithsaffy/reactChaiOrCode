import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // hum arr or obj ko pass kr skte h kekin variable ke soorat me store kr skte h
  // let myObj = {
  //   name: "Delba",
  //   age: 20,
  //   address: "Tangail",
  // }
  // let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="flex gap-2">
        <Card person="Delba" viewProfile="Exit" />
        <Card person="Yousuf" />
      </div>
    </>
  );
}

export default App;
