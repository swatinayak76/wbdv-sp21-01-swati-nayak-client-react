const modules=[]

export const moduleReducer = (state = modules, action) => {
    switch (action.type) {
    
        case "SET_MODULE":{
            
                
                return action.payload;
            }
        
        case "CREATE_MODULE":
            {
                state.push(action.payload);
                return [...state];
            }
        case "UPDATE_MODULE":
            {
                let foundModuleIndex=state.map(x=>x._id).indexOf(action.payload._id)
                console.log(state,"sdsds")
                console.log(foundModuleIndex,"sdsds")

                if(foundModuleIndex!=-1)
                {
                    state[foundModuleIndex]=action.payload;
                    return [...state];
                }
                else
                return state;
            }
        case "DELETE_MODULE":
            {
                let oldState=[...state]
                let filterModule=oldState.filter(x=>x._id!=action.payload);
            
                return [...filterModule];
            }
        default:
            return state
    }
}

const SET_MODULE=(data)=>{
     return { type: "SET_MODULE", payload: data }    
}
const CREATE_MODULE=(data)=>{
     return { type: "CREATE_MODULE", payload: data }    
}

const UPDATE_MODULE=(data)=>{
    return { type: "UPDATE_MODULE", payload: data }
}
const DELETE_MODULE=(data)=>{
    return { type: "DELETE_MODULE", payload: data }}

const FIND_MODULES_FOR_COURSE=(moduleId )=>{
        return   modules.find(x=>x.moduleId ==moduleId );
    }
const FIND_MODULE=(courseId)=>{
    let old_modules=modules.find(x=>x.courseId==courseId);
    if(old_modules)
    {
        return old_modules
    }
    else
    return modules;

    }
export const moduleActions={CREATE_MODULE,UPDATE_MODULE,DELETE_MODULE,FIND_MODULES_FOR_COURSE,FIND_MODULE,SET_MODULE}
