import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Temporary frontend login
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-header">
          <p>WELCOME BACK</p>
          <h1>Login</h1>
          <span>Sign in to your Task Naija account.</span>
        </div>

        <form onSubmit={handleLogin} className="login-form">

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <Link to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <Button type="submit">
            Login
          </Button>

        </form>

        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/register">Create Account</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;


































































// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// function Login(){
//     const navigate = useNavigate();

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     function handleLogin(e) {
//         e.preventDefault();
//         if (email === "admin@tasknaija.com" && password === "eikan!@#"){
//             localStorage.setItem("isAdmin", "true");
//             navigate("/admin")
//         }else{
//             alert("Invalid Input");
//         }
//     }

//     return (
//         <div className="login-page">
//             <form action="" onSubmit={handleLogin} className="login-form">
//                 <h1>Admin Log</h1>
//                 <p>Sign in to access the dashboard.</p>
//                 <input type="email" 
//                 placeholder="Email Address"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required/>
//                 <input type="password" 
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required/>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// }

// export default Login;