import React from "react";
import { Navbar } from "../../../../globals/mock-data/navbar";
import { facebook, insta, logo, tg } from "../../../../assets/images/contact";
import HeaderLogo from "../../../../assets/images/header/Logo";

const Footer = () => {
  return (
    <footer className="bg-services-bg  rounded-[20px]  py-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <a href="/">
              <img src={logo} />
            </a>
          </div>
          <div className="hidden sm:flex justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
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
          </div>
          <div className="hidden flex-col sm:flex-row items-center gap-x-4 mt-4 sm:mt-0 md:flex">
            <a
              href="https://web.telegram.org"
              className="flex items-center gap-2 font-future font-semibold "
            >
              <img src={tg} />
            </a>
            <a
              href="https://instagram.org"
              className="flex items-center gap-2 font-future font-semibold "
            >
              <img src={insta} />
            </a>
            <a
              href="https://facebook.org"
              className="flex items-center gap-2 font-future font-semibold "
            >
              <img src={facebook} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
