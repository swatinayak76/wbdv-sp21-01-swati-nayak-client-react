import React, { useState, useEffect } from "react";
import "./question.css";
import axios from "axios";
const Questions = (props) => {
  console.log(props.match.params.quizId);

  const [id, setId] = useState({
    id: "",
  });

  const [result , setResult] = useState(
      {
          
         classdone:false, 
          correct : ''
      

      }
  )

  const [state, setstate] = useState([]);
  useEffect(() => {
    axios.get(`/get_quiz/${props.match.params.quizId}`).then((res) => {
      if (res.status == 200) {
        setstate(res.data);
      }
      console.log(state);
    });
  }, []);

  return (
    <div className="container">
      <div
        className="shadow-lg p-3 mb-5 bg-white rounded"
        style={{ marginTop: "20px" }}
      >
        <h1>{props.match.params.title}</h1>
      </div>
      {state && state.map((item) => {
        if (item.type == "MULTIPLE_CHOICE") {
          return (
            <div style={{ marginBottom: "50px" }} id="quizcontainer">
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
                    {
                       item.choices && item.choices.map((choices)=>{
                            return    <label
                            //  class="radiocontainer" 
                            className={choices === item.correct ? 'correct radiocontainer' : 'incorrect radiocontainer'   }id="label1">
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
                             
                             
                              onclick="clickRadio(this)"
                              value={item.correct}
                              onChange={ e => {
                                  if( choices === item.correct){
                                      console.log('correct')
                                      setResult({  classdone : true , correct : item.correct})

                                  }
                                  else{
                                      console.log('incorrect')
                                      setResult({ classdone : false , correct : item.correct})

                                  }
                              }
                              
                            }
                            />
                            <span  class="checkmark"></span>
                          </label>
                        })
                     
                 }
                 
                  
                  </div>
                </div>
                <div id="answerbuttoncontainer">
                  <p>Your Answer: {result.correct ? result.correct : result.correct } </p>
                  <button type="button" class="btn btn-success">
                    Grade
                  </button>
                </div>
              </form>
            </div>
          );
        }
        else {

            return <div style={{ marginBottom: "50px" }} id="quizcontainer">
              <p id="qtext">
                {/* The external JavaScript file must contain the &lt;script&gt; tag. */}
                {item.question}
              </p>
              <form
                role="form"
                id="quizform"
                name="quizform"
                action="quiztest.asp?qtest=JS"
                method="post"
              >
                <input type="hidden" name="starttime" value="4/7/2021 3:03:01 PM" />
                <input
                  type="hidden"
                  name="answers"
                  value="0000000000000000000000000"
                />
                <input type="hidden" name="nextnumber" />
                <input type="hidden" name="prevnumber" value="5" />
                <div style={{ position: "relative", width: "100%" }}>
                  <div id="altcontainer" class="notranslate">
                    <label class="radiocontainer" id="label2">
                      {" "}
                      False
                      <input
                        type="radio"
                        name="quiz"
                        id="2"
                        onclick="clickRadio(this)"
                        value="2"
                      />
                      <span class="checkmark"></span>
                    </label>
                    <label class="radiocontainer" id="label1">
                      {" "}
                      True
                      <input
                        type="radio"
                        name="quiz"
                        id="1"
                        onclick="clickRadio(this)"
                        value="1"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div id="answerbuttoncontainer">
                  <p>Your Answer:</p>
                  <button type="button" class="btn btn-success">
                    Grade
                  </button>
                </div>
              </form>
            </div>
        }
      })}

      
    </div>
  );
};

export default Questions;
