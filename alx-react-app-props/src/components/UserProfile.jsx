import React from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
function UserProfile() {
  const { name, email } = useContext(UserContext);
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;