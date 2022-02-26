/**
 * tüm reducer larımı burada toplasam ve export etsem 
 */
import { combineReducers } from 'redux'
import Islem from './islem'
import Login from './login'
import Profile from './profile'
const AllReducers= combineReducers({
        islem: Islem, // Burada vermiş olduğunuz isimler state için kullanılır. yani aktarılan bilgileri taşıyan değişken adı bunlardır
        login: Login,
        profile: Profile
    })
export default AllReducers