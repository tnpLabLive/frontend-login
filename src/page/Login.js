import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/authContext";

function Login() {
  const { setToken } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const url = "http://localhost:5005/api/login";

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, {
        email,
        password,
      });

      if (data.message !== "Password incorrect") {
        setToken(data);

        console.log("data:", data);
        navigate("/dashboard");
      } else {
        alert("user not found");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleForm}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
