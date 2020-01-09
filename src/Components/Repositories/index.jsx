import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../service/Api'
import './style.css'

class Repositories extends Component {
  constructor(props){
    super(props)
    this.state = {
      myRepo: [],
      myAvatar: '',
      checkedName: true,
      checkedSize: true
    }
  }

  componentDidMount() {
    api.get("/users/grazidiandra/repos")
    .then(response => {
        this.setState({myRepo: response.data, myAvatar: response.data[0].owner })
        console.log(response.data)
    })
    .catch(e => console.log(e))
  }

  render() {
    const { myAvatar } = this.state
    return (
      <div className="Repositories-container">
        <span>
          <img className="Repositories-img" src={myAvatar.avatar_url} alt='avatar'/>
          <h3 className="Repositories-login">Login: {myAvatar.login}</h3>
          <h4 className="Repositories-git">Github:<a href={myAvatar.html_url}>{myAvatar.html_url}</a></h4>
        </span>
        <ul className="Repositories-list">
          {this.state.myRepo.map((repo, idx) => <li key={idx}> <Link to={`/repos/${repo.name}`}>{repo.name}</Link></li>)}
        </ul>
      </div>
    );
  }
}

export default Repositories;
