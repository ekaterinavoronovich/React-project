import { useState } from 'react';
import styles from './Menu.module.scss';
import { LinkApp } from '../LinkApp/LinkApp';
import { AppRoutes } from '../../const/AppRoutes';
import arrow from '../../../img/logo/arrow-down.svg';
import { MenuProps } from '../Navbar/Navbar';

// type MenuProps = {
//   menuActive: boolean;
//   setMenuActive: (value: boolean) => any;
//   data: Array<DataCategories>;
// };
const Menu = (props: MenuProps) => {
  const { data = [] } = props;
  const [submenuActive, setSubmenuActive] = useState(false);
  const submenuActiveStyle = submenuActive ? styles.active : '';

  return (
    <div className={styles.menu}>
      <nav role="navigation" onClick={e => e.stopPropagation()}>
        <ul id="menu" className={styles.list_menu}>
          <li>
            <LinkApp to={`${AppRoutes.MAIN}`}>Home</LinkApp>
          </li>
          <li>
            <div className={styles.submenu} onClick={() => setSubmenuActive(!submenuActive)}>
              <LinkApp to={`${AppRoutes.SHOP}`}>Shop</LinkApp>
              <img className={styles.arrow_down} src={arrow} alt="arrow down" />
            </div>

            <ul className={`${styles.submenu_list} ${submenuActiveStyle}`} id="shop-submenu">
              {data.map(({ slug, name }) => (
                <li key={slug}>
                  <div>
                    <LinkApp to={`/${AppRoutes.SHOP}/${name}`}>{name}</LinkApp>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <LinkApp to={`/${AppRoutes.BLOG}`}>Blog</LinkApp>
          </li>
          <li>
            <LinkApp to={`/${AppRoutes.CONTACT}`}>Contact</LinkApp>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
