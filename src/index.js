import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App1 from "./App1";
import App from "./App";

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Signup from "./component/Signup";
// import Login from "./component/Login";

// function App1() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" exact component={() => <Navigate to="/home" />} />
//         <Route path="/home" exact component={App} />
//         <Route path="/login" exact component={Login} />
//         <Route path="/signup" exact component={Signup} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById("root")
);
