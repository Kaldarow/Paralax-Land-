import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { networkContext } from "../context/NetworkContextProvider";
import treeLeft from "../images/tree-left.png";
import treeRight from "../images/tree-right.png";
import gateLeft from "../images/gate-left.png";
import gateRight from "../images/gate-right.png";
import grass from "../images/grass.png";

const UserDetails = () => {
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
  const { id } = useParams();
  const { getOneUser, user, getPosts, getOnePost, post } =
    useContext(networkContext);

  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    getOneUser(id);
    getOnePost(id);
  }, [id]);
  return (
    <>
      <div>
        <section className="parallax">
          <h2 id="text" style={{ marginBottom: scrollValue * 2.5 + "px" }}>
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

        <section className="sec-details">
          <h2>
            Share you thougths and ideas with <span>Hello</span>ween
          </h2>
          <div className="list">
            <div class="user-card">
              <h3 class="user-name">{user.name}</h3>
              <p class="user-username">Username: {user.username}</p>
              <p class="user-email">Email: {user.email}</p>
            </div>
          </div>
          <div className="post-list">
            {Array.isArray(post) &&
              post.map((elem) => (
                <div className="post-card" key={elem.id}>
                  <h2 className="post-title">{elem.title}</h2>
                  <p className="post-body">{elem.body}</p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default UserDetails;
