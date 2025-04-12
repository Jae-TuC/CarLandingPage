import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
// import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-body relative overflow-hidden px-6 pt-12 pb-6 text-white sm:px-8 xl:px-[12rem]">
      <div className="absolute -top-20 -left-50 h-100 w-100 rounded-full bg-[#374A6D] opacity-15 blur-2xl sm:top-0 sm:-left-20" />
      <div className="absolute -right-60 -bottom-40 h-100 w-100 rounded-full bg-[#374A6D] opacity-15 blur-3xl sm:-bottom-[50%]" />
      <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 justify-self-center sm:grid-cols-2 xl:grid-cols-5">
        <div className="flex flex-col items-start gap-y-6 xl:col-span-2">
          <img src="../../assets/logo.png" alt="logo" className="h-6" />
          <p className="text-light block text-[13px] tracking-wide text-balance">
            We offer the best electric cars of the most recognized brands in the
            world.
          </p>
        </div>
        <div>
          <h3 className="text-title mb-4 text-lg font-semibold">Company</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-light text-sm">About</li>
            <li className="text-light text-sm">Cars</li>
            <li className="text-light text-sm">History</li>
            <li className="text-light text-sm">Shop</li>
          </ul>
        </div>

        <div>
          <h3 className="text-title mb-4 text-lg font-semibold">Information</h3>
          <ul className="flex flex-col gap-2">
            <li className="text-light text-sm">Request a quote</li>
            <li className="text-light text-sm">Find a dealer</li>
            <li className="text-light text-sm">Contact us</li>
            <li className="text-light text-sm">Services</li>
          </ul>
        </div>

        <div>
          <h3 className="text-title mb-4 text-xl font-semibold">Follow Us</h3>
          <div className="flex items-center gap-6">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <p className="text-light mt-28 text-center text-xs">
        &copy; 2025 Electric Cars. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
