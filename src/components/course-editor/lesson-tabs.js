import React,{useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import moduleService from "../../services/module-service";
import { moduleActions } from '../../reducer/module-reducer'
import LessonRow from '../course-table/lesson_row'
import lessonService from "../../services/lesson-service";
import topicService from "../../services/topic-service";
import { topicAction } from '../../reducer/topic-reducer'
import { lessonAction } from '../../reducer/lesson-reducer'
import localStorage from 'redux-persist/es/storage';
import { useHistory } from 'react-router-dom';

export default (props)=>{
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const modId = useSelector((state) => state.mId);

    const [modules, setmodules] = React.useState([]);
    const [editingId, setEditingId] = React.useState(null);
    const lessonReducer=useSelector(x=>x.lessons)
    const selectModule=useSelector(x=>x.selectModule)
    useEffect(() => {
    }, []);

    

    const handleSave = async module_get => {
        const data = await lessonService.updateLesson(module_get._id,module_get);
       dispatch( lessonAction.UPDATE_Lesson(module_get));

    }

    const handleDelete = async id => {
        
        const status = await lessonService.deletelesson(id);
        if(status==200)
        {
            dispatch(lessonAction.DELETE_Lesson(id));
            dispatch(topicAction.SET_TOPIC([]));
            // setmodules()
        }
    }
    const handleCreate=async ()=>{
        
        const data = await lessonService.createLesson(selectModule,{title:"New Lesson"});
        // if(data)
        {dispatch(lessonAction.CREATE_Lesson(data))}

    }
    const hadndleSelect = (lesson) => {
        
        history.push(`/courses/table/edit/${props.course._id}/modules/${modId.mId}/lessons/${lesson._id}`,{course:props.course});
            let oldtopics = topicAction.FIND_TOPIC_FOR_LESSON(lesson._id);
        if (oldtopics.length <= 0) {
                
                (async () => {
                    const data = await topicService.findTopicsForLesson(lesson._id);
                    dispatch(topicAction.SET_TOPIC(data));
                    dispatch(topicAction.SET_SELECT_LESSON(lesson._id));
                })();
            }
            else {
            }
    }
    return <>

    {lessonReducer.map((x, i) => <LessonRow handleLesson={()=>hadndleSelect(x)} handleUpdate={handleSave} key={i} x={x} i={i} handleDelete={()=>{
let del = window.confirm('Are you sure you want to delete the module?')
if (del == true) {
handleDelete(x._id)
}
else {

}
    }}/>
    )}
    <li className="nav-item flex-editor-box ml-3"><a onClick={()=>{
handleCreate()
    }}>
        <div className="add-module cl-white"><i className="fa fa-plus"></i></div>
    </a></li>
</>
}