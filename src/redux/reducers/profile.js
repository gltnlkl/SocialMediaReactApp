import ProfileStore from "../../stores/ProfileStore"
const profile= (state=[],action)=>{  
    switch(action.type){
      case 'LOAD': return  ProfileStore.getProfile()   
      default: return state
    }
}
export default profile