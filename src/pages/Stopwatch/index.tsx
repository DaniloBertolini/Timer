import { useEffect, useState } from "react";
import Button from "../../components/Button"

import styles from './Stopwatch.module.css'
import DisplayStopwatch from "../../components/DisplayStopwatch";

const timerInicial = {
  minutes: 0,
  seconds: 0,
  miliseconds: 0
}

function Stopwatch() {
  const [tempo, setTempo] = useState(timerInicial)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [running, setRunning] = useState(false)

  const activateTimer = () => {
    const on = setInterval(() => {        
      setTempo((prevTimer) => ({
        ...prevTimer,
        miliseconds: prevTimer.miliseconds + 1,
      }))
    }, 10)

    setRunning(true)
    setIntervalId(on)
  }

  const deactivateTimer = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
    setRunning(false)
  }

  const resetTimer = () => {
    setTempo(timerInicial)
    if (intervalId) clearInterval(intervalId)
    setRunning(false)
  }

  useEffect(() => {
    if (intervalId) {
      if (tempo.miliseconds > 99) {
        setTempo({
          ...tempo,
          seconds: tempo.seconds + 1,
          miliseconds: 0,
        })
      }
      if (tempo.seconds > 59) {
        setTempo({
          ...tempo,
          minutes: tempo.minutes + 1,
          seconds: 0,
        })
      }
    }
  }, [tempo, intervalId])

  return (
    <>
    <div className={ styles.containerDisplay }>
      <DisplayStopwatch
        minutes={ tempo.minutes }
        seconds={ tempo.seconds }
        miliseconds={ tempo.miliseconds }  
      />
    </div>
    <div className={ styles.containerButton }>
      {!running ? (
        <Button 
        text='Start'
        onClick={ activateTimer }
        />
      ) : (
        <Button 
        text='Stop'
        onClick={ deactivateTimer }
        />
      )}
      <Button 
      text='Reset'
      onClick={ resetTimer }
      />
      </div>
      </>
    )
}

export default Stopwatch