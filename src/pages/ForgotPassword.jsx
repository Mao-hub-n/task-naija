import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        {!sent ? (
          <>
            <div className="auth-header">
              <p>ACCOUNT RECOVERY</p>
              <h1>Forgot Password?</h1>
              <span>
                Enter your email to reset your password.
              </span>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button type="submit">
                Reset Password
              </Button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h1>Check Your Email 📩</h1>
            <p>
              If an account exists for {email}, a reset link
              would be sent.
            </p>
          </div>
        )}

        <p className="auth-bottom">
          <Link to="/login">← Back to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;