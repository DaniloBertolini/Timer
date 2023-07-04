import styles from './Display.module.css'

type Type = {
  seconds: number,
  minutes: number,
}

function Display({ seconds, minutes}: Type) {

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
    </div>
  )
}

export default Display;