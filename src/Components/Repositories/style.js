import styled from 'styled-components';

export const ContainerRepositories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  `;

export const ImgRepositories = styled.img`
  border: 1px solid #a09a9a;
  border-radius: 50%;
  height: 300px;
  margin: 50px 20px 50px 20px;
`;

export const TextRepositories = styled.p`
  color:#a09a9a;
  font-size: 20px;
  font-weight: 100;
  padding-bottom: 10px;
  padding-left: 30px;

    a {
      color:#a09a9a;

      &:hover {
        color: white;
      }
    }
`;

export const ListRepositories = styled.ul`
  border-bottom: 1px solid #a09a9a;
  height: 55vh;
  margin: 50px 0;
  overflow: scroll;

    li {
      align-items: center; 
      background-color: #2e2e2e;
      border-radius: 60px;
      display: flex;
      justify-content: center;
      list-style: none;
      margin-bottom: 20px;
      padding: 10px 20px;
      width: 600px;

      a {
        background-color: #2e2e2e;
        color: white;
        font-size: 20px;
        text-decoration: none;
      }
    }

     li:hover {
      height: 50px;
    }
  `;

export const Alert = styled.p`
color: white;
text-align: center;
`;
