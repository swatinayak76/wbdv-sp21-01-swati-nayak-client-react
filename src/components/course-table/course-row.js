import React, {useEffect, useState} from 'react';
import courseService from '../../services/course-service';
import {Link,useHistory} from "react-router-dom";
// import {Link} from 'react-router-dom'
function CourseRow(props) {

    const [editingId, setEditingId] = useState(null);
    const [title, setTitle] = useState('');
    const history=useHistory();
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

    const handleEdit = () => {
        history.push(`/courses/table/${props.course._id}`)
        setTitle(props.course.title);
        setEditingId(props.course._id)
    }



    return (
        <div className="row">
            <div className="col-8 col-md-3 col-lg-3">
                {!editingId && <a  onClick={()=>history.push(`/courses/table/edit/${props.course._id}`,{course:props.course})}  className="">
                    <i className="fa fa-book mr-3 text-primary"></i>
                    {props.course.title}
                </a> }
                {editingId &&
                <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title}/>
                }
            </div>
            {/* <div className="d-none d-md-block col-md-2 col-lg-2">Quizzes</div> */}
            <div className=" d-md-block col-md-2 col-lg-2">
                <Link to="/quiz">Quizzes</Link>
            </div>

            <div className="d-none d-md-block col-md-2 col-lg-2">me</div>
            <div className="d-none d-md-block col-md-4 col-lg-3">{props.course._updatedAt}</div>
            
            <div className="col-2 text-right col-sm-2 col-md-1 col-lg-2">
                {!editingId && <i className="fa fa-edit mr-4" title="Edit" onClick={() => handleEdit()}></i>}
                {editingId &&
                <i className="fa fa-check mr-4" title="Save" onClick={e => handleSave(props.course)}></i>}
                <i className="fa fa-times mr-4" onClick={e => handleDelete(props.course._id)}></i>
            </div>
        </div>
    );
}

export default CourseRow;