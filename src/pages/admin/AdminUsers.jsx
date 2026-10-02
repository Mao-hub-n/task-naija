function AdminUsers() {
  const user =
    JSON.parse(localStorage.getItem("user"));

  return (
    <div className="admin-content">
      <h1>Customers</h1>

      {!user ? (
        <p>No customers registered yet.</p>
      ) : (
        <div className="admin-user">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default AdminUsers;