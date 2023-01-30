import "./register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <div className="registerForm">
        <form className="registerForm" action="">
          <label htmlFor="userInput">Username</label>
          <input
            id="userInput"
            className="registerInput"
            type="text"
            placeholder="Write name"
          />
          <label htmlFor="emailinput">Email</label>
          <input
            id="emailinput"
            className="registerInput"
            type="email"
            placeholder="Write name"
          />
          <label htmlFor="passinput">Password</label>
          <input
            id="passinput"
            className="registerInput"
            type="password"
            placeholder="Write name"
          />
          <button className="registerPageBtn">Register</button>
        </form>
        <button className="registerPageLoginButton">Login</button>
      </div>
    </div>
  );
}

export default Register;
