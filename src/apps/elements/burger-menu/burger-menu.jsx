import React from "react";
import HeaderLogo from "../../../assets/images/header/Logo";
import { Navbar } from "../../../globals/mock-data/navbar";
import { IoClose } from "react-icons/io5";
const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu }) => {
  return (
    <>
      <div
        className={` ${
          openBurgerMenu
            ? "fixed flex flex-col z-10 w-full h-[100vh] top-0 right-0 left-0 bg-slate-800 translate-x-0 pt-5 pb-12 duration-75"
            : "fixed z-10 w-full h-[100vh] top-0 right-0 py-5 px-7   transition -translate-x-[100%]"
        }`}
      >
        <div className="flex items-center justify-between mx-6 mb-10">
          <a href="../../index.jsx">
            <HeaderLogo />
          </a>
          <button onClick={() => setOpenBurgerMenu(false)}>
            <IoClose />
          </button>
        </div>
        <ul className="flex flex-col h-3/6 justify-between items-center gap-4 md:gap-6 lg:gap-8">
          {Navbar.map((nav, i) => (
            <li
              className="font-future font-normal text-gray-500 hover:text-white cursor-pointer "
              key={i}
              onClick={() => setOpenBurgerMenu(false)}
            >
              <a href={nav.id}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
