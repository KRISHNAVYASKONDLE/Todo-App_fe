// import { useState } from "react"
import './CounterButton.css'
import { PropTypes } from 'prop-types'

export default function CounterButton({ by, incrementfunction, decrmentfunction }) {




    return (
        <div className="buttonbox">
            <button className="counterButton" onClick={() => incrementfunction(by)}>+{by}</button>
            <button className="counterButton" onClick={() => decrmentfunction(by)}>-{by}</button>
        </div>

    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}