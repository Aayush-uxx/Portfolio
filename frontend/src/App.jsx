import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <Home theme={theme} setTheme={setTheme} />;
}

export default App;
