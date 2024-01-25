import React from "react";
import { NavLink } from "react-router-dom";

const UserCard = (props) => {
  return (
    <div class="user-card">
      <h2 class="user-name">
        <NavLink to={`/userDetails/${props.id}`}>{props.name}</NavLink>
      </h2>
      <p class="user-username">Username: {props.username}</p>
      <p class="user-email">Email: {props.email}</p>
    </div>
  );
};

export default UserCard;
