import React, { useState, useEffect } from "react";

const ListWidget = ({widget, handleWidgetFormFields, handleOrderField}) => {
  // const [textareaText, setTextareaText] = useState("");
  // const [ordered, setOrdered] = useState(false);

  // const extractItemsFromTextArea = () => {
  //   var list = textareaText.split("\n");
  //   //   console.log(list);

  //   return ordered ? (
  //     <ol>
  //       {list.map((item, i) => (
  //         <li key={i}>{item}</li>
  //       ))}
  //     </ol>
  //   ) : (
  //     <ul>
  //       {list.map((item, i) => (
  //         <li key={i}>{item}</li>
  //       ))}
  //     </ul>
  //   );
  // };
  return (
    <div className="col-md-12 order-4">
      <div className="checkbox" style={{ fontSize: "20px" }}>
        <label>
          <input
            type="checkbox"
            checked={widget.widgetOrder}
            onChange={() => handleOrderField(widget.widgetOrder)}
            style={{ width: "20px", height: "20px" }}
          />
          &nbsp;&nbsp;Ordered
        </label>
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          name="text"
          value={widget.text}
          rows="5"
          placeholder="There are two types of lists: ordered and unordered. select the type of list by checking the ordered checkbox"
          onChange={handleWidgetFormFields}
          style={{ marginTop: "10px" }}
        />
      </div>     
    </div>
  );
};

export default ListWidget;
