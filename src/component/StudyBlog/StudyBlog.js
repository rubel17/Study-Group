import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookReader} from '@fortawesome/free-solid-svg-icons';
import './StudyBlog.css';

import Cart from './Cart/Cart';
import Summary from './Summary/Summary';

const StudyBlog = () => {
    const[carts, setCarts]=useState([]);

    useEffect(()=>{
        fetch('active.json')
        .then(res =>res.json())
        .then(data=>setCarts(data))
    },[]);
    return (
        <div className="study-blog">
           <div>
            <h3 className='blog-name text-primary'><FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon> Student Study Active</h3>
           <div  className="card-container">
              {
                    carts.map(cart=> <Cart key={cart.id} cart={cart} ></Cart>)
                }
             
            </div>
           </div>
            <div className="summary-container">
             
           <Summary></Summary>
            </div>
        </div>
    );
};

export default StudyBlog;