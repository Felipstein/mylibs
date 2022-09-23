import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #6600ff;
  z-index: -1;
`;

export const Container = styled.div`
  width: 60%;
  margin: 300px auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  
  button {
    margin-bottom: 24px;
    padding: 7px 25px;
    border-radius: 10px;
    outline: 0;
    border: 2px solid transparent;
    width: 150px;
    
    background-color: black;
    color: white;
    font-weight: 500;
    font-size: 20px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
    
    cursor: pointer;

    &:hover {
      background-color: #555;
    }

    &:active {
      background-color: white;
      border-color: black;
      color: black;
    }
  }

  .items-container {
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 5px;
    padding: 12px 0;
    width: 250px;
    border-radius: 10px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);

    span {
      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        background-color: #ddd;
      }
    }
  }
`;
