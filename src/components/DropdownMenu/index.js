import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import {
  Container, Backdrop, Separator, DropShadow,
} from './styles';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
  close: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};
export default function DropdownMenu({ isOpened, handleClose }) {
  return (
    <>
      <Backdrop isOpened={isOpened} onClick={handleClose} />
      <DropShadow>
        <Container
          as={motion.div}
          initial={false}
          animate={isOpened ? 'open' : 'close'}
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.5,
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
          <nav>
            <motion.a
              href="/"
              variants={itemVariants}
            >
              Item 1
            </motion.a>
            <motion.a
              href="/"
              variants={itemVariants}
            >
              Item 2
            </motion.a>
            <motion.a
              href="/"
              variants={itemVariants}
            >
              Item 3
            </motion.a>
          </nav>
          <Separator
            as={motion.div}
            variants={itemVariants}
          />
          <nav>
            <motion.a
              href="/"
              variants={itemVariants}
            >
              Item 4
            </motion.a>
            <motion.a
              href="/"
              variants={itemVariants}
            >
              Item 5
            </motion.a>
          </nav>
          <Separator
            as={motion.div}
            variants={itemVariants}
          />
          <nav>
            <motion.a
              href="/"
              variants={itemVariants}
            >
              Item 6
            </motion.a>
          </nav>
        </Container>
      </DropShadow>
    </>
  );
}

DropdownMenu.propTypes = {
  isOpened: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

DropdownMenu.defaultProps = {
  isOpened: false,
};
