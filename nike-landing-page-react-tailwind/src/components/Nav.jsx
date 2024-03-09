import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="px-6 py-8 absolute z-10 top-0 left-0 w-full">
      <nav className="flex justify-between items-center max-container w-full">
        <a href="/">
          <img src={headerLogo} width={130} height={30} alt="Logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-md:hidden max-lg:gap-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg max-lg:text-base text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex max-md:hidden">
          <a
            href="/"
            className="text-slate-900 text-lg max-lg:text-base ml-auto"
          >
            sign in / Explore now
          </a>
        </div>

        <div className="max-md:block hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
