import React,{useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import moduleService from "../../services/module-service";
import lessonService from "../../services/lesson-service";
import { moduleActions } from '../../reducer/module-reducer'
import { lessonAction } from '../../reducer/lesson-reducer'
import ModuleRow from '../course-table/module-row'
import topicService from "../../services/topic-service";
import { topicAction } from '../../reducer/topic-reducer'
export default ()=>{
    const location = useLocation();
    const dispatch = useDispatch();

    const [modules, setmodules] = React.useState([]);
    const [editingId, setEditingId] = React.useState(null);
    const modouleReducer=useSelector(x=>x.modules)
    useEffect(() => {
        module_load();

    }, []);

    const module_load=()=>{
        if (location.state && location.state.course) {
            let oldmodules = moduleActions.FIND_MODULE(location.state.course._id);
            if (oldmodules.length <= 0) {
                
                (async () => {
                    let data = await moduleService.findModulesForCourse(location.state.course._id);
              
                    setmodules(data);
                    dispatch(moduleActions.SET_MODULE(data));
                    if(data[0])
                    dispatch(lessonAction.SET_SELECT_MODULE((data[0]._id)));
                    if(data[0])
                    (async () => {
                        let data1 = await lessonService.findLessonForModule(data[0]._id);
                        dispatch(lessonAction.SET_Lesson(data1));
                        if(data1[0])
                        dispatch(topicAction.SET_SELECT_LESSON(data1[0]._id));

                        if(data1[0])
                        (async () => {
                            const data2 = await topicService.findTopicsForLesson(data1[0]._id);
                            dispatch(topicAction.SET_TOPIC(data2));
                        })();
                        else
                        {
                            dispatch(topicAction.SET_TOPIC([]));
    
                        }
                    })();

                })();
               
            }
            else {
                setmodules(oldmodules);
            }
        }
    }
    
    const handleSave = async module_get => {
        const status = await moduleService.updateModule(module_get._id,module_get);
        if(status==200)
        {
           dispatch( moduleActions.UPDATE_MODULE(module_get));
        }
    }

    const handleDelete = async id => {
        const status = await moduleService.deleteModule(id);
        if(status==200)
        {
           dispatch( moduleActions.DELETE_MODULE(id));
            console.log(modouleReducer)
            // setmodules()
        }
    }
    const handleCreate=async ()=>{
        const data = await moduleService.createModule(location.state.course._id,{title:"New Module"});
        if(data)
        {dispatch(moduleActions.CREATE_MODULE(data))}
    }
    const hadndleSelect=(module)=>{
        let oldlessons = lessonAction.FIND_Lesson_FOR_Modlue(module._id);
        if (oldlessons.length <= 0) {
                
                (async () => {
                    const data = await lessonService.findLessonForModule(module._id);
                    dispatch(lessonAction.SET_Lesson(data));
                    dispatch(lessonAction.SET_SELECT_MODULE((module._id)));
                    
                    if(data[0])
                    dispatch(topicAction.SET_SELECT_LESSON(data[0]._id));

                    if(data[0])
                    (async () => {
                        const data2 = await topicService.findTopicsForLesson(data[0]._id);
                        dispatch(topicAction.SET_TOPIC(data2));
                    })();
                    else
                    {
                        dispatch(topicAction.SET_TOPIC([]));

                    }
                    
                })();
            }
            else {
            }
    }
    return <ul>

    {modouleReducer.map((x, i) => <ModuleRow  handleModule={()=>hadndleSelect(x)} handleUpdate={handleSave} key={i} x={x} i={i} handleDelete={()=>{

let del = window.confirm('Are you sure you want to delete the module?')
if (del == true) {
handleDelete(x._id)
}
else {

}
    }}/>
    )}
    <li className="module-item bg-transparent"><a >
        <div className="add-module"><i onClick={()=>{
handleCreate()
    
    }} className="fa fa-plus"></i></div>
    </a></li>
</ul>
}