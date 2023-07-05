import { Span, DivDisplay } from './Display';

type Type = {
  seconds: number,
  minutes: number,
}

function Display({ seconds, minutes}: Type) {

  return (
    <DivDisplay>
      <Span>
        {!minutes && '00'}
        {(minutes < 10 && minutes > 0) && '0' + minutes}
        {minutes > 9 && minutes}
      </Span>

      <Span>
        :
      </Span>

      <Span>
        {!seconds && '00'}
        {(seconds < 10 && seconds > 0) && '0' + seconds}
        {seconds > 9 && seconds}
      </Span>
    </DivDisplay>
  )
}

export default Display;