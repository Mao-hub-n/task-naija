function AdminOrders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="admin-content">
      <h1>Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div className="admin-order" key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>Total: ${order.total}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;