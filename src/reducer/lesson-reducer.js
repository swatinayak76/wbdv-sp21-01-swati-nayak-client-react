const lessons=[]

const selectModuleValue="";
export const lessonReducer = (state = lessons, action) => {
    switch (action.type) {
    
        case "SET_Lesson":{
            
                
                return action.payload;
            }
        
        case "CREATE_Lesson":
            {
                state.push(action.payload);
                return [...state];
            }
        case "UPDATE_Lesson":
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
        case "DELETE_Lesson":
            {
                let filterData=state.filter(x=>x._id!=action.payload);
                console.log(filterData,"filter");
                return [...filterData];
            }
        default:
            return state
    }
}

export const selectModule=(state=selectModuleValue,action)=>{
    if(action.type=="SET_Module_Value")
    {
        return action.payload;
    }
    return state;
}

const SET_Lesson=(data)=>{
     return { type: "SET_Lesson", payload: data }    
}
const CREATE_Lesson=(data)=>{
     return { type: "CREATE_Lesson", payload: data }    
}

const UPDATE_Lesson=(data)=>{
    return { type: "UPDATE_Lesson", payload: data }
}
const DELETE_Lesson=(data)=>{
    return { type: "DELETE_Lesson", payload: data }}

const FIND_Lesson_FOR_Modlue=(moduleId )=>{
    let old_data= lessons.find(x=>x._modules ==moduleId );
    if(old_data)
    {
        return old_data
    }

    return lessons;

}

const FIND_Lesson=(lessonId)=>{
    let old_data=lessons.find(x=>x._id==lessonId);
    if(old_data)
    {
        return old_data
    }
    else
    return lessons;

    }

const SET_SELECT_MODULE=(data)=>{
    return { type: "SET_Module_Value", payload: data }

}
export const lessonAction={CREATE_Lesson,UPDATE_Lesson,DELETE_Lesson,FIND_Lesson_FOR_Modlue,FIND_Lesson,SET_Lesson,SET_SELECT_MODULE}
