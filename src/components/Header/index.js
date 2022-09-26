import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

import DropdownMenu from '../DropdownMenu';

import { Container, ProfileMenu } from './styles';

export default function Header() {
  const [isDropdownMenuOpened, setIsDropdownMenuOpened] = useState(false);

  return (
    <Container>
      <h1 id="logo">
        My
        <span>Libs</span>
      </h1>

      <div className="profile-menus">
        <ProfileMenu isOpened={isDropdownMenuOpened}>
          <motion.button
            type="button"
            onClick={() => setIsDropdownMenuOpened((prevState) => !prevState)}
            whileTap={{ scale: 0.85 }}
          >
            <h2>Luís Felipe</h2>
            <div className="icons">
              <FiChevronDown id="icon" size={28} />
            </div>
          </motion.button>
          <DropdownMenu
            isOpened={isDropdownMenuOpened}
            handleClose={() => setIsDropdownMenuOpened(false)}
          />
        </ProfileMenu>
        <button
          type="button"
        >
          <span>icon menu</span>
        </button>
      </div>
    </Container>
  );
}
