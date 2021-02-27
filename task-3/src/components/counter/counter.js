import React from 'react';
import './counter.css';

const Counter = ({counter}) => {
    return (
        <div className="counter">is checked:<span>{counter}</span></div>
    )
}

export default Counter;