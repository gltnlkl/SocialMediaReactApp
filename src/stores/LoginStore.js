import {observable,action, makeAutoObservable} from 'mobx'

class LoginStore {

    constructor(){
        makeAutoObservable(this,{
            token: observable,
            islogin: observable,
            dologin: action,
            getToken: action,
            setToken: action
        })
    }

    islogin;

    token;

    getToken(){        
        return this.token;
    }

    setToken(token){      
        this.token = token;
    }

    dologin(){

    }
 
}

export default new LoginStore();