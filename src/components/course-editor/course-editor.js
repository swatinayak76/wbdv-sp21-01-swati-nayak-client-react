import React, { useEffect, useState } from "react";
import "./editor.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  createWidget,
  findWidgetsForTopic,
  deleteWidget,
  updateWidget,
} from "../../services/widget-service";
import WidgetList from "../widgets/widget-list";
// import { useDispatch, useSelector } from "react-redux";
// import moduleService from "../../services/module-service";
// import { moduleActions } from "../../reducer/module-reducer";
// import ModuleRow from "../course-table/module-row";
// import service from "../../services/course-service";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetForm from "./widgetForm";
import WidgetFormEdit from "./widgetFormEdit";
function CourseEditor(props) {
  // const [course, setCourse] = useState();
  const dispatch = useDispatch();
  const topicReducer = useSelector((x) => x.topics);
  const _widgetReducer = useSelector((state) => state.widgetReducer);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedWidget, setSelectedWidget] = useState("");
  const [widgetForm, setWidgetForm] = useState(false);
  const [widgetFormEdit, setWidgetFormEdit] = useState(false);
  const [editingWidget, setEditingWidget] = useState({});
  const [widget, setWidget] = useState({
    name: "",
    type: "Heading",
    widgetOrder: 0,
    text: "Text",
    src: "image sorse",
    size: "500",
    width: "200",
    height: "200",
    cssClass: "center",
    style: "h1",
    value: "value",
  });

  const history = useHistory();
  useEffect(() => {
    dispatch(findWidgetsForTopic(selectedTopic));
  }, [selectedTopic]);

  const handleWidgetEditing = (w) => {
    setWidgetFormEdit(true);
    setEditingWidget(w);
  };

  const handleSelectTopic = (tId) => {
    setSelectedTopic(tId);
    dispatch(findWidgetsForTopic(tId));
  };

  const handleWidgetFormFields = ({ target }) => {
    setWidget({ ...widget, [target.name]: target.value, tid: selectedTopic });
  };

  const handleOrderField = (v) => {
    if (v === 1) {      
      setWidget({ ...widget, widgetOrder: 0, tid: selectedTopic });      
    } else {
      setWidget({ ...widget, widgetOrder: 1, tid: selectedTopic });      
    }
  };

  const handleEditOrderField = (v) => {
    if (v === 1) {      
      setEditingWidget({ ...editingWidget, text: editingWidget.text.toString().replace(new RegExp(",", "g"), "\n"), widgetOrder: 0, tid: selectedTopic });      
    } else {
      setEditingWidget({ ...editingWidget, text: editingWidget.text.toString().replace(new RegExp(",", "g"), "\n"), widgetOrder: 1, tid: selectedTopic });      
    }          
  };

  const handleEditingWidgetFormFields = ({ target }) => {
    setEditingWidget({ ...editingWidget, [target.name]: target.value });
  };

  const saveWidget = () => {
    setWidget({
      name: "",
      type: "Heading",
      widgetOrder: 0,
      text: "text",
      src: "image sorse",
      size: "500",
      width: "200",
      height: "200",
      cssClass: "center",
      style: "h1",
      value: "value",
    });
    dispatch(createWidget(widget, selectedTopic));
    setWidgetForm(false);
  };

  const update_Widget = () => {
    dispatch(updateWidget(editingWidget));
    console.log(editingWidget);
    setWidgetFormEdit(false);
  };

  // const reloadCourses = async () => {
  //     const data = await service.findCourseById();
  //     setCourses(data);
  // }
  return (
    <div>
      {/* {console.log(widgets)} */}
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="navbar-brand">
          <a
            className="text-light"
            onClick={() => history.push("/courses/table")}
          >
            <i className="fa fa-times px-3"></i>
          </a>
          <span className="course">{props.location.state.course.title}</span>
        </div>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ">
            <LessonTabs course={props.location.state.course} />
          </ul>
        </div>
      </nav>
      <div className="container-fluid ">
        <div className="row full-page-height pb-5 pb-md-0">
          <div className="col-md-3 bg-dark  modules">
            <ModuleList course={props.location.state.course} />
          </div>
          <div className="col-md-9">
            <div className="row text-center all-topics py-3">
              <TopicPills
                setWidgetForm={setWidgetForm}
                selectedTopic={selectedTopic}
                handleSelectTopic={handleSelectTopic}
                saveWidget={saveWidget}
              />
            </div>
            <div>
              {topicReducer.length > 0 ? (
                <div style={{ display: "flex" }}>
                  <h1>Widget List ({_widgetReducer.data.length})</h1>                  
                  <i
                    style={{
                      fontSize: "32px",
                      marginLeft: "600px",
                      textAlign: "right",
                    }}
                    onClick={() => setWidgetForm(true)}
                    className="fa fa-plus mr-4 "
                  ></i>
                </div>
              ) : null}
              {widgetForm ? (
                <WidgetForm
                  setWidgetForm={setWidgetForm}
                  widget={widget}
                  saveWidget={saveWidget}
                  handleWidgetFormFields={handleWidgetFormFields}
                  handleOrderField={handleOrderField}
                />
              ) : null}

              {widgetFormEdit ? (
                <WidgetFormEdit
                  editingWidget={editingWidget}
                  handleEditOrderField={handleEditOrderField}
                  setWidgetFormEdit={setWidgetFormEdit}
                  updateWidget={update_Widget}
                  deleteWidget={deleteWidget}
                  handleEditingWidgetFormFields={handleEditingWidgetFormFields}
                />
              ) : null}
              <WidgetList
                widgets={_widgetReducer.data}
                setSelectedWidget={setSelectedWidget}
                selectedWidget={selectedWidget}
                selectedTopic={selectedTopic}
                handleWidgetEditing={handleWidgetEditing}
              />
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
}

export default CourseEditor;
