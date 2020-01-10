import React, { Component } from 'react';
import api from '../../service/Api';
import Header from '../Header';
import Router from '../../Router/Router';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      repo: [],
      avatar: '',
      input: '',
      error: ''
    };
    this.searchRepos = this.searchRepos.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    const { input } = this.state
    api.get(`/users/${input}/repos`)
    .then(response => {
        this.setState({ repo: response.data, avatar: response.data[0].owner, error: '' })
    })
    .catch(() => this.setState({error: 'User not found!' }) )
  };

  searchRepos(e) {
    let { value } = e.target;
    this.setState({
      input: value
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Router {...this.state} submitHandler={this.submitHandler} searchRepos={this.searchRepos} />
      </div>
    );
  }
}

export default Home;