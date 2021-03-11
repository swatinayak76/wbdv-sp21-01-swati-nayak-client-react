import React,{useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import moduleService from "../../services/module-service";
import { moduleActions } from '../../reducer/module-reducer'
import TopicRow from '../course-table/topic-row'
import topicService from "../../services/topic-service";

import { topicAction } from '../../reducer/topic-reducer';
export default (props)=>{
    const location = useLocation();
    const dispatch = useDispatch();

    const [modules, setmodules] = React.useState([]);
    const [editingId, setEditingId] = React.useState(null);
    const topicReducer=useSelector(x=>x.topics)
    const selectLesson=useSelector(x=>x.selectLesson)
    const [selectedTopic,setselectedTopic]=React.useState();

    useEffect(() => {
    }, []);

    

    const handleSave = async topic_get => {
        const data = await topicService.updateTopic(topic_get._id,topic_get);
       dispatch( topicAction.UPDATE_TOPIC(topic_get));

    }

    const handleDelete = async id => {
        const status = await topicService.deleteTopic(id);
        if(status==200)
        {
           dispatch( topicAction.DELETE_TOPIC(id));
            // setmodules()
        }
    }
    const handleCreate=async ()=>{
        console.log(selectLesson,"selectLesson")
        const data = await topicService.createTopic(selectLesson,{title:"New Topic"});
            
        {dispatch(topicAction.CREATE_TOPIC(data))}

    }

    const hadndleSelect=(id)=>{
        setselectedTopic(id)
    }

    return <>

    {topicReducer.map((x, i) => <TopicRow selectedTopic={selectedTopic} hadndleSelect={hadndleSelect} handleUpdate={handleSave}  key={i} x={x} i={i} handleDelete={()=>{
let del = window.confirm('Are you sure you want to delete the Topic?')
if (del == true) {
handleDelete(x._id)
}
else {

}
    }}/>
    )}
      <div className="topic-item col-2 col-lg-1"><a  onClick={()=>{
handleCreate()
    }}><i
                                className="fa fa-plus cl-white"></i></a></div>
   
</>
}