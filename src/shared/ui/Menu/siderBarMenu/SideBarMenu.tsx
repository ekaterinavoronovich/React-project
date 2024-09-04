import { FC, useContext } from 'react';
import styles from './SidebarMenu.module.scss';
import { AppRoutes } from '../../../const/AppRoutes';
import { LinkApp } from '../../LinkApp/LinkApp';
import { DataCategories } from '../../../../app/providers/store/dataCategories-slice';
import arrow from '../../../../img/logo/arrow-down.svg';
import { MenuContext } from '../../../../app/providers/store/menu-active-context';

type SideBarMenuProps = {
  data: Array<DataCategories>;
  // menuActive: boolean;
  // setMenuActive: (value: boolean) => void;
};
const SideBarMenu: FC<SideBarMenuProps> = (props: SideBarMenuProps) => {
  const { data = [] } = props;
  const { isOpen } = useContext(MenuContext);
  const toggleMenuActive = isOpen ? styles.active : '';
  console.log(toggleMenuActive);
  return (
    <div className={`${styles.sidebar_menu} ${toggleMenuActive}`}>
      <nav role="navigation" onClick={e => e.stopPropagation()}>
        <ul id="menu">
          <li>
            <LinkApp to={`${AppRoutes.MAIN}`}>Home</LinkApp>
          </li>
          <li>
            <details className={styles.submenu}>
              <summary>
                <LinkApp to={`${AppRoutes.SHOP}`}>Shop</LinkApp>
              </summary>

              <ul
                // className={`${styles.submenu_list} ${submenuActiveStyle}`}
                id="shop-submenu"
                // onClick={() => setSubmenuActive(false)}
              >
                {data.map(({ slug, name }) => (
                  <li key={slug}>
                    <div>
                      <LinkApp to={`/${AppRoutes.SHOP}/${name}`}>{name}</LinkApp>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
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
export default SideBarMenu;
