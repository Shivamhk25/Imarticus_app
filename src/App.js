import "./App.css";
import Sidebar from "./component/sidebar";
//import Footer from "./component/sidebar"
import Topbar from "./component/topbar";
import Body from "./component/body";
//import Login from "./component/Login";

function App() {
  return (
    <div style={{ backgroundColor: "#f2f6f9", overflowY: "auto" }}>
      <div class="container">
        <Sidebar />
        <Topbar />
        <Body />
        {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;
