import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import img from '../../images/Map.png'
const Destination = () => {
    const [date, setDate]= useState()
    const [EndDate, setEndDate]= useState()
    return (
        <div>
            <div>
            <button  className='bg-primary m-5'>Start Date</button>
            <DatePicker
            selected={date} onChange={date=> setDate (date)}
            
            />
            <button className="bg-primary m-5"> End Date </button>
            <DatePicker
            selected={EndDate} onChange={EndDate=> setEndDate (EndDate)}
            
            />
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Destination;