import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginForm">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="email"
            placeholder="type your email"
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="type your password"
          />
          <button className="loginBtn">Login</button>
        </form>
        <button className="registerBtn">Register</button>
      </div>
    </div>
  );
}

export default Login;
