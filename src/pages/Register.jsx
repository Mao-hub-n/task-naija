import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const savedUser = localStorage.getItem("user");

    // No account exists
    if (!savedUser) {
      alert("No account found. Please create an account first.");
      return;
    }

    const user = JSON.parse(savedUser);

    // Check credentials
    if (
      email === user.email &&
      password === user.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-header">
          <p>WELCOME BACK</p>
          <h1>Login</h1>
          <span>
            Sign in to your Task Naija account.
          </span>
        </div>

        <form
          onSubmit={handleLogin}
          className="login-form"
        >
          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
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
            <Link to="/register">
              Create Account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;










































// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Button from "../components/Button";

// function Register() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   function handleChange(e) {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   }

//   function handleRegister(e) {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }

//     const user = {
//       name: form.name,
//       email: form.email,
//       password: form.password,
//     };

//     localStorage.setItem("user", JSON.stringify(user));
//     localStorage.setItem("isLoggedIn", "true");

//     navigate("/");
//   }

//   return (
//     <div className="auth-page">
//       <div className="auth-container">
//         <div className="auth-header">
//           <p>JOIN TASK NAIJA</p>
//           <h1>Create Account</h1>
//           <span>Start shopping with us.</span>
//         </div>

//         <form onSubmit={handleRegister} className="auth-form">
//           <input
//             name="name"
//             type="text"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             name="email"
//             type="email"
//             placeholder="Email Address"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />

//           <input
//             name="confirmPassword"
//             type="password"
//             placeholder="Confirm Password"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             required
//           />

//           <Button type="submit">
//             Create Account
//           </Button>
//         </form>

//         <p className="auth-bottom">
//           Already have an account?{" "}
//           <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;