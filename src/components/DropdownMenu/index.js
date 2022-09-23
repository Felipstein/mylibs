import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Container, Overlay, Separator } from './styles';

export default function DropdownMenu({ isOpened }) {
  return (
    <>
      <Overlay isOpened={isOpened} />
      <motion.div
        animate={isOpened ? 'open' : 'close'}
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          close: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        <Container isOpened={isOpened}>
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
      </motion.div>
    </>
  );
}

DropdownMenu.propTypes = {
  isOpened: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  isOpened: false,
};
