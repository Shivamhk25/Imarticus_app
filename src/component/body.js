import "./body.css";
import react, { useState, useEffect } from "react";
import axios from "axios";

function Body() {
  const [body, setBody] = useState([]);
  const BASE_URL = "http://localhost:5000";
  const get_all = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/data/all`);
      console.log(response, "dataaaaaaaaa");
      setBody(response.data.result);
      console.log(body, "dataaaaaaaaa");
    } catch (errors) {
      console.error(errors);
    }
  };

  useEffect(() => {
    get_all();
  }, []);

  return (
    <div style={{ overflowY: "auto" }}>
      <div
        style={{
          width: "65vw",
          height: "25vh",
          marginTop: "20vh",
          marginLeft: "15vw",
          borderRadius: "10px",
        }}
      >
        <div
          class="card"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
          }}
        >
          <img
            class="card-img-top"
            src="https://cdn.eckovation.com/images/Introduction-to-Machine-Learning.png"
            style={{
              height: "140px",
              width: "146px",
              borderRadius: "10px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          />
          <div class="card-body" style={{ marginLeft: "30px" }}>
            <h5
              class="card-title"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "29px",
                color: "#212a39",
              }}
            >
              Introduction to Machine Learning
            </h5>
            <h6
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#055646",
                marginTop: "0px",
              }}
            >
              0% complete
            </h6>
          </div>
        </div>
      </div>
      <div
        class="accordion"
        id="accordionExample"
        style={{
          width: "65vw",
          marginLeft: "15vw",
          borderRadius: "10px",
        }}
      >
        {/* {body.course.map((data) => (
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ color: "black", fontWeight: "700" }}
              >
                {data.header}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              {data.section.map((data1) => (
                <div
                  class="accordion-body"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <img
                    src="https://learn.pegasus.imarticus.org/images/play-button.svg"
                    style={{
                      paddingRight: "15px",
                      width: "36px",
                      height: "22px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{data1.header}</div>
                    <div>04:21</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))} */}

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. Concepts of Machine Learning
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div
                class="accordion-body"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img
                  src="https://learn.pegasus.imarticus.org/images/play-button.svg"
                  style={{
                    paddingRight: "15px",
                    width: "36px",
                    height: "22px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "row",
                    // justifyContent: "space-between",
                  }}
                >
                  <div>1. Rent Cost of Flat</div>
                  <div style={{ marginLeft: "40vw" }}>04:21</div>
                </div>
              </div>
              <div
                class="accordion-body"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img
                  src="https://learn.pegasus.imarticus.org/images/play-button.svg"
                  style={{
                    paddingRight: "15px",
                    width: "36px",
                    height: "22px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "row",
                    // justifyContent: "space-between",
                  }}
                >
                  <div>2. Linear Regression</div>
                  <div style={{ marginLeft: "40vw" }}>04:21</div>
                </div>
              </div>
              <div
                class="accordion-body"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img
                  src="https://learn.pegasus.imarticus.org/images/play-button.svg"
                  style={{
                    paddingRight: "15px",
                    width: "36px",
                    height: "22px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "row",
                    // justifyContent: "space-between",
                  }}
                >
                  <div>3. Logistic Regression</div>
                  <div style={{ marginLeft: "40vw" }}>04:21</div>
                </div>
              </div>
              <div
                class="accordion-body"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img
                  src="https://learn.pegasus.imarticus.org/images/quiz.svg"
                  style={{
                    paddingRight: "15px",
                    width: "36px",
                    height: "22px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "row",
                    // justifyContent: "space-between",
                  }}
                >
                  <div>4. Basics of Machine Learning</div>
                  <div style={{ marginLeft: "40vw" }} code>
                    04:21
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
