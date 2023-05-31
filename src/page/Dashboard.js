import React, { useContext, useEffect } from "react";
import { userContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { token } = useContext(userContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>Token: {JSON.stringify(token)}</h1>
    </div>
  );
}

export default Dashboard;
