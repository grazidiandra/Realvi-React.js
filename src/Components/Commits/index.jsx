import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../service/Api'
import Search from '../Search';
import './style.css'

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
    const { name } = this.props.match.params;
    api.get(`/repos/grazidiandra/${name}/commits`)
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
      <div className='commits-conatiner'>
        <Search placeholder={'Search'} method={this.searchCommits} value={this.state.input}/>
        <ul className='commits-list'>
          {this.setCommits(this.state.input).slice(0, 20).map((e, idx) => <li key={idx}>{e.commit.message}</li>)}
        </ul>
        <Link  to='/' className='commits-btn'>BACK TO REPOSITORIES</Link>
      </div>
    );
  }
}

export default Commits;