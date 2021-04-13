import React, { useState, useEffect, useRef } from "react";

const Questions = ({ item, index }) => {
  let [myAns, setMyAns] = useState(undefined);
  let [isDisable, setDisable] = useState(null);
  let [isAnsCorrect, setAnsCorrect] = useState(null);
  let inputTrue = useRef(null);
  let inputFalse = useRef(null);

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
            <label className={"radiocontainer"} ref={inputFalse}>
              False
              <input
                type="radio"
                name={item._id}
                id="2"
                onclick="clickRadio(this)"
                value="false"
                onChange={(e) => {
                  setMyAns(e.target.value);
                }}
                disabled={isDisable}
              />
              <span class="checkmark"></span>
            </label>
            <label className={"radiocontainer"} id={item._id} ref={inputTrue}>
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
            </label>
          </div>
        </div>
        <div id="answerbuttoncontainer">
          <p>Your Answer: {myAns && myAns} </p>
          <button
            onClick={(e) => {
              console.log(item.correct);
              let inputTrueChecked =
                inputTrue.current.firstElementChild.checked;
              debugger;
              if (myAns === item.correct) {
                setDisable(true);
                setAnsCorrect(true);
                if (inputTrueChecked) {
                  inputTrue.current.classList.add("correct");
                }
                if (inputTrueChecked){
                  inputFalse.current.classList.add("incorrect");
                }
              }
              if (myAns !== item.correct) {
                inputTrue.current.classList.add("incorrect");
                inputFalse.current.classList.add("correct");
                setDisable(true);
                setAnsCorrect(false);
              }
            }}
            type="button"
            class="btn btn-success"
          >
            Grade
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questions;
