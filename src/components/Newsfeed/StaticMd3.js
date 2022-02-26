import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatOnline from './ChatOnline'
import ProfileStore from '../../stores/ProfileStore'

class StaticMd3 extends Component {
    constructor(props){
        super(props)
        console.log(ProfileStore.getProfile())
    }
  render() {
    let user = this.props.profileinfo
    return (
      
        <div className="col-md-3 static">
        <div className="profile-card">
            <img src="images/users/user-1.jpg" alt="user" className="profile-photo" />
            <h5><a href="timeline.html" className="text-white">{user?.firstname+' '+user?.lastname}</a></h5>
            <a href="#" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 followers</a>
            <button  className="btn btn-danger" onClick={()=>{this.props.logout()}}>Sign Out</button>
        </div>
        <ul className="nav-news-feed">
          <li><i className="icon ion-ios-paper"></i><div><a href="newsfeed.html">My Newsfeed</a></div></li>
          <li><i className="icon ion-ios-people"></i><div><a href="newsfeed-people-nearby.html">People Nearby</a></div></li>
          <li><i className="icon ion-ios-people-outline"></i><div><a href="newsfeed-friends.html">Friends</a></div></li>
          <li><i className="icon ion-chatboxes"></i><div><a href="newsfeed-messages.html">Messages</a></div></li>
          <li><i className="icon ion-images"></i><div><a href="newsfeed-images.html">Images</a></div></li>
          <li><i className="icon ion-ios-videocam"></i><div><a href="newsfeed-videos.html">Videos</a></div></li>
        </ul>
       <ChatOnline titleBenSalladimBuIsmi="Chat Olayı ??" userId="1"/>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    logout: () => dispatch({ type: 'SIGN_OUT' }),
 
  }
}
const mapStateToProps = (state) => 
({ 
    profileinfo: state.profile
})
export default connect(mapStateToProps,mapDispatchToProps)(StaticMd3)