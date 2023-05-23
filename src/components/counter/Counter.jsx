import { useState } from "react"
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter() {

    const [count, setCount] = useState(0)

    function decrementCounterfunction(by) {
        setCount(count - by)
    }

    function incrementCounterfunction(by) {
        setCount(count + by)
    }

    function resetCount() {
        setCount(0)

    }


    return (
        <>
            <span className="count">{count}</span>
            <CounterButton by={1} incrementfunction={incrementCounterfunction} decrmentfunction={decrementCounterfunction} />
            <CounterButton by={2} incrementfunction={incrementCounterfunction} decrmentfunction={decrementCounterfunction} />
            <CounterButton by={3} incremsentfunction={incrementCounterfunction} decrmentfunction={decrementCounterfunction} />
            <button className="ResetButton" onClick={resetCount}>Reset</button>
        </>
    )
}


