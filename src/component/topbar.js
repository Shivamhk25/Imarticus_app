//import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";
function Topbar() {
  // let navigate = useNavigate();
  //const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        marginTop: "0px",
        marginLeft: "0px",
        height: "60px",
        width: "100%",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 8px 0 rgb(33 42 57 / 15%) !important",
      }}
    >
      <div
        style={{
          color: "rgba(33, 42, 57, 0.5",
          fontSize: "20px",
          fontWeight: 600,
          marginTop: "15px",
          marginLeft: "180px",
        }}
      >
        Introduction to Machine Learning
      </div>
      <div
        style={{
          position: "fixed",
          right: "0px",
          display: "flex",
          marginRight: "30px",
        }}
      >
        <div style={{ marginTop: "10px", marginRight: "10px" }}>
          <button
            type="button"
            class="btn btn-primary btn-lg"
            style={{
              display: "flex",
              backgroundColor: "rgba(5, 86, 70, 0.08)",
              border: "none",
              borderRadius: "8px",
              padding: "8px 10px",
              justifyContent: "center",
              fontSize: "18px",
              color: "#055646",
              width: "100%",
            }}
          >
            <img src="https://learn.pegasus.imarticus.org/images/Support.svg" />
            Get Help
          </button>
        </div>
        <div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                backgroundColor: "white",
                border: "none",
                marginTop: "10px",
              }}
            >
              <img
                src="https://cdn.eckovation.com/images/Profile-01.svg"
                style={{
                  borderRadius: "50%",
                  height: "32px",
                  width: "32px",
                  marginTop: "2px",
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  fontSize: "16px",
                  // display: "flex",
                  // flexDirection: "row",
                  /* background: red; */
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginLeft: "5px",
                  paddingTop: "5px",
                  alignItems: "center",
                  color: "rgba(33, 42, 57, 0.75)",
                  fontFamily: "Source Sans Pro",
                }}
              >
                Shivam Chauhan
              </span>
              <img
                src="https://learn.pegasus.imarticus.org/images/downarrow.png"
                style={{ marginLeft: "5px" }}
              />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button class="dropdown-item" type="button">
                  +Add profile
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Edit profile
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  //  onClick={() => {
                  //    navigate("/login");
                  //  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
