import React, {useEffect, useState} from 'react';
import courseService from '../../services/course-service';
import {Link,useHistory} from "react-router-dom";
import {useSelector} from 'react-redux'
function CourseRow(props) {
    
    const [editingId, setEditingId] = useState(undefined);
    const [title, setTitle] = useState(props.x.title);
    const history=useHistory();
    const selectModuleValue=useSelector(x=>x.selectLesson);
    useEffect(()=>{
        
    })
    return (
       
       <li onClick={props.handleLesson} style={{backgroundColor:selectModuleValue==props.x._id?'#464b4f':""}}  className="nav-item flex-editor-box">
           
           {editingId?
           <>
           
            <div>
            <input  type="text" className="form-control edit-module" onChange={e => setTitle(e.target.value)} value={title}/>
           
            </div>
            <div>
            <i className="fa fa-check mr-4 cl-white" title="Edit"  onClick={e => {
                props.handleUpdate({...props.x,title})
                setEditingId(undefined)
            }}></i>
            <i
                                        className="fa fa-times cl-white" onClick={()=>{
                                            
                                            setEditingId(undefined);
                                            props.handleDelete()
                                        }}></i>
            </div>
           </>:<>
           
           <a style={{color:'white'}} className="nav-link" >{props.x.title}</a>
                                
                                <div className="d-flex">
                                <div className=""
                                    onClick={() =>{
                                        setEditingId(props.x._id)
                                        setTitle(props.x.title)
                                    }}><i
                                        className="fa fa-edit cl-white"></i></div>
                                       
                                </div>

           </>
       }
      
    </li>
    );
}

export default CourseRow;