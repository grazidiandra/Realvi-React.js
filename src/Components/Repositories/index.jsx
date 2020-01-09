import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/Api';
import SearchRepository from '../SearchRepository';
import { ContainerRepositories, ImgRepositories, TextRepositories, ListRepositories, Alert } from './style';

class Repositories extends Component {
  constructor(props){
    super(props)
    this.state = {
      repo: [],
      avatar: '',
      checkedName: true,
      checkedSize: true,
      input: '',
      error: ''
    }
    this.searchRepos = this.searchRepos.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler(e) {
    e.preventDefault();
    const { input } = this.state
    api.get(`/users/${input}/repos`)
    .then(response => {
        this.setState({ repo: response.data, avatar: response.data[0].owner, error: '' })
    })
    .catch(() => this.setState({error: 'User not found!' }) )
  }

  searchRepos(e) {
    let { value } = e.target;
    this.setState({
      input: value
    });
  }

  render() {
    const { avatar, repo, error } = this.state
    console.log(error)
    return (
      <Fragment>
        <SearchRepository placeholder={'Search Repository'} submitHandler={this.submitHandler} method={this.searchRepos} value={this.state.input} />
         <Alert>{error}</Alert> 
        <ContainerRepositories>
          {avatar ?  <span>
            <ImgRepositories src={avatar.avatar_url} alt='avatar'/>
            <TextRepositories >Login: {avatar.login}</TextRepositories>
            <TextRepositories >Github: <a href={avatar.html_url}>{avatar.html_url}</a></TextRepositories>
          </span> : null }
          {repo ? <ListRepositories>
            {repo.map((repo, idx) => <li key={idx}> <Link to={`/repos/${repo.name}`}>{repo.name}</Link></li>)}
           </ListRepositories> : null}
        </ContainerRepositories>
      </Fragment>
    );
  }
}

export default Repositories;
