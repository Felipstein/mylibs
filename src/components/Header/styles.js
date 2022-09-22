import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  max-width: 1980px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;

  h1#logo {
    font-size: 48px;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    user-select: none;

    span {
      background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.2em;
    }
  }

  .profile-menus {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  `;

export const ProfileMenu = styled.div`
  ${(({ isOpened }) => (isOpened ? (
    css`
      button {
        color: #666;

        #icon {
          transform: rotate(180deg) scale(125%) translateY(-2px);
        }
      }
    `
  ) : (
    css`

      button {
        &:hover {
          color: #666;
        }

        &:hover #icon {
          transform: scale(125%) translateY(2px);
        }
      }

    `
  )))};

  button {
    position: relative;
    z-index: 2;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 24px;
    border: none;
    outline: 0;
    background: none;
    cursor: pointer;
    transition: color 0.15s ease-in-out;

    h2 {
      margin-right: 2px;
      text-transform: uppercase;
    }

    #icon {
      position: relative;
      top: 2px;
      transition: transform 0.25s ease-in-out;
    }

  }
`;
