import Chai from "./chai";
function App() {
  const userName = "Yousuf Khan";
  return (
    <>
      <Chai />
      <h1 className="text-red-700 text-3xl font-bold">Hi {userName}</h1>
       {/* <-- we can call userName here this is called --> */}
      {/* //!{} this is evaluated expression */}
    </>
  );
}

export default App;
