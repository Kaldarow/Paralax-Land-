import axios from "axios";
import React, { createContext, useReducer } from "react";
import { Users, Posts } from "../helper/const";

export const networkContext = createContext();

const NetworkContextProvider = ({ children }) => {
  const INIT_STATE = {
    users: [],
    posts: [],
    user: {},
    post: {},
  };

  function reducer(state = INIT_STATE, action) {
    switch (action.type) {
      case "GET_USERS":
        return { ...state, users: action.payload };
      case "GET_ONE_USER":
        return { ...state, user: action.payload };
      case "GET_POSTS":
        return { ...state, posts: action.payload };
      case "GET_ONE_POST":
        return { ...state, post: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! GET USERS & POSTS
  async function getUsers() {
    const { data } = await axios(Users);
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  }

  async function getPosts() {
    const { data } = await axios(Posts);
    dispatch({
      type: "GET_POSTS",
      payload: data,
    });
  }

  //! GET ONE USER & GET ONE POST
  async function getOneUser(id) {
    const { data } = await axios(`${Users}/${id}`);
    dispatch({
      type: "GET_ONE_USER",
      payload: data,
    });
  }
  async function getOnePost(id) {
    const { data } = await axios(`${Posts}/?userId=${id}`);
    dispatch({
      type: "GET_ONE_POST",
      payload: data,
    });
  }

  const values = {
    users: state.users,
    user: state.user,
    posts: state.posts,
    post: state.post,
    getUsers,
    getOneUser,
    getPosts,
    getOnePost,
  };
  return (
    <networkContext.Provider value={values}>{children}</networkContext.Provider>
  );
};

export default NetworkContextProvider;
