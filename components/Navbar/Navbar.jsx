import Link from "next/link";
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
  const { nav_container, nav_list } = navStyle;

  return (
    <nav className={nav_container}>
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
