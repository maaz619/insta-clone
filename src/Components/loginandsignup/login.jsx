import React, { useEffect, useState } from "react";
import Spinner from "react-spinkit";
import "./login.css";
import { auth } from "../../firebase";
import { isLogIn, setCredentials } from "../../store/actions/loginAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = ({ mainuser, email, password, setCredentials }) => {
  const history = useHistory();
  const [isLoaded, setLoad] = useState(false);
  // useEffect(() => {
  //   if (mainuser) {
  //   }
  // }, [setLoad]);
  const handleChange = (e) => {
    setCredentials(e.currentTarget.name, e.currentTarget.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(!isLoaded);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (e) {
      setLoad(isLoaded);
    }
  };

  return (
    <div className="signup__container">
      <h2 className="">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
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
            value={password}
            onChange={handleChange}
          />
          <div className="button">
            {!isLoaded && (
              <button className="btn btn-primary">
                {!isLoaded && <span>Login</span>}
              </button>
            )}
            {isLoaded && (
              <Spinner
                name="ball-clip-rotate"
                color="green"
                fadeIn="none"
                style={{ height: "1px" }}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { email, password, mainuser } = state.login;
  return {
    email,
    password,
    mainuser,
  };
};

const mapDispatchToProps = { isLogIn, setCredentials };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
