import { useState } from "react";
import logo from "../../../assets/Logo.png";
import { navLink } from "../../../utils/constants";
import Hamburger from "./Hamburger";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-transparent py-[1.813rem] text-white">
      <nav className="relative flex items-center justify-between">
        <a href="#">
          <img src={logo} alt="" className="relative z-10 h-5 w-max" />
        </a>

        <ul className="hidden items-center gap-x-12 sm:flex">
          {navLink.map((link: string) => (
            <li key={link}>
              <a
                href="#"
                className="drop-shadow-first hover:text-first-alt font-exo text-[14px] hover:drop-shadow-[0_0_10px_var(--color-first-alt)] md:text-base"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 z-10 w-full"
          >
            <motion.ul
              transition={{ duration: 0.3 }}
              className="bg-container absolute top-0 left-0 z-60 flex w-full flex-col items-center gap-y-8 rounded-md py-16 sm:hidden sm:gap-x-12"
            >
              {navLink.map((link: string) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="drop-shadow-first hover:text-first-alt font-exo text-base hover:drop-shadow-[0_0_10px_var(--color-first-alt)]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </motion.ul>
            <button
              className="absolute top-4 right-0 z-60 h-full w-12"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MdOutlineClose className="text-2xl text-white sm:hidden" />
            </button>
          </motion.div>
        )}

        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </div>
  );
};

export default Navigation;
