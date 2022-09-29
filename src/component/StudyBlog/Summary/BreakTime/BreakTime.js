import React from 'react';
import '../Summary.css';

const BreakTime = (props) => {
    const {handleAddBreakTime}=props;

    const {time}=props.breakTime;
    return (
        <div className='all-break-time'>
            <button className='break-time' onClick={()=>handleAddBreakTime(time)} >{time}</button>
        </div>
    );
};

export default BreakTime;