import { useState, useEffect } from "react";
import "./App.scss";
import Timer from "./components/Timer";
import Button from "./components/Button";

function App() {
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [timerActive, setTimerActive] = useState(false);

  return (
    <div className="app">
      <Timer currentTime={currentTime} />
      <Button
        onClick={() => setTimerActive(!timerActive)}
        timerActive={timerActive}
      >
        {timerActive ? "Stop" : "Start"}
      </Button>
    </div>
  );
}

export default App;
