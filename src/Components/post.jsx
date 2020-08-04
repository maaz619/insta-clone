import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./post.css";

const Post = ({ username, caption, imageURL }) => {
  return (
    <div className="post__container">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h6>{username}</h6>
      </div>
      <img className="post__image" src={imageURL} alt="img" />
      <h6 className="post__text">
        <strong>{username}</strong>:{caption}
      </h6>
    </div>
  );
};
export default Post;
