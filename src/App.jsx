import { useState, useEffect } from "react";
import "./App.scss";
import Timer from "./components/Timer";
import Button from "./components/Button";

function App() {
  const [seconds, setSeconds] = useState(7195);
  const [timerActive, setTimerActive] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const [records, setRecords] = useState({});

  const handleToggleActive = () => {
    if (!timerActive) {
      const newIntervalId = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      setIntervalId(newIntervalId);
      setTimerActive(true);
    } else {
      clearInterval(intervalId);
      setTimerActive(false);
    }
  };

  const handleSave = () => {};

  return (
    <div className={`app ${timerActive ? "active" : ""}`}>
      <Timer seconds={seconds} />
      <div>
        <Button onClick={handleToggleActive} active={timerActive}>
          {timerActive ? "Stop" : "Start"}
        </Button>
        <Button onClick={handleSave} active={timerActive}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default App;
