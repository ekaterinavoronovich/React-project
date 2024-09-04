import { useState, FC, useEffect, useMemo, useContext, useRef } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

import Logo from '../Logo/Logo';
import LogoImg from '../../../img/logo.png.webp';
import SideBarMenu from '../Menu/siderBarMenu/SideBarMenu';
import HeratImg from '../../../img/logo/heart.svg';
import UserImg from '../../../img/logo/user.svg';
import BagImg from '../../../img/logo/bag.svg';
import SearchImg from '../../../img/logo/search.svg';
import { DataCategories } from '../../../app/providers/store/dataCategories-slice';
import styles from './Navbar.module.scss';
import Menu from '../Menu/Menu';
import { MenuContext } from '../../../app/providers/store/menu-active-context';
import useOnClickOutside from '../../../app/hooks/onClickOutside';
export type MenuProps = {
  // menuActive: boolean;
  // setMenuActive: (value: boolean) => boolean;
  data: Array<DataCategories>;
};

export const Navbar: FC<MenuProps> = ({ data = [] }) => {
  // const [menuActive, setMenuActive] = useState(false);
  // const toggleMenuActiveHandler = {
  //    setMenuActive(!menuActive)};
  const { isOpen, toggleState } = useContext(MenuContext);
  const node = useRef();
  useOnClickOutside(node, () => {
    if (isOpen) {
      toggleState();
    }
  });
  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.nav_left}>
          <Logo src={LogoImg} />
          <BurgerMenu />
          <Menu data={data} />
        </div>
        <div className={styles.nav_right}>
          <div className={styles.search_area}>
            <form>
              <img src={SearchImg} alt="search button" />
              <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
            </form>
          </div>
          <div className={styles.right_section}>
            <div className={styles.favorite_area}>
              <a href="#">
                <img src={HeratImg} alt="Favorite area" />
              </a>
            </div>
            <div className={styles.login_area}>
              <a href="#">
                <img src={UserImg} alt="User login area" />
              </a>
            </div>
            <div className={styles.cart_area}>
              <a href="#" id="essenceCartBtn">
                <img src={BagImg} alt="Cart area button" />
                <span>{3}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <SideBarMenu data={data} />
    </>
  );
};
