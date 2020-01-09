import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/Api';
import { ContainerRepositories, ImgRepositories, TextRepositories, ListRepositories } from './style';

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
    })
    .catch(e => console.log(e))
  }

  render() {
    const { myAvatar } = this.state
    return (
      <ContainerRepositories>
        <span>
          <ImgRepositories src={myAvatar.avatar_url} alt='avatar'/>
          <TextRepositories >Login: {myAvatar.login}</TextRepositories>
          <TextRepositories >Github: <a href={myAvatar.html_url}>{myAvatar.html_url}</a></TextRepositories>
        </span>
        <ListRepositories>
          {this.state.myRepo.map((repo, idx) => <li key={idx}> <Link to={`/repos/${repo.name}`}>{repo.name}</Link></li>)}
        </ListRepositories>
      </ContainerRepositories>
    );
  }
}

export default Repositories;
