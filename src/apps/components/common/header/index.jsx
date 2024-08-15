import React, { useState } from "react";
import HeaderLogo from "../../../../assets/images/header/Logo";
import Call from "../../../../assets/images/header/call";
import { Navbar } from "../../../../globals/mock-data/navbar";
import BurgerMenu from "../../../elements/burger-menu/burger-menu";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  return (
    <header className=" fixed  top-0 z-50 w-full bg-bg-color">
      <div className="container">
        <div className="flex justify-between items-center py-3">
          <div>
            <a href="/">
              <HeaderLogo />
            </a>
          </div>
          <nav className="hidden sm:flex justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <ul className="flex justify-between items-center gap-4 md:gap-6 lg:gap-8">
              {Navbar.map((nav, i) => (
                <li
                  className="font-future font-normal text-gray-500 hover:text-white cursor-pointer "
                  key={i}
                >
                  <a href={nav.id}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="hidden flex-col sm:flex-row items-center gap-2 mt-4 sm:mt-0 md:flex">
              <a
                href="tel:+998935653245"
                className="flex items-center gap-2 font-future font-semibold "
              >
                <Call />
                +998 93 565 32 45
              </a>
            </div>
          </nav>
          <button onClick={() => setOpenBurgerMenu(true)} className="sm:hidden">
            <RxHamburgerMenu />
          </button>
          {/* Modal */}
          <BurgerMenu
            openBurgerMenu={openBurgerMenu}
            setOpenBurgerMenu={setOpenBurgerMenu}
          />
        </div>
        <hr />
      </div>
    </header>
  );
};

export default Header;
