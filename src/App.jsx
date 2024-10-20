import { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Timer from "./components/Timer";
import Button from "./components/Button";
import Records from "./components/Records";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const [records, setRecords] = useState([]);
  const [timeStamp, setTimeStamp] = useState(new Date());

  useEffect(() => {
    const getRecords = async () => {
      const records = await fetchRecords();

      setRecords(records);
    };

    getRecords();
  }, []);

  const fetchRecords = async () => {
    const res = await fetch("http://localhost:3001/records");
    const data = await res.json();

    return data;
  };

  const handleToggleActive = () => {
    let date = null;
    let newIntervalId = null;
    if (!timerActive) {
      setTimeStamp(new Date());
      newIntervalId = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      setIntervalId(newIntervalId);
      setTimerActive(true);
    } else {
      clearInterval(intervalId);
      setTimerActive(false);
    }
  };

  const handleSave = async () => {
    const record = {
      seconds: seconds,
      date: timeStamp,
    };

    const res = await fetch("http://localhost:3001/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });
    const data = await res.json();

    setRecords([...records, data]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className={`app-container ${timerActive ? "active" : ""}`}>
              <Timer seconds={seconds} />
              <div>
                <Button onClick={handleToggleActive} active={timerActive}>
                  {timerActive ? "Stop" : "Start"}
                </Button>
                <Button
                  disabled={timerActive}
                  onClick={handleSave}
                  active={timerActive}
                >
                  Save
                </Button>
                <div className="records-link">
                  <Link to="/records">Records</Link>
                </div>
              </div>
            </div>
          }
        ></Route>
        <Route path="/records" element={<Records records={records} />} />
      </Routes>
    </Router>
  );
}

export default App;
