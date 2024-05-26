import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element=<Register /> />
        <Route path="/login" element=<Login /> />
      </Routes>
    </>
  );
}

export default App;
