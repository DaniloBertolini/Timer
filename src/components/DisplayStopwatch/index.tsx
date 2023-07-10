import { DivDisplayStop, Span, SpanTwo } from './DisplayStop';

type Type = {
  minutes: number,
  seconds: number,
  miliseconds: number,
}

function DisplayStopwatch({ minutes, seconds, miliseconds }: Type) {

  return (
    <DivDisplayStop>
      <Span>
        {!minutes && '00'}
        {(minutes < 10 && minutes > 0) && '0' + minutes}
        {minutes > 9 && minutes}
      </Span>

      <SpanTwo>
        :
      </SpanTwo>

      <Span>
        {!seconds && '00'}
        {(seconds < 10 && seconds > 0) && '0' + seconds}
        {seconds > 9 && seconds}
      </Span>

      <SpanTwo>
        :
      </SpanTwo>

      <Span>
        {!miliseconds && '00'}
        {(miliseconds < 10 && miliseconds > 0) && '0' + miliseconds}
        {miliseconds > 9 && miliseconds}
      </Span>
    </DivDisplayStop>
  )
}

export default DisplayStopwatch;