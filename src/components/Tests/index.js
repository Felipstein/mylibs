import { useState } from 'react';
import { motion } from 'framer-motion';

import { Background, Container } from './styles';

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

export default function Tests() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Background />
      <Container>
        <motion.button
          type="button"
          onClick={() => setIsOpened((prevState) => !prevState)}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              type: 'spring',
            },
          }}
        >
          {isOpened ? 'Escoder!' : 'Exibir!'}
        </motion.button>
        <motion.div
          className="items-container"
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
          <motion.span variants={itemVariants}>
            Item 1
          </motion.span>
          <motion.span variants={itemVariants}>
            Item 2
          </motion.span>
          <motion.span variants={itemVariants}>
            Item 3
          </motion.span>
        </motion.div>
      </Container>
    </>
  );
}
