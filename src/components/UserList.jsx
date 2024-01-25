import React, { useContext, useEffect, useState } from "react";
import { networkContext } from "../context/NetworkContextProvider";
import UserCard from "../components/UserCard";
import treeLeft from "../images/tree-left.png";
import treeRight from "../images/tree-right.png";
import gateLeft from "../images/gate-left.png";
import gateRight from "../images/gate-right.png";
import grass from "../images/grass.png";

const UserList = () => {
  const { getUsers, users } = useContext(networkContext);
  useEffect(() => {
    getUsers();
  }, []);
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <section className="parallax">
        <h2 id="text" style={{ marginBottom: scrollValue * 2 + "px" }}>
          <span>Hello</span>ween
        </h2>
        <img
          src={treeLeft}
          style={{ marginLeft: scrollValue * -1.5 + "px" }}
          alt=""
          id="tree-left"
        />
        <img
          src={treeRight}
          style={{ marginLeft: scrollValue * 1.5 + "px" }}
          alt=""
          id="tree-right"
        />
        <img
          src={gateLeft}
          style={{ marginLeft: scrollValue * 0.4 + "px" }}
          alt=""
          id="gate-left"
        />
        <img
          src={gateRight}
          style={{ marginLeft: scrollValue * -0.4 + "px" }}
          alt=""
          id="gate-right"
        />
        <img src={grass} alt="" id="grass" />
      </section>

      <section className="sec-users">
        <h2>
          Share you thougths and ideas with <span>Hello</span>ween
        </h2>
        <div className="list">
          {users.map((elem) => (
            <UserCard
              key={elem.id}
              name={elem.name}
              username={elem.username}
              email={elem.email}
              id={elem.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserList;
