import React from 'react';

import Book from '../Book/Book';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        padding: '20px',
        justifyContent: 'space-between'
    }
    const riders =[
        {
            title: 'Bike',
            imgUrl: 'https://i.ibb.co/z74tsHj/Frame.png',
            seat: 1,
            price: 50
       },
       {
        title: 'Car',
        imgUrl: 'https://i.ibb.co/ZNHD7SH/Frame-2.png',
        seat: 1,
        price: 50
   },
   {
    title: 'Bus',
    imgUrl: 'https://i.ibb.co/4gJzh0H/Frame-1.png',
    seat: 20,
    price: 30
},
{
    title: 'AC-Bus',
    imgUrl: 'https://i.ibb.co/527rVj0/Group.png',
    seat: 10,
    price: 100
},



]
    return (
        <div style={style} >
           
        {
            riders.map(ride => <Book ride={ride}></Book>)
        }

        </div>
    );
};

export default Home;