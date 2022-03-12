import React, { useEffect, useState } from "react";
import "./styles.css";

function PomodoroApp() {
  return (
    <div className="App">
      <h1>Pomodoro App</h1>
      <Pomodoro />
    </div>
  );
}

const intervals = {
  pomodoro: { id: "pomodoro", time: 25, timeMs: 25 * 60 * 1000 },
  shortBreak: { id: "shortBreak", time: 5, timeMs: 5 * 60 * 1000 },
  longBreak: { id: "longBreak", time: 15, timeMs: 15 * 60 * 1000 },
};
const initInterval = "pomodoro";

function Timer({ time }) {
  const formatTime = (time, digit) =>
    ("0" + Math.floor((time / (digit * 1000)) % 60)).slice(-2);

  return (
    <div className="timer">
      <span className="digits-minutes">{formatTime(time, 60)}:</span>
      <span className="digits-seconds">{formatTime(time, 1)}</span>
    </div>
  );
}

let intervalId;
function Pomodoro(props) {
  const [time, timeSet] = useState(intervals[initInterval].timeMs);
  const [intervalSelection, intervalSelectionSet] = useState(
    intervals[initInterval].id
  );
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (isActive && isPaused === false && time > 0) {
      intervalId = setInterval(() => {
        timeSet((time) => time - 1000);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, isPaused, time]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  // Create interval 1 sec
  const handleOnClick = (event) => {
    event.preventDefault();
    const id = event.target.id;
    intervalSelectionSet(intervals[id].id);
    timeSet(intervals[id].timeMs);
    setIsPaused(true);
  };

  const handleClickStartButton = (event) => {
    event.preventDefault();

    if (isPaused) {
      handleStart();
    } else {
      handlePauseResume();
    }
  };

  return (
    <main>
      <form>
        <div>
          <button
            onClick={handleOnClick}
            id="pomodoro"
            className={`pomodoro-button${
              intervalSelection === intervals["pomodoro"].id ? " active" : ""
            }`}
          >
            Pomodoro
          </button>
          <button
            onClick={handleOnClick}
            id="shortBreak"
            className={`pomodoro-button${
              intervalSelection === intervals["shortBreak"].id ? " active" : ""
            }`}
          >
            Short Break
          </button>
          <button
            onClick={handleOnClick}
            id="longBreak"
            className={`pomodoro-button${
              intervalSelection === intervals["longBreak"].id ? " active" : ""
            }`}
          >
            Long Break
          </button>
        </div>
        <Timer time={time} />
        <button onClick={handleClickStartButton}>
          {isPaused ? "Start" : "Pause"}
        </button>
      </form>
    </main>
  );
}

export default PomodoroApp;
