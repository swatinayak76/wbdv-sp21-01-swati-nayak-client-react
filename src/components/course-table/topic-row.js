import React, { useEffect, useState } from "react";
import courseService from "../../services/course-service";
import { Link, useHistory } from "react-router-dom";

function CourseRow({
  handleSelectTopic,
  x,
  handleUpdate,
  handleDelete,
  selectedTopic,
  setWidgetForm,
}) {
  const [editingId, setEditingId] = useState(undefined);
  const [title, setTitle] = useState(x.title);
  const history = useHistory();
  React.useEffect(() => {});
  return (
    <div
      //   onClick={() => setWidgetForm(true)}
      onClick={() => handleSelectTopic(x._id)}
      className="topic-item col-lg-2 col-md-3 col-sm-4"
    >
      {editingId ? (
        <div style={{ display: "flex" }}>
          <div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="mt-2 ml-3 d-flex">
            <i
              className="fa fa-check mr-4 "
              title="Edit"
              onClick={(e) => {
                handleUpdate({ ...x, title });
                setEditingId(undefined);
              }}
            ></i>
            <i
              className="fa fa-times"
              onClick={() => {
                setEditingId(undefined);
                handleDelete();
              }}
            ></i>
          </div>
        </div>
      ) : (
        <>
          <a
            className="nav-link d-flex justify-content-between"
            style={{
              backgroundColor: selectedTopic === x._id ? "#111" : "",
            }}
          >
            {x.title}
            <div className="">              
              <div
                className=""
                onClick={() => {
                  setEditingId(x._id);
                  setTitle(x.title);
                }}
              >
                <i className="fa fa-edit"></i>
              </div>
            </div>
          </a>
        </>
      )}
    </div>
  );
}

export default CourseRow;
