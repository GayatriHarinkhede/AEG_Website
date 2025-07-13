import React, { useState, useEffect } from 'react';
import './Counter.css'

const Counters = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const incrementTime = (duration / end) * 1000;
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}</span>;
};

const Counter = () => {
    return (
        <div className="about-section">


            <div className="stats ">
                <div className="stat-item ">
                    <div className="icon"><i className="fas fa-users"></i></div>
                    <Counters end={1234} duration={3} /> {/* 3 seconds duration for counting */}
                    <p className='tex1'>Happy Clients</p>
                </div>
                <div className="stat-item">
                    <div className="icon"><i className="fas fa-box"></i></div>
                    <Counters end={1234} duration={3} />
                    <p className='text2'>Products Supplied</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
