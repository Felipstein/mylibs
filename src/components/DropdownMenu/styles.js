import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);

  z-index: 1;

  ${({ isOpened }) => !isOpened && css`
    pointer-events: none;
    opacity: 0;
  `}
`;

export const Container = styled.div`
  position: fixed;
  right: 160px;
  min-width: 200px;
  padding: 10px 0;

  border-radius: 10px;
  
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  z-index: 2;

  nav {
    display: flex;
    flex-direction: column;

    a {
      padding: 5px 20px;
      text-decoration: none;
      font-weight: 500;
      color: #000;
      transition: background-color 0.12s ease-in-out;

      & + a {
        margin-top: 8px;
      }

      &:hover {
        background-color: lightgray;
      }
    }
  }

  ${({ isOpened }) => !isOpened && css`
    opacity: 0;
    pointer-events: none;
  `}
`;

export const Separator = styled.div`
  background-color: #bbb;
  width: 90%;
  height: 1px;
  margin: 8px auto;
`;
