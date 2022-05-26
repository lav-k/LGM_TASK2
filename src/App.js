import React, { useState } from "react";
import Cards from "./components/cards";
import {Loader} from "./components/loader.jsx";
import "./App.css";

function App() {
  const [isUser, setUser] = useState([]);
  const [isData, setData] = useState(false);
  const [isButton, setButton] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setButton(true);
    fetch("https://reqres.in/api/users?page=1")
      .then(res => res.json())
      .then(res => {
        setUser(res.data);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
        setTimeout(() => {
          setLoading(false);
          setData(true);
        }, 2000);
      })
      .catch((err) => {
        console.log("Could not get data from API -- ", err);
      });
  };

  return (
    <div className="maindiv">
      <div className="navbar">
        <h1> User Info </h1>
        <button href="#getusers" className="btn btn-warning" onClick={handleClick}>
          Get Users
        </button>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {
            isLoading && (
              <Loader/>
            )
          }
          {
            !isLoading && isData && (
              <Cards isUser = {isUser}/>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
