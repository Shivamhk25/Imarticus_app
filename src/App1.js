import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App1;
