import { Link } from "react-router-dom";
import { useState } from "react";

function Checkout ({cart, setCart}) {
    const [ordered, setOrdered] = useState(false);

    const total = cart.reduce(
        (sum, product) => 
            sum + product.price * product.quantity,
        0
    );

    function handleOrder(e){
        e.preventDefault();
         
        const form = e.target;
        const newOrder ={
            id: Date.now(),

            customer:{
                name: form[0].value,
                email: form[1].value,
                phone: form[2].value,
                address: form[3].value,
            },

            items: cart,
            total: total,
            status: "Processing",
        };
        const existingOrders = 
        JSON.parse(localStorage.getItem("orders")) ||
        [];

        localStorage.setItem(
            "orders",
            JSON.stringify([
                ...existingOrders,
                newOrder,
            ])
        );

        setCart([]);

        setOrdered(true);
    }

    
    if (cart.length === 0) {
        return(
            <div className="order-success">
                <h1>Your Cart is Empty 🛒</h1>

                <p>Add some products before checking out.</p>

                <Link to="/">Start Shopping</Link>
            </div>
        );
    }

    if (ordered) {
        return (
            <div className="order-success">
                <h1>Order Placed! 🎉</h1>
                <p>
                    Thanks for your patronage.
                </p>
                <p>
                    Your total was <strong>${total}</strong>.
                </p>

                <Link to="/">Continue to Shop</Link>
            </div>
        )
    }


    return(
        <div className="checkout-page">
            <h1>Checkout</h1>
            <div className="checkout-container">
                
            
                    <form action="" className="checkout-form" onSubmit={handleOrder}>
                    <h2>Customer Information</h2>

                    <input type="text" placeholder="Fullname" required/>
                    <input type="email" placeholder="Email Address" required/>
                    <input type="text" placeholder="Phone Number" required/>
                    <input type="text" placeholder="Delivery Address" required/>

                    <button>Place Order</button>
                    </form>
                

                <div className="checkout-summary">
                    <h2>Order Summary</h2>

                    {cart.map((product) => (
                        <div className="checkout-item"
                        key={product.id}>
                            <span>{product.name} × {product.quantity}</span>
                            <span>${product.price * product.quantity}</span>
                        </div>
                    ))}
                    <hr />

                    <h2>Total: ${total}</h2>   
                </div>
            </div>

            <Link to="/">Continue to Shop</Link>
        </div>
    );
}

export default Checkout