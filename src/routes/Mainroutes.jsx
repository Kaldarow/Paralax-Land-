import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import UserDetails from "../components/UserDetails";
import UserList from "../components/UserList";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/userDetails/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default Mainroutes;
