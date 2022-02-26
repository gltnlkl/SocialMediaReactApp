import {observable,action,makeAutoObservable} from 'mobx'
class ProfileStore{

    constructor(){
        makeAutoObservable(this,{
            profile: observable,
            getProfile: action,
            setProfile: action
        })
    }

    profile;

    getProfile(){
        return this.profile
    }

    setProfile(profile){
       
        this.profile = profile
    }

}

export default new ProfileStore();