import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Header from './Header/Header';
import { Home } from '../../pages/Home/HomePage';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
