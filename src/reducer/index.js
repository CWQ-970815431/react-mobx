
const initAction = {
    count:0
}

const rootReducer = (state = initAction,action)=>{
    switch(action.type){
        case "send_type":
            
            return {count:state.count + 1};
        default:
            return state
    }
}

module.exports = {
    rootReducer
}