import React, { useEffect, useState } from 'react';
import './card.css'

function UpdateDate() {
    const [timeString, setTimeString] = useState('');
    const [dayString, setDayString] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTimeString(now.toLocaleTimeString());
            setDayString(now.toDateString());
        };

        updateTime(); 
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="card-date">
            <div className="current-date">{dayString}</div>
            <div className="current-time">{timeString}</div>
        </div>
    );
}

export default UpdateDate;
