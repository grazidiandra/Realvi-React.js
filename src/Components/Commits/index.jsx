import React, { Component } from 'react';
import api from '../../service/Api';
import Search from '../SearchCommits';
import { ContainerCommits, ListCommits, StyledLink, Alert } from './style';

class Commits extends Component {
  constructor(){
    super()
    this.state = {
      myCommits: [],
      input: '', 
      error: ''
    }
    this.searchCommits = this.searchCommits.bind(this)
  }

  componentDidMount() {
    const { value, name } = this.props.match.params;
    api.get(`/repos/${value}/${name}/commits`)
    .then(response => {
        this.setState({myCommits: response.data })
    })
    .catch(() => this.setState({error: 'No commits' }) )
  }

  searchCommits(e) {
    let { value } = e.target;
    this.setState({
      input: value
    });
  }

  setCommits(value) {
    const myCommitsCopy = [...this.state.myCommits];
    return myCommitsCopy.filter(e => e.commit.message.toLowerCase().includes(value.toLowerCase()))
  }

  render() {
    const { input, error } = this.state
    return (
      <ContainerCommits className='commits-conatiner'>
        <Search placeholder={'Search Commit'} method={this.searchCommits} value={input}/>
        <ListCommits className='commits-list'>
        <Alert>{error}</Alert> 
          {this.setCommits(input).slice(0, 20).map((e, idx) => <li key={idx}>{e.commit.message}</li>)}
        </ListCommits>
        <StyledLink  to='/' className='commits-btn'>BACK TO PROFILE</StyledLink>
      </ContainerCommits>
    );
  }
}

export default Commits;
