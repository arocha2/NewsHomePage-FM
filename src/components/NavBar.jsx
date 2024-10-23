import logo from "../assets/images/logo.svg";
import iconMenuOpen from "../assets/images/icon-menu.svg";
import iconMenuClose from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuList = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <nav className="flex items-center justify-between px-4 py-14">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div
        onClick={handleOpenMenu}
        className="hover:cursor-pointer opacity-100 md:opacity-0"
      >
        <img src={iconMenuOpen} alt="menuIcon" />
      </div>
      <div
        className={`transition-all duration-500 z-[1] md:z-auto md:static md:translate-x-0  w-[100%] fixed  top-0 right-0  bg-zinc-400/40 h-full ${
          menuOpen ? "translate-x-full  " : "translate-x-0  "
        } `}
      >
        <div
          className={` transition-all duration-500 p-6 flex flex-col md:flex-row  w-[70%]  md:w-full bg-white h-full absolute right-0 md:static `}
        >
          <div className="flex w-full justify-end  ">
            <img
              className="hover:cursor-pointer md:invisible"
              src={iconMenuClose}
              alt="menu-close "
              onClick={handleOpenMenu}
            />
          </div>
          <div
            className={`flex flex-col md:items-center md:justify-center md:flex-row gap-4 text-lg font-semibold pt-10 md:pt-0  `}
          >
            {menuList.map((menuLink) => (
              <p
                key={menuLink}
                className="text-zinc-400 hover:text-Soft-red hover:cursor-pointer transition-all"
              >
                {menuLink}
              </p>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
