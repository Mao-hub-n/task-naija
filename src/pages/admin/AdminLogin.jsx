import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (
      email === "admin@tasknaija.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Invalid admin credentials.");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <p>ADMINISTRATION</p>
          <h1>Admin Login</h1>
        </div>

        <form
          onSubmit={handleLogin}
          className="auth-form"
        >
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit">
            Enter Dashboard
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;