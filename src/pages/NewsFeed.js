import React, { Component } from 'react'
import MiddleMd7 from '../components/Newsfeed/MiddleMd7'
import StaticMd3 from '../components/Newsfeed/StaticMd3'
import StaticMs2 from '../components/Newsfeed/StaticMs2'

export default class NewsFeed extends Component {
  render() {
    return (
      
    <div id="page-contents">
        <div className="container">
            <div className="row">

                <StaticMd3 />
                <MiddleMd7 />
                <StaticMs2 />
        
            </div>
        </div>
    </div>
    )
  }
}
