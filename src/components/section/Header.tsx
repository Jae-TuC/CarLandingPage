const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-body mx-auto overflow-hidden px-8 pb-12 transition-all duration-100 sm:px-12 lg:px-32">
      {children}
    </div>
  );
};

export default Header;
