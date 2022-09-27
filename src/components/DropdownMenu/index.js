import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import DropdownItem from './DropdownItem';

import {
  Container, Backdrop, DropShadow,
} from './styles';

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
            <DropdownItem>
              Item 1
            </DropdownItem>
            <DropdownItem>
              Item 2
            </DropdownItem>
            <DropdownItem>
              Item 3
            </DropdownItem>
            <DropdownItem separator />
            <DropdownItem>
              Item 4
            </DropdownItem>
            <DropdownItem>
              Item 5
            </DropdownItem>
            <DropdownItem separator />
            <DropdownItem>
              Item 6
            </DropdownItem>
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
