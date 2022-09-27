import styled, { css } from 'styled-components';

export const Backdrop = styled.div`
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

export const DropShadow = styled.div`
  position: fixed;
  z-index: 2;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2));
  `;

export const Container = styled.div`
  position: fixed;
  /* right: 160px; */
  min-width: 200px;
  padding: 10px 0;

  border-radius: 10px;
  
  background-color: #fafafa;
  
  z-index: 2;
  
  nav {
    display: flex;
    flex-direction: column;
  }

  /* ${({ isOpened }) => !isOpened && css`
    opacity: 0;
    pointer-events: none;
  `} */

`;
