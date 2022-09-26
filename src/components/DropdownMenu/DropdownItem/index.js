import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function DropdownItem({ children }) {
  return (
    <motion.a
      href="/"
      variants={itemVariants}
    >
      {children}
    </motion.a>
  );
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
};
