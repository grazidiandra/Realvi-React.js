import React, { Component } from 'react';
import api from '../../service/Api';
import Search from '../SearchCommits';
import { ContainerCommits, ListCommits, StyledLink } from './style';

class Commits extends Component {
  constructor(props){
    super(props)
    this.state = {
      myCommits: [],
      input: ''
    }
    this.searchCommits = this.searchCommits.bind(this)
  }

  componentDidMount() {
    const { value, name } = this.props.match.params;
    api.get(`/repos/${value}/${name}/commits`)
    .then(response => {
        this.setState({myCommits: response.data })
    })
    .catch(e => console.log(e))
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
    return (
      <ContainerCommits className='commits-conatiner'>
        <Search placeholder={'Search Commit'} method={this.searchCommits} value={this.state.input}/>
        <ListCommits className='commits-list'>
          {this.setCommits(this.state.input).slice(0, 20).map((e, idx) => <li key={idx}>{e.commit.message}</li>)}
        </ListCommits>
        <StyledLink  to='/' className='commits-btn'>BACK TO REPOSITORIES</StyledLink>
      </ContainerCommits>
    );
  }
}

export default Commits;
