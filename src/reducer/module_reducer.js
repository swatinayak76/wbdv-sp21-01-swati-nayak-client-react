const initialState = { mId: '60315936da8a84001736ae48' };

export const mIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SetMId': return {
            ...state, mId: action.payload
        };
        
        default: return state;
    }
}