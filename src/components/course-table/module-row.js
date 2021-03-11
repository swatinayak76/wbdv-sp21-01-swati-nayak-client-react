import React, {useEffect, useState} from 'react';
import courseService from '../../services/course-service';
import {Link,useHistory} from "react-router-dom";
import {useSelector} from 'react-redux'

function CourseRow(props) {
    
    const [editingId, setEditingId] = useState(undefined);
    const [title, setTitle] = useState(props.x.title);
    const history=useHistory();
    const selectModule=useSelector(x=>x.selectModule);

    console.log(selectModule,props.x._id)
    return (
       
       <li style={{backgroundColor:selectModule== props.x._id?'#5087ed':''}}   className="module-item flex-editor-box"  onClick={props.handleModule}>
           
           {editingId?
           <>
            <div>
            <input  type="text" className="form-control edit-module" onChange={e => setTitle(e.target.value)} value={title}/>
           
            </div>
            <div>
            <i className="fa fa-check mr-4" title="Edit" onClick={e => {
                props.handleUpdate({...props.x,title})
                setEditingId(undefined)
            }}></i>
            <i
                                        className="fa fa-times" onClick={()=>{
                                            setEditingId(undefined)
                                            props.handleDelete()
                                        }}></i>
            </div>
           </>:<>
           <a  >{props.x.title}</a>
                                
                                <div className="d-flex">
                                <div className=""
                                    onClick={() =>setEditingId(props.x._id)}><i
                                        className="fa fa-edit"></i></div>
                                       
                                </div>

           </>
       }
      
    </li>
    );
}

export default CourseRow;