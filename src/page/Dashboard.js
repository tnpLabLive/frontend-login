import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [dataPost, setDataPost] = useState([]);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  useEffect(() => {
    getPost();
  }, []);

  const url = "http://localhost:5005/api/post";

  const getPost = async () => {
    try {
      const { data } = await axios.get(url);

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

  const handleLogout = async () => {
    const url = "http://localhost:5005/api/logout/";

    const data = await axios.post(url);
    console.log('data:', data)

    navigate("/");
  };

  const formHandle = async (e) => {
    e.preventDefault();

    const url = "http://localhost:5005/api/sendpost";
    // try {

    //   const {data} = await axios.post(url,{
    //     headers: { Authorization: `Bearer ${getAuthToken.token}` },
    //   },
    // )

    //   console.log('data:', data)
    // } catch (error) {

    // }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <h1>Token: {token.email}</h1> */}
      <button onClick={handleLogout}>Logout</button>

      <div>
        {dataPost?.map((value, index) => {
          return <p key={index}>{value.title}</p>;
        })}
      </div>

      <form onSubmit={formHandle}>
        <input
          type="text"
          placeholder="enter post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Sent Post</button>
      </form>
    </div>
  );
}

export default Dashboard;
