import { useRef, useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
  const [ms, setMs] = useState(0);  //intializing state 
  const [sec, setSec] = useState(0)
  const [minute, setMinute] = useState(0);
  const [pause, setPause] = useState(true)

  const [second1, setSecond1] = useState(59);
  const [minute1, setMinute1] = useState(5);
  const stopwatch = useRef(null)
  // useEffect(() => {
  //   start()
  // }, [])
  // useEffect(() => {
  //   let Timer = setInterval(() => {
  //     setM1(minute1 - 1);

  //   }, 1000)
  // }, [])


  const start = () => {
    stopwatch.current = setInterval(() => {
      setMs(prev => {
        if (prev == 99) {
          setSec(sprev => {
            if (sprev == 59) {
              setMinute(mprev => mprev + 1)
              setSec(0)
            }
            return sprev + 1
          });
          setMs(0)
        }
        return prev + 1
      })
    }, 10);
  }

  const Pause = () => {
    clearInterval(stopwatch.current)
  }
  const stop = () => {
    clearInterval(stopwatch.current)
    setMinute(0)
    setSec(0)
    setMs(0)
  }
  const handlePause = () => {
    setPause(!pause)
    pause ? start() : Pause()
  }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h1>{minute}:{sec <= 9 ? "0" + sec : sec}:{ms <= 9 ? "0" + ms : ms}</h1>

      <button onClick={handlePause}>{pause ? "Start" : "Pause"}</button>
      {/* <button onClick={Pause}>Pause</button> */}
      <button onClick={stop}>Reset</button>
      {/* 
      <h1>Timer</h1>
      <h1>{minute1}:{second1}</h1> */}
      {/* <button onClick={restart}>restart</button>
<button onClick={stop}>stop</button> */}

    </div>
  )
}

export default App
