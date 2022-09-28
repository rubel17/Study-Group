import './Cart.css'



const Cart = ({cart}) => {
    const { img, name, time} =cart;
    console.log(cart);
    return (
        <div>
            
             <div class="card">
                <img src={img} class="card-img-top w-100 h-75" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6>Time required : {time}</h6>
                    <button className='btn btn-primary w-100'>Add To List</button>
                
            </div>
            </div>
        </div>
    );
};

export default Cart;