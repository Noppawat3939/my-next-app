import layoutStyle from "../styles/Layout.module.css";
import { Navbar, Header } from "../components";

const Layout = (props) => {
  const { children } = props;
  const { main, container } = layoutStyle;

  return (
    <>
      <Navbar />
      <Header />
      <div className={container}>
        <main className={main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
