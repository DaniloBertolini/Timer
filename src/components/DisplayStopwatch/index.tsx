import styles from './DisplayStopwatch.module.css'

type Type = {
  minutes: number,
  seconds: number,
  miliseconds: number,
}

function DisplayStopwatch({ minutes, seconds, miliseconds }: Type) {

  return (
    <div className={ styles.display }>
      <div className={ styles.timer }>
        <span className={ styles.minutes }>
          {!minutes && '00'}
          {(minutes < 10 && minutes > 0) && '0' + minutes}
          {minutes > 9 && minutes}
        </span>
      </div>
      <span className={ styles.twoPoints }>:</span>
      <div className={ styles.timer }>
        <span className={ styles.seconds }>
          {!seconds && '00'}
          {(seconds < 10 && seconds > 0) && '0' + seconds}
          {seconds > 9 && seconds}
        </span>
      </div>
      <span className={ styles.twoPoints }>:</span>
      <div className={ styles.timer }>
        <span className={ styles.miliseconds }>
          {!miliseconds && '00'}
          {(miliseconds < 10 && miliseconds > 0) && '0' + miliseconds}
          {miliseconds > 9 && miliseconds}
        </span>
      </div>
    </div>
  )
}

export default DisplayStopwatch;