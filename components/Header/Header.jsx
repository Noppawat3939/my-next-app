import headerStyle from "../../styles/Header.module.css";

const Header = () => {
  const { header_container } = headerStyle;

  return (
    <header className={header_container}>
      <h1>Header is here</h1>
    </header>
  );
};

export default Header;
