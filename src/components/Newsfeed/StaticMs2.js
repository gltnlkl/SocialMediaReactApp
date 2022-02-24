import React, { Component } from 'react'

export default class StaticMs2 extends Component {

    constructor(props){
        super(props)
    }

    /**
     * State içindeki dğeişkenlere atama : ile yapılır.
     *  = sorun vermez ancak çalıştırmaz. console ekranında hatayı gösterir
     */
    state={
        whofollowList: [{
            title: "Linda Lohan",
            image: "images/users/user-12.jpg",            
          },
          {
            title: "Sophia Lee",
            image: "images/users/user-13.jpg",            
          },
          {
            title: "John Doe",
            image: "images/users/user-11.jpg",            
          },
          {
            title: "Alexis Clark",
            image: "images/users/user-14.jpg",            
          },
          {
            title: "James Carter",
            image: "images/users/user-16.jpg",            
          },
          {
            title: "Robert Cook",
            image: "images/users/user-17.jpg",            
          }]
    }

  render() {
    return (
      
        <div className="col-md-2 static">
        <div className="suggestions" id="sticky-sidebar">
          <h4 className="grey">Who to Follow</h4>
          {
              this.state.whofollowList.map(x=>
                 <div className="follow-user" key={x.title}>
                    <img src={x.image} alt="" className="profile-photo-sm pull-left" />
                    <div>
                    <h5><a href="timeline.html">{x.title}</a></h5>
                    <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
                )
          }
     
       
        </div>
      </div>
        
    )
  }
}
