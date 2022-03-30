function Sidebar() {
  return (
    <div>
      <div
        class="container"
        style={{
          width: "215px",
          position: "fixed",
          top: "0px",
          left: "0px",
          height: "100vh",
          maxHeight: "100vh",
          backgroundColor: "#055646",
        }}
      >
        <div
          style={{
            width: "100%",
            //  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 25%)",
            padding: "18px 0",
            marginLeft: "-10px",
          }}
        >
          <img src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo.svg"></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <div
            style={{
              backgroundColor: "#022a22",
              borderLeft: "4px solid #fff",
              fontSize: "20px",
              fontWeight: 600,
              color: "#fefefe",
              padding: "10px 40px",
              marginLeft: "-10px",
            }}
          >
            Course
          </div>

          <div
            style={{
              borderLeft: "4px solid #fff",
              fontSize: "20px",
              fontWeight: 600,
              color: "#fefefe",
              padding: "15px 30px",
              borderLeft: "4px solid transparent",
              marginBottom: "10px",
            }}
          >
            {" "}
            Discussion
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            /* justify-content: center; */
            bottom: "0px",
            padding: "1.5rem 0",
          }}
        >
          <hr style={{ width: "100%", color: "white" }} />
          <br />
          <div
            style={{
              fontFamily: "Source Sans Pro",
              textAlign: "left",
              width: "70%",
              color: "white",
            }}
          >
            Facing problems?
          </div>
          <br />
          <div>
            <button
              type="button"
              class="btn btn-primary btn-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                width: "120%",
                color: "white",
                fontSize: "18px",
                fontFamily: "Source Sans Pro",
                fontWeight: 600,
                border: "none",
                borderRadius: "8px",
                padding: ".7rem 2rem",
                marginLeft: "-5px",
              }}
            >
              Get Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
