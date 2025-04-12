import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

const Hamburger = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="sm:hidden">
      {isOpen ? (
        <MdOutlineClose
          className="text-2xl text-white transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <MdOutlineMenu
          className="text-2xl text-white transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </div>
  );
};

export default Hamburger;
