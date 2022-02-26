import React, { Component } from 'react'
import moment from 'moment'
export default class Post extends Component {

    constructor(props){
        super(props)
    
     
    }

    /**
     * State içinde post listesi tanımladım
     */
    state={
       post: {}
    }

    /**
     * Componentleriniz yüklendikten sonra ne olacağını nelerin çalışacağını 
     * belirliyorsuz.
     * Sayfa değişiklikler olduğunda kontrol etmek için timer konulabilir.
     * Ya da sayfanın içerikleri bir api den çekilebilir.
     */
    componentDidMount = ()=>{
      /**
       * bir state içinde değer atamak için setState kullanılır.
       */
      this.setState({
          post: this.props.data
      })
    }

    getShareTime(time){
        try {           
            var difference = new Date().getTime() - new Date(time).getTime();
          
                var daysDifference = Math.floor(difference/1000/60/60/24);
                difference -= daysDifference*1000*60*60*24

                var hoursDifference = Math.floor(difference/1000/60/60);
                difference -= hoursDifference*1000*60*60

                var minutesDifference = Math.floor(difference/1000/60);
                difference -= minutesDifference*1000*60

                var secondsDifference = Math.floor(difference/1000);
                var result;
                if(daysDifference>0){
                    if(daysDifference>7)
                     {
                         result = moment(new Date(time)).format("DD-MM-YYYY")                          
                     }                      
                    else
                        result = daysDifference + ' gün önce'
                }
                else if(hoursDifference>0)
                    result = hoursDifference + ' saat önce'
                else if(minutesDifference>0)
                    result = minutesDifference + ' dakika önce'
                else
                    if(secondsDifference<60)
                        result = 'az önce'
                    else
                        result = secondsDifference + ' saniye önce'
         
                return result;

        } catch (error) {
            return "";
        }
  
    }

  render() {
     
    return (
       
        <div key={this.props.data.id} className="post-content">
          <img src={this.props.data.postmediaurl} alt="post-image" className="img-responsive post-image" />
          <div className="post-container">
            <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
            <div className="post-detail">
              <div className="user-info">
                <h5><a href="timeline.html" className="profile-link">{this.props.data.username}</a> <span className="following">{this.props.data.following ? 'following' : '' }</span></h5>
                <p className="text-muted">Published a photo about {this.getShareTime(this.props.data.publishat)}</p>
              </div>
              <div className="reaction">
                <a className="btn text-green"><i className="icon ion-thumbsup"></i> {this.props.data.like}</a>
                <a className="btn text-red"><i className="fa fa-thumbs-down"></i> {this.props.data.dislike}</a>
              </div>
              <div className="line-divider"></div>
              <div className="post-text">
                <p>
                    {
                        this.props.data.content
                    }
                     <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                   
              </div>
              <div className="line-divider"></div>
              {
                  this.props.data.comments.map(x=>
                        <div key={x.id} className="post-comment">
                            <img src="/images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                            <p><a href="timeline.html" className="profile-link">{x.username} </a>
                            <i className="em em-laughing"></i> 
                            {
                                x.content
                            }
                            </p>
                            <span>
                              <br />
                              <label style={{color:'grey',fontStyle:'italic',fontSize:'10px'}}> 
                                 {this.getShareTime(x.commenttime)}
                              </label>
                             
                              </span>
                        </div>
                    )
              }
            
             
            </div>
          </div>
        </div>

    )
  }
}
