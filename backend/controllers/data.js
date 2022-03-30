exports.all_fetch = async function (req, res) {
  const data = {
    title: "Introduction to Machine Learning",
    course: [
      {
        header: "Introduction to Machine Learning",
        section: [
          {
            header: "What is Machine Learning",
            url: "",
          },
        ],
      },
      {
        header: "Concepts of Machine Learning",
        section: [
          {
            header: "Rent Cost of Flat",
            url: "",
          },
          {
            header: "Linear Regression",
            url: "",
          },
          {
            header: "Polymer Regresion",
            url: "",
          },
          {
            header: "Basics Of Machine Learning",
            url: "",
          },
        ],
      },
      {
        header: "Application of Machine Learning",
        section: [
          {
            header: "Spam Email Filter",
            url: "",
          },
          {
            header: "Recommendation of App",
            url: "",
          },
        ],
      },
      {
        header: "Neural Network and Deep Learning",
        section: [
          {
            header: "Application of Ml in College Admission",
            url: "",
          },
          {
            header: "Application of Ml in College Admission 2",
            url: "",
          },
          {
            header: "Neural Network",
            url: "",
          },
          {
            header: "Recognizing Hand Written Digits 1",
            url: "",
          },
          {
            header: "Recognizing Hand Written Digits 2",
            url: "",
          },
        ],
      },
      {
        header: "Application of Deep Learning",
        section: [
          {
            header: "Deep Learning",
            url: "",
          },
        ],
      },
    ],
  };

  try {
    res.status(200).json({ result: data });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
