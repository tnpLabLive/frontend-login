import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
