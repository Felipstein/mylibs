import styled from 'styled-components';

export default styled.a`
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
`;

export const Separator = styled.div`
  background-color: #bbb;
  width: 90%;
  height: 1px;
  margin: 8px auto;
`;
