import PropTypes from 'prop-types';

import { Container, Overlay, Separator } from './styles';

export default function DropdownMenu({ isOpened }) {
  return (
    <>
      <Overlay isOpened={isOpened} />
      <Container>
        <nav>
          <a href="/">Item 1</a>
          <a href="/">Item 2</a>
          <a href="/">Item 3</a>
          <a href="/">Item 4</a>
        </nav>
        <Separator />
        <nav>
          <a href="/">Item 5</a>
          <a href="/">Item 6</a>
        </nav>
        <Separator />
        <nav>
          <a href="/">Item 7</a>
        </nav>
      </Container>
    </>
  );
}

DropdownMenu.propTypes = {
  isOpened: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  isOpened: false,
};
