import { Link, useParams } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const order = orders.find(
    (order) => order.id.toString() === id
  );

  if (!order) {
    return (
      <div className="order-success">
        <h1>Order Not Found</h1>

        <p>
          We couldn't find this order.
        </p>

        <Link to="/orders">
          Back to Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1>Order Details</h1>

      <div className="order-card">
        <h2>Order #{order.id}</h2>

       <div className="order-status">
  <h3>Order Status</h3>

  <div className="status-step">
    <span>✓</span>
    <p>Order Placed</p>
  </div>

  <div className="status-step">
    <span>
      {order.status === "Processing" ||
      order.status === "Shipped" ||
      order.status === "Delivered"
        ? "✓"
        : "○"}
    </span>
    <p>Processing</p>
  </div>

  <div className="status-step">
    <span>
      {order.status === "Shipped" ||
      order.status === "Delivered"
        ? "✓"
        : "○"}
    </span>
    <p>Shipped</p>
  </div>

  <div className="status-step">
    <span>
      {order.status === "Delivered"
        ? "✓"
        : "○"}
    </span>
    <p>Delivered</p>
  </div>
</div>
        <div className="order-customer">
            <h3>Customer Information</h3>
            <p>
                <strong>Name: </strong>{""}
                {order.customer.name}
            </p>

             <p>
                <strong>Email: </strong>{""}
                {order.customer.email}
            </p>

             <p>
                <strong>Phone: </strong>{""}
                {order.customer.phone}
            </p>

             <p>
                <strong>Address: </strong>{""}
                {order.customer.address}
            </p>
        </div>

        <h3>Items</h3>

        {order.items.map((product) => (
          <div
            className="order-item"
            key={product.id}
          >
            <span>
              {product.name} × {product.quantity}
            </span>

            <span>
              ${product.price * product.quantity}
            </span>
          </div>
        ))}

        <hr />

        <h2>
          Total: ${order.total}
        </h2>

        <Link to="/orders">
          ← Back to Orders
        </Link>
      </div>
    </div>
  );
}

export default OrderDetails;