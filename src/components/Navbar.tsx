import { useState } from "react";
import { navItems } from "../constants/Contants";
import logo from "./../assets/logo.png";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [mobiledrawer, setmobiledrawer] = useState(false);

  const togglenavbar = () => {
    setmobiledrawer(!mobiledrawer);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-5 mx-auto relative text-sm">
          <div className="flex justify-between  items-center">
            <div className="flex-shrink-0 flex space-x-2">
              <img src={logo} className="h-10 w-10  mr-2" alt="Logo.png"></img>
              <span className=" text-xl tracking-tight">VirtualR</span>
            </div>

            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.herf}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="div hidden lg:flex justify-center space-x-12 items-center">
              <a className="border rounded-md py-2 px-3" href="#">
                Signin
              </a>
              <a className="border rounded-md py-2 px-3" href="#">
                Create Account
              </a>
            </div>

            <div className="lg:hidden md:flex flex-coln justify-end">
              <button onClick={togglenavbar}>
                {mobiledrawer ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobiledrawer && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12  flex felx-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((items, index) => (
                  <li key={index} className="py-4">
                    <a href={items.herf}>{items.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
