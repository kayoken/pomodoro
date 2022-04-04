import { useState, useEffect } from "react";
import "./App.scss";
import Timer from "./components/Timer";
import Button from "./components/Button";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  const toggleActive = () => {
    if (!timerActive) {
      const newIntervalId = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1);
      setIntervalId(newIntervalId);
      setTimerActive(true);
    } else {
      clearInterval(intervalId);
      setTimerActive(false);
    }
  };

  return (
    <div className={`app ${timerActive ? "active" : ""}`}>
      <Timer seconds={seconds} />
      <Button onClick={toggleActive} timerActive={timerActive}>
        {timerActive ? "Stop" : "Start"}
      </Button>
    </div>
  );
}

export default App;
