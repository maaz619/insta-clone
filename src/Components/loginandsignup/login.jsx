import React, { useEffect } from "react";
import { Spinner } from "react-spinkit";
import "./login.css";
import { auth } from "../../firebase";
import {
  loaded,
  isLogIn,
  setCredentials,
} from "../../store/actions/loginAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = ({
  mainuser,
  isLoaded,
  loaded,
  email,
  password,
  isLogIn,
  setCredentials,
}) => {
  const history = useHistory();
  useEffect(() => {
    loaded(isLoaded);
  }, [loaded]);
  const handleChange = (e) => {
    setCredentials(e.currentTarget.name, e.currentTarget.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(isLoaded);

      isLogIn(await auth.signInWithEmailAndPassword(email, password));
      history.push("/");
      loaded(true);
      console.log(isLoaded);
    } catch (e) {
      alert(e.message);
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
            <button className="btn btn-primary ">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { isLoaded, email, password, mainuser } = state.login;
  return {
    email,
    password,
    mainuser,
    isLoaded,
  };
};

const mapDispatchToProps = { isLogIn, setCredentials, loaded };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
