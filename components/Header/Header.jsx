import headerStyle from "../../styles/Header.module.css";

const Header = () => {
  const { header_container, title } = headerStyle;

  return (
    <header className={header_container}>
      <h1 className={title}>
        Webdev is <span>Here</span>
      </h1>
    </header>
  );
};

export default Header;
