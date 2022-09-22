import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import DropdownMenu from '../DropdownMenu';

import { Container, ProfileMenu } from './styles';

export default function Header() {
  const [isDropdownMenuOpened, setIsDropdownMenuOpened] = useState(true);

  return (
    <Container>
      <h1 id="logo">
        My
        <span>Libs</span>
      </h1>

      <div className="profile-menus">
        <ProfileMenu isOpened={isDropdownMenuOpened}>
          <button
            type="button"
            onClick={() => setIsDropdownMenuOpened((prevState) => !prevState)}
          >
            <h2>Luís Felipe</h2>
            <div className="icons">
              <FiChevronDown id="icon" size={28} />
            </div>
          </button>
          <DropdownMenu isOpened={isDropdownMenuOpened} />
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
