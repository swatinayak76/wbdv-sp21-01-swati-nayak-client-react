import React, { useState, useEffect } from "react";
import "./question.css";
import axios from "axios";
// import Questions from '../'
import TrueFalse from "./TrueFalse";

var currentCorrectInd = null;
var currentIncorrectInd = null;

const Questions = (props) => {
  // console.log(props.match.params.quizId);

  const [myAnswers, setMyAnswer] = useState({});
  const [correctAns, setCorrectAns] = useState({
    ans: null,
    disable: false,
  });
  const [score, setScore] = useState(0);

  const [result, setResult] = useState({
    classdone: false,
    correct: "",
    ind: null,
    disable: false,
    incorectInd: null,
  });

  const [state, setstate] = useState([]);
  useEffect(() => {
    axios.get(`/api/quizzes/${props.match.params.quizId}`).then((res) => {
      if (res.status == 200) {
        setstate(res.data);
      }
    });
  }, []);

  const [check, checkAnswers] = useState([
    {
      quiz: "",
      storeAnswer: "",
      id: null,
    },
  ]);

  const handleChange = (e) => {
    console.log(e.target.value);

    checkAnswers([{ id: e.target.name }]);
    console.log(check);
  };

  const submitQuiz = (quizId, questions) => {

    axios.post(`/api/quizzes/${quizId}/attempts`, questions).then((res) => {
      if (res.status == 200) {
        console.log(res.data);
        setScore(res.data.score)
      }
      console.log(state);
    });
  };

  return (
    <div className="container">
      <div
        className="shadow-lg p-3 mb-5 bg-white rounded"
        style={{ marginTop: "20px",display:'flex',alignItems:'center',justifyContent:'space-between' }}
      >
        <h1>{props.match.params.title}</h1>
        <h2>Score: {parseInt(score)}</h2>
      </div>
      {state.questions &&
        state.questions.map((item, index) => {
          if (item.type == "MULTIPLE_CHOICE") {
            return (
              <div
                style={{ marginBottom: "50px" }}
                id="quizcontainer"
                index={index}
              >
                <p id="qtext">{item.question}</p>
                <form
                  role="form"
                  id="quizform"
                  name="quizform"
                  action="quiztest.asp?qtest=CSS"
                >
                  <input
                    type="hidden"
                    name="starttime"
                    value="4/7/2021 2:31:17 PM"
                  />
                  <input
                    type="hidden"
                    name="answers"
                    value="0000000000000000000000000"
                  />
                  <input type="hidden" name="nextnumber" />
                  <input type="hidden" name="prevnumber" value="1" />
                  <div style={{ position: "relative", width: "100%" }}>
                    <div
                      id="altcontainer"
                      style={{
                        backgroundColor: "#fff",
                        fontSize: "120%",
                        lineHeight: "1.7em",
                      }}
                      class="notranslate"
                    >
                      {item.choices &&
                        item.choices.map((choices, ind) => {
                          // console.log(choices);
                          // console.log(item);
                          if (choices === item.correct) {
                            currentCorrectInd = ind;
                          }
                          return (
                            <label
                              // class="radiocontainer"
                              className={
                                ind == result.ind
                                  ? "correct radiocontainer"
                                  : ind == result.incorectInd
                                  ? "incorrect radiocontainer"
                                  : "radiocontainer"
                              }
                              id="label1"
                              index={ind}
                            >
                              {" "}
                              {choices}
                              {/* Colorful Style Sheets */}
                              <input
                                type="radio"
                                name="quiz"
                                style={{
                                  position: "absolute",
                                  cursor: "pointer",
                                }}
                                id="1"
                                disabled={result.disable}
                                onclick="clickRadio(this)"
                                value={choices}
                                onChange={(e) => {
                                  console.log(e.target.value);

                                  setResult({ correct: e.target.value });
                                  currentIncorrectInd = ind;
                                }}
                              />
                              <span class="checkmark"></span>
                            </label>
                          );
                        })}
                    </div>
                  </div>
                  <div id="answerbuttoncontainer">
                    <p>
                      Your Answer:{" "}
                      {result.correct ? result.correct : result.correct}{" "}
                    </p>
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={() => {
                        setResult({
                          ...result,
                          ind: currentCorrectInd,
                          disable: true,
                          incorectInd: currentIncorrectInd,
                        });
                        let ans = state.questions.filter(q=>q._id == item._id)
                        ans[0].answer = result.correct
                        submitQuiz(state._id, state.questions);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            );
          } else {
            return <TrueFalse item={item} index={index} submitQuiz={submitQuiz} questions={state.questions}/>;
          }
        })}
    </div>
  );
};

export default Questions;
