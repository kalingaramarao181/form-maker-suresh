import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import Cookies from 'js-cookie'


const Login = (props) => {

  const { history } = props; //props are useed to redirect multipul pages it comes into browserrouterdom

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submithandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/Login-login", {...data })
      .then((res) => {
        if (res.data)
         {
          history.push("/");
          Cookies.set("lock",`${data.username}`,{expires:30})
          console.log(res.data);
        } 
        //console.log("successfull")
        else {
          alert("wront password or username");
        }

      })
      .catch((err) => console.log(err));

 setData({
  username: "",
  password: "",
 })
  };
  return (
    <>
      <div className="admin-main-container">
        <h1 className="main-heading">ADMIN PANNEL</h1>

        <form className="admin-container" onSubmit={submithandler}>
          <h1 className="admin-login-heading">Admin Login</h1>
          <label className="admin-labels">UserName</label>
          <input
            type="text"
            className="admin-input"
            placeholder="Enter Your UserName"
            name="username"
            value={username}
            onChange={changehandler}
            required
          />
          <label className="admin-labels">Password</label>
          <input
            type="password"
            className="admin-input"
            placeholder="Enter Your Password"
            name="password"
            value={password}
            onChange={changehandler}
            required
          />
          <input type="submit" className="admin-submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
