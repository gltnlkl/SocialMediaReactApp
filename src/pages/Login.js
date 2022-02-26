import React, { Component } from 'react'
import {connect} from 'react-redux'
import authservice from '../config/AuthService'
import loginstore from '../stores/LoginStore'
class Login extends Component {

    state={
        username: '',
        password: ''    
    }

    dologin=()=>{
    
        /**
         * Bu dispatch içinden gelen dologin methodunu tetikler.
         */
        this.props.dologin()
    }

  
    loginAction= ()=>{
        const data = {
            "username": this.state.username,
            "password": this.state.password
          }
        fetch(authservice.dologin, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {              
                if(data.token.length > 0){
                    loginstore.setToken(data.token)
                     this.dologin()
                }
                   
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


  render() {
    return (
      <div className='row'>
        <div id="lp-register">
            <div className="container wrapper">
                
                <div className="row">
                    <div className="col-sm-5">
                        <div className="intro-texts">
                            <h1 className="text-white">Make Cool Friends !!!</h1>
                            <p>Friend Finder is a social network template that can be used to connect people. The template offers Landing pages, News Feed, Image/Video Feed, Chat Box, Timeline and lot more. <br /> <br />Why are you waiting for? Buy it now.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="col-sm-6 col-sm-offset-1">
                        <div className="reg-form-container">

                            <div className="reg-options">
                                <ul className="nav nav-tabs">

                                    <li className="active"><a href="#login" data-toggle="tab">Login</a></li>
                                  
                                </ul>
                            </div>

                        
                            <div className="tab-content">

                            
                                <div className="tab-pane active" id="login">
                                    <h3>Login</h3>
                                    <p className="text-muted">Log into your account</p>

                                
                                        <div className="row">
                                            <div className="form-group col-xs-12">
                                                <label htmlFor="my-email" className="sr-only">Email</label>
                                                <input id="my-email" onChange={(e)=>{
                                                  this.setState({
                                                      username: e.target.value
                                                  })
                                                }}
                                                    className="form-control input-group-lg"
                                                    type="text" name="username" title="Enter Email"
                                                    placeholder="Your Email"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-xs-12">
                                                <label htmlFor="my-password" className="sr-only">Password</label>
                                                <input id="my-password"  onChange={(e)=>{
                                                  this.setState({
                                                      password: e.target.value
                                                  })
                                                }}
                                                    className="form-control input-group-lg"
                                                    type="password" name="password"
                                                    title="Enter password" placeholder="Password"/>
                                            </div>
                                        </div>
                                    
                                        <p><a href="#">Forgot Password?</a></p>
                                        <button className="btn btn-primary" onClick={this.loginAction}>Login Now</button>
                             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </ div>
    )
  }
}
const mapStateToProps = (state) => 
({ 
    loginstate: state.login
})

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      dologin: () => dispatch({ type: 'SIGN_IN' }),
   
    }
  }
  /**
   * Bilgilendirme!!!
   * connect kullanırken, ilk parametreyi statetoprops olarak aradığı için uygulama hata veriyor idi.
   * bu nedenle ilk parametreyi null olarak atadık.
   */
export default connect(mapStateToProps,mapDispatchToProps)(Login)