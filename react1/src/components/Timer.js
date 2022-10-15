import { useState } from "react"

const Timer = () => {
    let [ counter, setCounter ] = useState(0)
    let minutes = 0, hours = 0
  
    setTimeout(
      () => setCounter(counter + 1),
      1000
    )
  
    //console.log('rendering...', counter)
    if (counter >= 60) {
        ++minutes
        counter= 0
    }
    else if (minutes >= 60) {
        minutes = 0
        ++hours
    }
  
    return (
      <div>Time spent in here together: {hours}h {minutes}min {counter}s</div>
    )
  }

export default Timer