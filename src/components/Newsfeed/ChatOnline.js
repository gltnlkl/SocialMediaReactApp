import React, { Component } from 'react'

export default class ChatOnline extends Component {

    /**
     * Bileşenler arasında değer aktarımı için kullanırsınız.
     * @param {*} props 
     */
    constructor(props){
        super(props)
    }

    // uygulamamız içinde değişikliklerinin takip edildiği, değişim durumunda sayfanın render
    // edildiği, edileceği değişkenlerimiz için state kullanmak doğru bir yaklaşım olacaktır.
    // ÖNEMLİ!! state kullanmak için this.state.[DEĞİŞKENADI] şeklinde çağırılır.
    state={
        onlineList: [{
            title: "Linda Lohan",
            image: "images/users/user-2.jpg",            
          },
          {
            title: "Sophia Lee",
            image: "images/users/user-3.jpg",            
          },
          {
            title: "John Doe",
            image: "images/users/user-4.jpg",            
          },
          {
            title: "Alexis Clark",
            image: "images/users/user-5.jpg",            
          },
          {
            title: "James Carter",
            image: "images/users/user-6.jpg",            
          },
          {
            title: "Robert Cook",
            image: "images/users/user-7.jpg",            
          }]
    }


    
  render() {
   
    return (
        <div id="chat-block">
        <div className="title">{this.props.titleBenSalladimBuIsmi}</div>
        <ul className="online-users list-inline">
            {
                this.state.onlineList.map(x=>
                    <li key={x.title}>
                        <a href="newsfeed-messages.html" title={x.title}>
                        <img src={x.image} alt="user" className="img-responsive profile-photo" />
                        <span className="online-dot"></span>
                        </a>
                    </li>
                    )
            }
      
        </ul>
      </div>
    )
  }
}
