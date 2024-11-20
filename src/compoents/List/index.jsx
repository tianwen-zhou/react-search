import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props.state
    // console.log('@', users, isFirst, isLoading, err)
    return (
      <div className="row">
        {isFirst ? <h1>Please input keyWord for search!</h1> 
            : isLoading ? <h1>Loading</h1> 
            : err !== '' ? err.message :
          users.map( (user)=>{
          return (
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank">
                <img src={user.avatar_url} style={{width: '100px'}}/>
              </a>
              <p className="card-text">{user.login}</p>
            </div>
            )
        })}
      </div>
    )
  }
}
