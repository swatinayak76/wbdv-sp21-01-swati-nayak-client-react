import React, { useState, useEffect } from "react";
// import Axios from 'axios'
import axios from "axios";
import { Link } from "react-router-dom";

const AllQuizzes = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios.get("/api/getallquizzes").then((res) => {
      if (res.status == 200) {
        console.log(state);
        setstate(res.data);
      }
    });
  }, []);

  const startQuiz = (id) => [console.log(id)];

  return (
    <div className="container">
      <div
        className="shadow-lg p-3 mb-5 bg-white rounded"
        style={{ marginTop: "20px" }}
      >
        <h1>Quizzes</h1>
      </div>

      <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <table class="table">
          <tbody>
            {state &&
              state.map((item) => {
                return (
                  <tr style={{ borderBottom: "1px solid #dee2e6" }}>
                    <td>{item.title}</td>
                    <td style={{ textAlign: "right" }}>
                      {" "}
                      <div
                        style={{
                          height: "30px",
                          width: "30",
                          textAlign: "center",
                          width: "75px",
                          float: "right",
                          backgroundColor: "#007bff",
                          paddingTop: "3px",
                          borderColor: "#007bff",
                          borderRadius: "6px",
                        }}
                      >
                        {" "}
                        <Link
                          style={{ color: "#ffff", textDecoration: "none" }}
                          to={`/question/${item.title}/${item._id}`}
                        >
                          {" "}
                          Start{" "}
                        </Link>
                      </div>{" "}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllQuizzes;
