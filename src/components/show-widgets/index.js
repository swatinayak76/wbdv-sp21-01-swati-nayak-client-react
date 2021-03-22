import React from "react";
import { useDispatch } from "react-redux";

const ShowWidgets = ({ widgets, handleWidgetEditing, deleteWidget }) => {
  let widgs = [];
  const dispatch = useDispatch();

  // const _deleteWidget = (w) => {
  //   var result = window.confirm("Are you sure to delete this item?");
  //   if (result) {
  //     //Logic to delete the item
  //     dispatch(deleteWidget(w));
  //   }
  // };

  if (widgets.length > 0) {
    widgets.map((_wid, i) => {
      if (_wid.style === "h1") {
        widgs.push(
          <div style={{ border: "1px solid black", marginBottom: "10px" }}>
            <div style={{ textAlign: "right" }}>
              <i className="fas fa-cog mr-4 mt-3"
              onClick={() => handleWidgetEditing(_wid)}
              ></i>
              
              {/* <i
                className="fa fa-times mr-4 "
                onClick={() => _deleteWidget(_wid)}
              ></i> */}
            </div>
            <h1>{_wid.text}</h1>
            <p>{_wid.value}</p>
          </div>
        );
      } else if (_wid.style === "h2") {
        widgs.push(
          <div style={{ border: "1px solid black", marginBottom: "10px" }}>
            <div style={{ textAlign: "right" }}>
              <i
                className="fa fa-edit mr-4 "
                onClick={() => handleWidgetEditing(_wid)}
              ></i>
              {/* <i
                className="fa fa-times mr-4 "
                onClick={() => _deleteWidget(_wid)}
              ></i> */}
            </div>
            <h2>{_wid.text}</h2>
            <p>{_wid.value}</p>
          </div>
        );
      } else if (_wid.style === "h3") {
        widgs.push(
          <div style={{ border: "1px solid black", marginBottom: "10px" }}>
            <div style={{ textAlign: "right" }}>
              <i
                className="fa fa-edit mr-4 "
                onClick={() => handleWidgetEditing(_wid)}
              ></i>
              {/* <i
                className="fa fa-times mr-4 "
                onClick={() => _deleteWidget(_wid)}
              ></i> */}
            </div>
            <h3>{_wid.text}</h3>
            <p>{_wid.value}</p>
          </div>
        );
      } else if (_wid.style === "h4") {
        widgs.push(
          <div style={{ border: "1px solid black", marginBottom: "10px" }}>
            <div style={{ textAlign: "right" }}>
              <i
                className="fa fa-edit mr-4 "
                onClick={() => handleWidgetEditing(_wid)}
              ></i>
              {/* <i
                className="fa fa-times mr-4 "
                onClick={() => _deleteWidget(_wid)}
              ></i> */}
            </div>
            <h4>{_wid.text}</h4>
            <p>{_wid.value}</p>
          </div>
        );
      } else if (_wid.style === "h5") {
        widgs.push(
          <div style={{ border: "1px solid black", marginBottom: "10px" }}>
            <div style={{ textAlign: "right" }}>
              <i
                className="fa fa-edit mr-4 "
                onClick={() => handleWidgetEditing(_wid)}
              ></i>
              {/* <i
                className="fa fa-times mr-4 "
                onClick={() => _deleteWidget(_wid)}
              ></i> */}
            </div>
            <h5>{_wid.text}</h5>
            <p>{_wid.value}</p>
          </div>
        );
      } else if (_wid.style === "h6") {
        widgs.push(
          <div style={{ border: "1px solid black", marginBottom: "10px" }}>
            <div style={{ textAlign: "right" }}>
              <i
                className="fa fa-edit mr-4 "
                onClick={() => handleWidgetEditing(_wid)}
              ></i>
              {/* <i
                className="fa fa-times mr-4 "
                onClick={() => _deleteWidget(_wid)}
              ></i> */}
            </div>
            <h6>{_wid.text}</h6>
            <p>{_wid.value}</p>
          </div>
        );
      } 
    });
  }

  return <div>{widgs}</div>;
};

export default ShowWidgets;
