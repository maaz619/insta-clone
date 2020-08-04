import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { auth } from "../../firebase";

const SignUp = () => {
  const [state, setState] = useState({ username: "", password: "", email: "" });
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [state.username, user]);

  const handleChange = (e) => {
    let currentState = { ...state };
    currentState[e.currentTarget.name] = e.currentTarget.value;
    setState(currentState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(state.email, state.password)
      .then((authUser) => {
        return authUser.user.updateProfile({ displayName: state.username });
      })
      .catch((error) => alert(error.message));
    auth.signOut();
  };
  return (
    <div className="signup__container">
      <h2 className="">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <div className="button">
            <button className="btn btn-primary ">Sign Up</button>
          </div>
        </div>
      </form>
      <p>
        Already a member?{" "}
        <Link className="link" to="/Login">
          <strong>Login</strong>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
