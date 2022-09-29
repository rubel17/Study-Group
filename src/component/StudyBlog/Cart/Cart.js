import React from 'react';
import './Cart.css'



const Cart = ({cart,handleAddToCart}) => {
    const { img, name, time} =cart;

    return (
        <div>
            
             <div className="card">
                <img src={img} className="card-img-top w-100 h-75" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Time required : {time}s</h6>
                    <button onClick={()=>handleAddToCart(cart)} className='btn btn-primary w-100'>Add To List</button>
                
            </div>
            </div>
        </div>
    );
};

export default Cart;