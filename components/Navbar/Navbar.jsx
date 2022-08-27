import Link from "next/link";
import { useEffect, useState } from "react";
import navStyle from "../../styles/Navbar.module.css";

const NavList = [
  {
    url: "/",
    label: "home",
  },
  {
    url: "/about",
    label: "about",
  },
];

const Navbar = () => {
  const { nav_container, nav_container_active, nav_list } = navStyle;
  const [isShowNavbar, setIsShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleShowNavbar);
    return () => {
      window.removeEventListener("scroll", handleShowNavbar);
    };
  }, []);

  const handleShowNavbar = () => {
    if (window.scrollY > 200) {
      setIsShowNavbar(true);
    } else {
      setIsShowNavbar(false);
    }
  };

  return (
    <nav className={`${nav_container} ${isShowNavbar && nav_container_active}`}>
      <ul className={nav_list}>
        {NavList.map(({ label, url }) => (
          <li key={label}>
            <Link href={url}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
