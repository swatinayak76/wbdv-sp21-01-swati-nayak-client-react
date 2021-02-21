import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import courseService from "../../services/course-service";
import imgSrc from '../../images/bootstrap-logo.png';

function CourseCard(props) {
    const [editingId, setEditingId] = useState(null);
    const [title, setTitle] = useState('');

    const handleSave = async course => {
        const obj = {
            ...course,
            title: title
        }

        const status = await props.updateCourse(obj);
        if (status === 200) {
            setEditingId(null);
        }
    }

    const handleDelete = async id => {
        await props.deleteCourse(id);
    }

    return (
        <div className="card">
            <div className="card-body text-center">
                <img src={imgSrc} className="course-img"/>
                {!editingId && <h5>{props.course.title}</h5>}
                {editingId &&
                <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title}/>}
                <p>Some description</p>
                <Link to="/editor" className="btn btn-primary">
                    {props.course.title}
                </Link>
                {!editingId && <i className="fa fa-edit m-2" title="Edit" onClick={e => {
                    setTitle(props.course.title);
                    setEditingId(props.course._id)
                }}></i>}
                {editingId &&
                <i className="fa fa-check green m-2" title="Save" onClick={e => handleSave(props.course)}></i>}
                <i className="fa fa-times red m-2" title="Delete" onClick={e => handleDelete(props.course._id)}></i>
            </div>
        </div>
    );
}

export default CourseCard;