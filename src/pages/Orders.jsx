import {Link} from "react-router-dom";

function Orders() {
    const orders = 
    JSON.parse(localStorage.getItem("orders")) || [];

    return (
        <div className="orders-page">
            <h1>My Orders</h1>

            {orders.length ===0 ? (
                <div>
                    <p>You haven't placed any order yet!</p>
                    <Link to="/">Start Shopping</Link>
                </div>
            ):(
                orders.map((order) => (
                    <div className="order-card" key={order.id}>
                        <h2>
                            Order #{order.id}
                        </h2>
                       
                        <p>
                            Status: {order.status}
                        </p>

                        <h3>Items</h3>
                        {order.items.map((product) => (
                            <div className="order-item" key={product.id}>
                                <span>{product.name} × {product.quantity}</span>
                                <span>${product.price * product.quantity}</span>
                            </div>
                        ))}
                        <hr />
                        <h3>
                            Total: ${order.total}
                        </h3>

                        <Link to={`/orders/${order.id}`}>View Order</Link>
                    </div>
                ))
            )}
        </div>
    );
}

export default Orders;