import React from 'react';
import { Link } from 'react-router-dom';
const Book = (props) => {
    const {title,seat,imgUrl,price} = props.ride;
    return (
        <div>
            <img style={{width:'200px'}} className="img-fluid " src={imgUrl} alt="" />
            <h1> {title}</h1>
            <h5> Seat Capacity <span style={{color:'red'}}>{seat}</span></h5>
            <h6>Price {price}</h6>
            <Link to="/destination"> Hire</Link>
        </div>
    );
};

export default Book;