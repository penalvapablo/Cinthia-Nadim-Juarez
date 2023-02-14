import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import NavMobile from './NavMobile';
import Nav from './Nav';

const Header = ({ isInHomepage, heroTextBoxFn }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const mobileNavFn = () => {
    setMobileNav(!mobileNav);
    if (heroTextBoxFn != null) {
      heroTextBoxFn();
    }
  };

  // Preven scrolling when mobile nav activated
  if (typeof window !== 'undefined') {
    mobileNav
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }

  return (
    <>
      <Nav isInHomepage={isInHomepage} />
      <div className="relative z-20 lg:hidden">
        <div
          id="burger"
          className="landscape: absolute top-7 right-10">
          <button
            id="burger menu"
            aria-label="burger menu"
            onClick={mobileNavFn}>
            <FontAwesomeIcon
              icon={faBars}
              className="h-[30px] justify-items-end text-end text-primary"
            />
          </button>
        </div>
      </div>
      {mobileNav && (
        <NavMobile
          mobileNav={mobileNav}
          mobileNavFn={mobileNavFn}
          isInHomepage={isInHomepage}
        />
      )}
    </>
  );
};

export default Header;
