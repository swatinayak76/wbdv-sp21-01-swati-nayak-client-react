import React, { useState, useEffect, useRef } from "react";

var currentCorrectInd = null;
var currentIncorrectInd = null;
const Questions = ({ item, index,submitQuiz,questions }) => {
  let [myAns, setMyAns] = useState(undefined);
  let [isDisable, setDisable] = useState(null);
  let [isAnsCorrect, setAnsCorrect] = useState(null);

  const [result, setResult] = useState({
    classdone: false,
    correct: "",
    ind: null,
    disable: false,
    incorectInd: null,
  });
  return (
    <div style={{ marginBottom: "50px" }} id="quizcontainer" index={index}>
      <p id="qtext">{item.question}</p>
      <form
        role="form"
        id="quizform"
        name="quizform"
        action="quiztest.asp?qtest=JS"
        method="post"
      >
        <input type="hidden" name="starttime" value="4/7/2021 3:03:01 PM" />
        <input type="hidden" name="answers" value="0000000000000000000000000" />
        <input type="hidden" name="nextnumber" />
        <input type="hidden" name="prevnumber" value="5" />
        <div style={{ position: "relative", width: "100%" }}>
          <div id="altcontainer" class="notranslate">
            {item.choices.map((choice, ind) => {
              if (choice === item.correct) {
                currentCorrectInd = ind;
              }
              return (
                <label
                  // className={"radiocontainer"}

                  className={
                    ind == result.ind
                      ? "correct radiocontainer"
                      : ind == result.incorectInd
                      ? "incorrect radiocontainer"
                      : "radiocontainer"
                  }
                  index={ind}
                >
                  {choice}
                  <input
                    type="radio"
                    name={item._id}
                    id="2"
                    disabled={result.disable}
                    onclick="clickRadio(this)"
                    value={choice}
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
            {/* <label className={"radiocontainer"} id={item._id} ref={inputTrue}>
            True
              <input
              type="radio"
              name={item._id}
                id="1"
                onclick="clickRadio(this)"
                value="true"
                onChange={(e) => {
                  setMyAns(e.target.value);
                }}
                disabled={isDisable}
              />
              <span class="checkmark"></span>
            </label> */}
          </div>
        </div>
        <div id="answerbuttoncontainer">
          <p>Your Answer:  {result.correct ? result.correct : result.correct}{" "} </p>
          <button 
           onClick={() => {
             console.log(item);
            setResult({
              ...result,
              ind: currentCorrectInd,
              disable: true,
              incorectInd: currentIncorrectInd,
            });
            submitQuiz(item._id, questions);
          }}
           type="button" class="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questions;
