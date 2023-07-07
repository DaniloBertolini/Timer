import { useState, useEffect } from 'react';

import Display from "../../components/Display";
import { Button } from '../../components/Button/button';
import Input from "../../components/Input";

import styles from './Timer.module.css'

const timerInicial = {
  minutes: 0,
  seconds: 0
}

function Timer() {
  const [tempo, setTempo] = useState(timerInicial)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [running, setRunning] = useState(false)
  
  const changeTimer = (event: React.ChangeEvent<HTMLInputElement> ) => {
  
    if (event.target.placeholder === 'minutes') {
      if (parseInt(event.target.value) > 59) {
        setTempo({
          ...tempo,
          minutes: 59,
        })
      } else {
        setTempo({
          ...tempo,
          minutes: parseInt(event.target.value)
        })  
      }
    } else if (event.target.placeholder === 'seconds') {
      if (parseInt(event.target.value) > 60) {
        setTempo({
          ...tempo,
          seconds: 59,
        })
      } else {
        setTempo({
          ...tempo,
          seconds: parseInt(event.target.value)
        })
      }
    }
  }
  
  const activateTimer = () => {
    const on = setInterval(() => {        
      setTempo((prevTimer) => ({
        ...prevTimer,
        seconds: prevTimer.seconds - 1,
      }))
    }, 1000)
  
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
    setRunning(false)
  }
  
  useEffect(() => {
    if (intervalId) {
      if (tempo.seconds === -1) {
        setTempo((prevTimer) => ({
          ...prevTimer,
          minutes: prevTimer.minutes - 1,
          seconds: 59,
        }))
      }
      if (tempo.minutes === 0 && tempo.seconds === 0) {
        clearInterval(intervalId)
        setIntervalId(null)
        setRunning(false)
      }
    }
  }, [tempo, intervalId])
  return (
      <>
        <div className={ styles.containerDisplay }>
          <Display minutes={ tempo.minutes } seconds={ tempo.seconds } />
        </div>

        <div className={ styles.containerButton }>
          <Button 
          // text='Start'
          onClick={ activateTimer }
          disabled={ running }
          >
            Start
          </Button>
          <Button 
          // text='Stop'
          onClick={ deactivateTimer }
          >
            Stop
          </Button>
          <Button 
          // text='Reset'
          onClick={ resetTimer }
          >
            Reset
          </Button>
        </div>

        <div className={ styles.containerInput }>
          {!running && (
            <>
              <Input 
              placeholder='minutes'
              onChange={ (event: React.ChangeEvent<HTMLInputElement>) => changeTimer(event) }
              />
              <Input 
              placeholder='seconds'
              onChange={ (event: React.ChangeEvent<HTMLInputElement>) => changeTimer(event) }
              />
            </>
          )}
        </div>
      </>
  )
}

export default Timer