import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const { token, setToken } = useContext(userContext);
  const [dataPost, setDataPost] = useState([]);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  useEffect(() => {
    const getAuthToken = JSON.parse(localStorage.getItem("authToken"));
    setToken(getAuthToken);

    if (!getAuthToken.token) {
      navigate("/");
    }

    getPost();
  }, [navigate, setToken]);

  const url = "http://localhost:5005/api/post";

  const getPost = async () => {
    try {
      const getAuthToken = JSON.parse(localStorage.getItem("authToken"));
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${getAuthToken.token}` },
      });

      if (data) {
        console.log("post:", data);
        setDataPost(data.post);
        // setPost
      } else {
        alert("data not found");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleLogout = () => {
    localStorage.clear("getAuthToken");
    navigate("/");
  };


  const formHandle = async(e) =>{
    e.preventDefault();

    const url = "http://localhost:5005/api/sendpost";
    try {
      const {data} = await axios.post(url,title )
      console.log('data:', data)
    } catch (error) {
      
    }
  }


  return (
    <div>
      <h1>Dashboard</h1>
      <h1>Token: {token.email}</h1>
      <button onClick={handleLogout}>Logout</button>

      <div>
        {dataPost?.map((value, index)=>{
          return(
            <p key={index}>{value.title}</p>
          )
        })}
      </div>

      <form onSubmit={formHandle}>
        <input type="text" placeholder="enter post" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <button type="submit" >Sent Post</button>
      </form>
    </div>
  );
}

export default Dashboard;
