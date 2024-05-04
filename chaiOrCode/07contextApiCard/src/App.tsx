import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [defualtTheme, setlightMood] = useState("light");
  const lightMood = () => {
    setlightMood("light");
  };
  const darkMood = () => {
    setlightMood("dark");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(defualtTheme);
  }, [defualtTheme]);
  return (
    <ThemeProvider value={{ darkMood, defualtTheme, lightMood }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
