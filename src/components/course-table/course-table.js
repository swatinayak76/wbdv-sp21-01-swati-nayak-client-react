import React, { useState, useEffect } from "react";
import CourseRow from "./course-row";
import service from "../../services/course-service";
import courseService from "../../services/course-service";
import { Link } from "react-router-dom";
// import CourseCard from "../course-grid/course-card";

function CourseTable(props) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    reloadCourses();
  }, []);

  const handleSave = async (e) => {
    let title = document.getElementById("txt-title").value;
    if (title.length > 0) {
      await service.createCourse({ title: title });
      document.getElementById("txt-title").value = ``;
      reloadCourses();
    }
  };

  const updateCourse = async (course) => {
    const status = await courseService.updateCourse(course._id, course);
    reloadCourses();
    return status;
  };
    
  const deleteCourse = async id => {
    if (window.confirm(`Are you sure you want to delete?`)) {
        const status = await courseService.deleteCourse(id);
        reloadCourses();
        return status;
    }
}

  const reloadCourses = async () => {
    const data = await service.findAllCourses();
    setCourses(data);
  };
  return (
    <div className="container-fluid course-list">
      <div className="row header">
        <div className="col-1 col-md-1 text-center bars">
          <i className="fa fa-bars"></i>
        </div>
        <div className="d-none d-md-block col-md-3 col-lg-2  text-course-manager">
          <p className="m-0">Course Manager</p>
        </div>
        <div className="col-8 col-md-6 col-lg-7">
          <input
            type="text"
            id="txt-title"
            className="form-control txt-title"
            placeholder="New Course Title"
          />
        </div>
        <div className="col-2 col-md-2">
          <div className="plus-btn mx-auto bg-danger">
            <i className="fa fa-plus" onClick={handleSave}></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            <div className="row list-header">
              <div className="container">
                <div className="row">
                  <div className="col-8 col-md-4 col-lg-5">Title</div>
                  <div className="d-none d-md-block col-md-2 col-lg-2">
                    Owned By
                  </div>
                  <div className="d-none d-md-block col-md-4 col-lg-3">
                    Last modified by me
                  </div>
                  <div className="col-4 text-center text-md-left col-sm-2 col-md-2 col-lg-2">
                    <Link to="/courses/grid">
                      <i className="fa fa-list mr-4"></i>
                    </Link>
                    <Link to="/courses/table">
                      <i className="fa fa-folder mr-4"></i>
                    </Link>
                    <i className="fa fa-sort-alpha-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row list-content">
              <div className="container">
                {courses.map((row) => (
                  <CourseRow
                    key={row._id}
                    course={row}
                    reload={reloadCourses}
                    updateCourse={updateCourse}
                    deleteCourse={deleteCourse}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseTable;
