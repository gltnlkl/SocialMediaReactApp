const login= (state,action)=>{  

    switch(action.type){
      case 'SIGN_IN': return true    
      default: return false
    }
}
export default login