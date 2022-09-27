import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import AncoraStyled, { Separator } from './styles';

export default function DropdownItem({ separator, onClick, children }) {
  if (separator) {
    return <Separator />;
  }

  return (
    <AncoraStyled
      href="/"
      onClick={onClick}
      as={motion.a}
      variants={{
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
      }}
    >
      {children}
    </AncoraStyled>
  );
}

DropdownItem.propTypes = {
  separator: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

DropdownItem.defaultProps = {
  separator: false,
  onClick: null,
  children: null,
};
