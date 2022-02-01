import React from 'react'
import { useState, useEffect } from 'react';




const Timer = (props) => {
    const [time, setTime] = useState(0);

    useEffect(() => {

        let interval = null;
        interval = setInterval(() => {
            setTime((time) => time + 10);
        }, 10);
        return( )=>{
            setTime(0);
        };
    });

    return (
        <div className="stop-watch">
            <div className="timer">
                <span className="digits">
                    {("0" +Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}:
                </span>
                <span className="digits">
                    {("0" +Math.floor((time / 1000 / 60) % 60)).slice(-2)}.
                </span>
                <span className="digits mili-sec">
                    {("0" +Math.floor((time / 1000) % 60)).slice(-2)}
                </span>
            </div>
        </div>
    )
}

export default Timer;