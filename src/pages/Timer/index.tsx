import { useState, useEffect } from 'react';
import marioWinner from '../../assets/marioWinner.mp3'
import comecoufds from '../../assets/comecoufds.mp3'
import daledaleBackend from '../../assets/daledale-backend.mp3'
import quartou from '../../assets/quartou.mp3'
import segundaespecial from '../../assets/segundaespecial.mp3'
import tururu from '../../assets/tururu.mp3'
import tercou from '../../assets/tercou.mp3'

import Display from "../../components/Display";
import { Button } from '../../components/Button/button';
import { Input } from '../../components/Input/Input';

import styles from './Timer.module.css'

const timerInicial = {
  minutes: 0,
  seconds: 0
}

function Timer() {
  const [tempo, setTempo] = useState(timerInicial)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [running, setRunning] = useState(false)

  const audios = [marioWinner, comecoufds, daledaleBackend, quartou, segundaespecial, tururu, tercou]

  const play = () => {
    
    const random = Math.floor(Math.random() * 7)
    const audio = new Audio(audios[random])
    console.log(random)
    audio.play()
  }
  
  const changeTimer = (event: React.ChangeEvent<HTMLInputElement> ) => {
  
    if (event.target.placeholder === 'minutes') {
      if (parseInt(event.target.value) > 59) {
        setTempo({
          ...tempo,
          minutes: 59,
        })
      } else if (!parseInt(event.target.value)) {
        setTempo({
          ...tempo,
          minutes: 0,
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
      } else if (!parseInt(event.target.value)) {
        setTempo({
          ...tempo,
          seconds: 0,
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
        play()
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
          onClick={ activateTimer }
          disabled={ running }
          >
            Start
          </Button>
          <Button 
          onClick={ deactivateTimer }
          >
            Stop
          </Button>
          <Button 
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