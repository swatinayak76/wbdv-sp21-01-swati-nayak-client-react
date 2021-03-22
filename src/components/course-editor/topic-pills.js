import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moduleService from "../../services/module-service";
import { moduleActions } from "../../reducer/module-reducer";
import TopicRow from "../course-table/topic-row";
import topicService from "../../services/topic-service";

import { topicAction } from "../../reducer/topic-reducer";
export default ({ setWidgetForm, selectedTopic, handleSelectTopic }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [modules, setmodules] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const topicReducer = useSelector((x) => x.topics);
  const selectLesson = useSelector((x) => x.selectLesson);

  useEffect(() => {
    if (topicReducer.length > 0) {
      handleSelectTopic(topicReducer[0]._id);
    }
  }, [topicReducer]);

  const handleSave = async (topic_get) => {
    const data = await topicService.updateTopic(topic_get._id, topic_get);
    dispatch(topicAction.UPDATE_TOPIC(topic_get));
  };

  const handleDelete = async (id) => {
    const status = await topicService.deleteTopic(id);
    if (status == 200) {
      dispatch(topicAction.DELETE_TOPIC(id));
      // setmodules()
    }
  };
  const handleCreate = async () => {
    const data = await topicService.createTopic(selectLesson, {
      title: "New Topic",
    });

    {
      dispatch(topicAction.CREATE_TOPIC(data));
    }
  };

  return (
    <>
      {topicReducer.map((x, i) => (
        <TopicRow
          selectedTopic={selectedTopic}
          handleSelectTopic={handleSelectTopic}
          handleUpdate={handleSave}
          setWidgetForm={setWidgetForm}
          key={i}
          x={x}
          i={i}
          handleDelete={() => {
            let del = window.confirm(
              "Are you sure you want to delete the Topic?"
            );
            if (del == true) {
              handleDelete(x._id);
            } else {
            }
          }}
        />
      ))}
      <div className="topic-item col-2 col-lg-1">
        <a
          onClick={() => {
            handleCreate();
          }}
        >
          <i className="fa fa-plus cl-white"></i>
        </a>
      </div>
    </>
  );
};
