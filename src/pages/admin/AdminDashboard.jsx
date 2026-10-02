import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const isAdmin =
    localStorage.getItem("isAdmin") === "true";

  if (!isAdmin) {
    navigate("/admin/login");
    return null;
  }

  function logout() {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  }

  const products =
    JSON.parse(localStorage.getItem("products")) || [];

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="admin-page">

      <aside className="admin-sidebar">
        <h2>Task Naija</h2>

        <p>ADMIN PANEL</p>

        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/users">Customers</Link>

        <button onClick={logout}>
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <div className="admin-heading">
          <p>COMMAND CENTER</p>
          <h1>Dashboard</h1>
        </div>

        <div className="admin-stats">
          <div className="admin-stat">
            <span>📦</span>
            <h2>{products.length}</h2>
            <p>Products</p>
          </div>

          <div className="admin-stat">
            <span>🛒</span>
            <h2>{orders.length}</h2>
            <p>Orders</p>
          </div>

          <div className="admin-stat">
            <span>👥</span>
            <h2>0</h2>
            <p>Customers</p>
          </div>

          <div className="admin-stat">
            <span>💰</span>
            <h2>
              $
              {orders.reduce(
                (total, order) =>
                  total + Number(order.total || 0),
                0
              )}
            </h2>
            <p>Revenue</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;





















// import { useNavigate } from "react-router-dom";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const isAdmin = localStorage.getItem("isAdmin");

//   if (isAdmin !== "true") {
//     navigate("/login");
//     return null;
//   }

//   function logout() {
//     localStorage.removeItem("isAdmin");
//     navigate("/login");
//   }

//   return (
//     <div className="admin-dashboard">
//       <div className="admin-header">
//         <div>
//           <p>ADMIN PANEL</p>
//           <h1>Task Naija Dashboard</h1>
//         </div>

//         <button onClick={logout}>
//           Logout
//         </button>
//       </div>

//       <div className="admin-cards">
//         <div className="admin-card">
//           <span>📦</span>
//           <h2>Products</h2>
//           <p>Manage your products.</p>
//         </div>

//         <div className="admin-card">
//           <span>🛒</span>
//           <h2>Orders</h2>
//           <p>View customer orders.</p>
//         </div>

//         <div className="admin-card">
//           <span>👥</span>
//           <h2>Users</h2>
//           <p>Manage customers.</p>
//         </div>

//         <div className="admin-card">
//           <span>💰</span>
//           <h2>Revenue</h2>
//           <p>View sales information.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;