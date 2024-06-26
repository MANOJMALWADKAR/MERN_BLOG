import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span
          className="px-2 py-1
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
         rounded-lg text-white"
        >
          Namaste
        </span>
        Dosto
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
          className="hidden flex-nowrap lg:inline "
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link>
          <Button gradientMonochrome="cyan" outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <NavLink to="/"> Home</NavLink>
        </Navbar.Link>
        <Navbar.Link active={path === "/About"} as={"div"}>
          <NavLink to="/About">Abouts </NavLink>
        </Navbar.Link>
        <Navbar.Link active={path === "/Projects"} as={"div"}>
          <NavLink to="/Projects">Projects </NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
