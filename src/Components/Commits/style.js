import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerCommits = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0;
`;

export const ListCommits = styled.ul`  
  border-bottom: 1px solid #a09a9a;
  height: 60vh;
  margin-bottom: 50px;
  padding: 10px;
  overflow: scroll;

  li {
    background-color: #2e2e2e;
    border: none;
    border-radius: 60px;
    color:white;
    font-size: 18px;
    list-style: none;
    margin: 20px 0;
    padding: 10px 20px;
    width: 700px;
  }
`;

export const StyledLink = styled(Link)`
  background-color: #2e2e2e;
  border-radius: 60px;
  color: #a09a9a;
  padding: 10px 40px;
  text-decoration: none;
  transition: all 0.4s;

    &:hover{
      color: #fff;
      font-size: 15px;
    }
  `;
  