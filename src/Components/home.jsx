import React, { useEffect } from "react";
import "./home.css";
import Post from "./post";
import "./header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadPost } from "../store/actions/homeAction";
import {
  isLogIn,
  isLogOut,
  setUserName,
  loaded,
} from "../store/actions/loginAction";

import { db } from "../firebase";
import { auth } from "../firebase";

const Home = ({
  mainuser,
  setUserName,
  isLogIn,
  isLogOut,
  loadPost,
  post,
  username,
  loaded,
  isLoaded,
}) => {
  useEffect(() => {
    db.collection("post").onSnapshot((snapshot) => {
      loadPost(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        isLogIn(authUser);
        setUserName(authUser.displayName);
        loaded(true);
      } else {
        console.log("Logged Out");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [loadPost, isLogIn, setUserName]);
  const handleLogOut = () => {
    auth.signOut();
    isLogOut(null);
    loaded(false);
  };
  return (
    <div className="home">
      <div className="header__container">
        <img
          className="header__image"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram"
        />
        {mainuser ? (
          <Link className="link" to="/login">
            <h6 onClick={handleLogOut}>Logout</h6>
          </Link>
        ) : (
          <Link className="link" to="/signup">
            <h6>Login or Signup</h6>
          </Link>
        )}
      </div>
      {post.map(({ post, id }) => (
        <Post
          key={id}
          username={username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { post } = state.home;
  const { mainuser, username, isLoaded } = state.login;
  return {
    post,
    mainuser,
    username,
    isLoaded,
  };
};

const mapDispatchToProps = { loadPost, isLogIn, isLogOut, setUserName, loaded };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
