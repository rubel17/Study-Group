import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookReader} from '@fortawesome/free-solid-svg-icons';
import './StudyBlog.css';
import Cart from './Cart/Cart';
import Summary from './Summary/Summary';

//main body component(two part)
const StudyBlog = () => {
    const[carts, setCarts]=useState([]);
    const [studyTime, setStudyTime]=useState(0);

//cart data loaded
    useEffect(()=>{
        fetch('active.json')
        .then(res =>res.json())
        .then(data=>setCarts(data))
    },[]);

//cart button handle
    const handleAddToCart =(cart) =>{
        const newStudyTime =studyTime + cart.time;
        setStudyTime(newStudyTime);
    }
    return (
        <div className="study-blog">
           <div>
            <h3 className='blog-name text-primary'><FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon> Student Study Active</h3>
           <div  className="card-container">
              {
                    carts.map(cart=> <Cart 
                        key={cart.id}
                         cart={cart} 
                         handleAddToCart ={handleAddToCart}
                         ></Cart>)
                }
             
            </div>
           </div>
            <div className="summary-container">
             
           <Summary studyTime={studyTime}></Summary>
            </div>
        </div>
    );
};

export default StudyBlog;