import React, { Component } from 'react'
import MiddleMd7 from '../components/Newsfeed/MiddleMd7'
import StaticMd3 from '../components/Newsfeed/StaticMd3'
import StaticMs2 from '../components/Newsfeed/StaticMs2'
import Header from './Header'
import Footer from './Footer'
import ProfileStore from '../stores/ProfileStore'
import userservice from '../config/UserService'
import LoginStore from '../stores/LoginStore'
import { connect } from 'react-redux'
import {login} from '../redux/actions'
import profile from '../redux/reducers/profile'
class NewsFeed extends Component {

  /**
   * Burada props içnide gelen verileri kontrol ederek bir çok konuda bilgi sahibi olabilir.z
   * 
   * @param {*} props 
   */
  constructor(props){
    super(props)
  
  }
async  componentDidMount(){
    /**
     * Login -> 
     * Profile Bilgilerini çek ->
     * profile store güncelliyorsun ->
     * profile store güncelleyince sayfa render oluyor.
     * componendidmount tekrar çalışıyor.
     * Profile Bilgilerini çek  kısmına tekrar dönüyorsunuz.
     * sonra da sonsuz loop oluşuyor.
     */
    const data = {
        "token": LoginStore.getToken()
      };

        try{ 
           if(false)
            fetch(userservice.findbyid, {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    })
                    .then(response => response.json()) 
                    .then(data => { 
                        if(data.status==200)
                            {                        
                          ProfileStore.setProfile(data.result)
                          this.props.loadprofile(data.result)    
                        }                    
                        
                        else{
                            this.props.logout()
                            console.log("Hata Oldu"+data.resultCode)
                        }
                    })

        }catch(e){
            console.log("post yükleme hatası...: "+e)
                this.props.logout()
        }

        
}

  render() {
    return (
      <>
          <Header />
        <div id="page-contents">
            <div className="container">
                <div className="row">

                    <StaticMd3 />
                    <MiddleMd7 />
                    <StaticMs2 />
            
                </div>
            </div>
        </div>
        <Footer />
      </>
    
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    loadprofile: () => dispatch({ type: 'LOAD' }),
 
  }
}
const mapStateToProps = (state) => 
({ 
    getprofile: state.profile
})

export default connect(mapStateToProps,mapDispatchToProps)(NewsFeed)