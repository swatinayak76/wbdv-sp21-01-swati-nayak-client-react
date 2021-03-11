import React, { useEffect } from 'react';
import './editor.css';
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import moduleService from "../../services/module-service";
import { moduleActions } from '../../reducer/module-reducer'
import ModuleRow from '../course-table/module-row'
import ModuleList from './module-list'
import LessonTabs from './lesson-tabs'
import TopicPills from './topic-pills'
function CourseEditor(props) {
   const history=useHistory();
    useEffect(()=>{
    },[])
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className="navbar-brand">
                    <a className="text-light" onClick={()=>history.goBack()}><i
                        className="fa fa-times px-3"></i></a><span className="course">{props.location.state.course.title}</span></div>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ">
                    <LessonTabs/>

                    </ul>
                </div>
            </nav>
            <div className="container-fluid ">
                <div className="row full-page-height pb-5 pb-md-0">
                    <div className="col-md-3 bg-dark  modules">
                        <ModuleList/>
                    </div>
                    <div className="col-md-9">
                        
                        <div className="row text-center all-topics py-3">
                        <TopicPills/>

                        </div>
                        <div className="row publish-area py-3">
                            <div className="col-12 text-right">
                                <button className="btn btn-success mr-2">Save</button>
                                <label>Preview</label>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row widgets-area mx-0">
                            <div className="col-md-6 order-2 order-md-1">
                                <h4>Heading Widget</h4>
                            </div>
                            <div className="col-md-6 order-1 order-md-2">
                                <div className="row text-center justify-content-end">
                                    <div className=" btn-up bg-warning ml-2">
                                        <i className="fas fa-arrow-up"></i>
                                    </div>
                                    <div className=" btn-down bg-warning ml-2">
                                        <i className="fas fa-arrow-down"></i>
                                    </div>
                                    <select className="form-control custom-select txt-role ml-2" id="role">
                                        <option>Heading</option>
                                        <option>Paragraph</option>
                                    </select>
                                    <div className="btn-cross bg-danger ml-2 mr-3"
                                        onClick="return confirm('Are you sure you want to delete the widget?');">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-2 order-3">
                                <div className="form-group">
                                    <input className="form-control" value="heading text" placeholder="heading text" />
                                </div>
                            </div>
                            <div className="col-md-12 order-4">
                                <div className="form-group">
                                    <select className="form-control custom-select">
                                        <option>Heading 1</option>
                                        <option>Heading 2</option>
                                        <option>Heading 3</option>
                                        <option>Heading 4</option>
                                        <option>Heading 5</option>
                                        <option>Heading 6</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12 order-5">
                                <div className="form-group">
                                    <input className="form-control" placeholder="Widget name" />
                                </div>
                            </div>
                            <div className="col-md-12 preview-text order-6">
                                <p>Preview</p>
                                <h3>Heading Text</h3>
                            </div>
                        </div>

                    </div>
                    <div className="btn-plus bg-danger">
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseEditor;