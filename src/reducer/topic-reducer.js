const topics=[]

const selectLessonValue="";
export const topicReducer = (state = topics, action) => {
    switch (action.type) {
    
        case "SET_TOPIC":{
            
                
                return action.payload;
            }
        
        case "CREATE_TOPIC":
            {
                state.push(action.payload);
                return [...state];
            }
        case "UPDATE_TOPIC":
            {
                let foundIndex=state.map(x=>x._id).indexOf(action.payload._id)
                
                if(foundIndex!=-1)
                {
                    state[foundIndex]=action.payload;
                    return [...state];
                }
                else
                return state;
            }
        case "DELETE_TOPIC":
            {
                let filterData=state.filter(x=>x._id!=action.payload);
                
                return [...filterData];
            }
        default:
            return state
    }
}

export const selectLesson=(state=selectLessonValue,action)=>{
    if(action.type=="SET_LESSON_Value")
    {
        return action.payload;
    }
    return state;
}
const SET_SELECT_LESSON=(data)=>{
    return { type: "SET_LESSON_Value", payload: data }

}

const SET_TOPIC=(data)=>{
     return { type: "SET_TOPIC", payload: data }    
}
const CREATE_TOPIC=(data)=>{
     return { type: "CREATE_TOPIC", payload: data }    
}

const UPDATE_TOPIC=(data)=>{
    return { type: "UPDATE_TOPIC", payload: data }
}
const DELETE_TOPIC=(data)=>{
    return { type: "DELETE_TOPIC", payload: data }}

const FIND_TOPIC_FOR_LESSON=(lessonId )=>{
    let old_data= topics.find(x=>x._lessons ==lessonId );
    if(old_data)
    {
        return old_data
    }

    return topics;

}

const FIND_TOPIC=(topicId)=>{
    let old_data=topics.find(x=>x._id==topicId);
    if(old_data)
    {
        return old_data
    }
    else
    return topics;

    }


export const topicAction={CREATE_TOPIC,UPDATE_TOPIC,DELETE_TOPIC,FIND_TOPIC_FOR_LESSON,FIND_TOPIC,SET_TOPIC,SET_SELECT_LESSON}
