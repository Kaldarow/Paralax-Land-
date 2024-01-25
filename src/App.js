import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <Navbar />
      <Mainroutes />
      <Layout />
    </div>
  );
};

export default App;
