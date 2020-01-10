import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import  SearchRepository from '../SearchRepository';
import { ContainerRepositories, ImgRepositories, TextRepositories, ListRepositories, Alert } from './style';

const Repositories =  ({ avatar, repo, error, submitHandler, searchRepos, input }) => {
  return (
  <Fragment>
    <SearchRepository
      placeholder={'Search Repository'} submitHandler={submitHandler} method={searchRepos} input={input} />
    <Alert>{error}</Alert> 
    <ContainerRepositories>
      {avatar ?  <span>
        <ImgRepositories src={avatar.avatar_url} alt='avatar'/>
        <TextRepositories >Login: {avatar.login}</TextRepositories>
        <TextRepositories >Github: <a href={avatar.html_url}>{avatar.html_url}</a></TextRepositories>
      </span> : null }
      {repo ? <ListRepositories>
        {repo.map((repo, idx) => <li key={idx}> <Link to={`/repos/${input}/${repo.name}`}>{repo.name}</Link></li>)}
       </ListRepositories> : null}
    </ContainerRepositories>
  </Fragment>
  )
};

export default Repositories;
