import React, { useState, useEffect, useRef } from "react";

function Stopwatch({ id, onRemove }) {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    const startStopwatch = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    };

    const stopStopwatch = () => {
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    const formatTime = () => {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <div className="stopwatch">
            <input onChange={(e) => (inputRef.current = e.target.value)} placeholder="Timer" className="stopwatch-title" />
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button className="start-button" onClick={startStopwatch}>Start</button>
                <button className="stop-button" onClick={stopStopwatch}>Stop</button>
                <button className="reset-button" onClick={resetStopwatch}>Reset</button>
                <button className="remove-button" onClick={() => onRemove(id)}>Remove</button>
            </div>
        </div>
    );
}

export default function AddButton() {
    const [stopwatches, setStopwatches] = useState([{id: Date.now()}]);

    const addStopwatch = () => {
        const newId = Date.now();
        setStopwatches([...stopwatches, { id: newId }]);
    };

    
    const removeStopwatch = (id) => {
        setStopwatches(stopwatches.filter(stopwatch => stopwatch.id !== id));
    };
    
    return (
        <div>
            {stopwatches.map(stopwatch => (
                <Stopwatch key={stopwatch.id} id={stopwatch.id} onRemove={removeStopwatch} />
            ))}
            <button onClick={addStopwatch} className="add-stopwatch">
                +
            </button>
        </div>
    );
}
