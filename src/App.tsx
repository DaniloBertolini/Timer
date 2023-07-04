import { useState, useEffect } from 'react';
// import * as NodeJS from 'node:types';

import Title from "./components/Title";
import Display from "./components/Display";
import Button from "./components/Button";
import Input from "./components/Input";

import styles from './App.module.css'
import GlobalStyle from './styles/globalReset';

const timerInicial = {
  minutes: 0,
  seconds: 0
}

function App() {
    const [tempo, setTempo] = useState(timerInicial)
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [running, setRunning] = useState(false)

    const changeTimer = (event: React.ChangeEvent<HTMLInputElement> ) => {

      if (event.target.placeholder === 'minutes') {
        if (parseInt(event.target.value) > 12) {
          setTempo({
            ...tempo,
            minutes: 12,
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

      // const verifyTimer = () => {
      //   if (tempo.minutes > 12) {
      //     setTempo({
      //       ...tempo,
      //       minutes: 12
      //     })
      //   }
      // }

      // verifyTimer()
    }, [tempo, intervalId])

  return (
    <>
      <GlobalStyle />
      <Title title={ 'Timer' } />
      <div className={ styles.containerDisplay }>
        <Display minutes={ tempo.minutes } seconds={ tempo.seconds } />
      </div>

      <div className={ styles.containerButton }>
          <Button 
          text='Start'
          onClick={ activateTimer }
          />
            <Button 
            text='Stop'
            onClick={ deactivateTimer }
            />
            <Button 
            text='Reset'
            onClick={ resetTimer }
            />
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

export default App
