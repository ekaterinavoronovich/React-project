import { MouseEvent, FC } from 'react';
import styles from './BurgerMenu.module.scss';

type BurgerMenuProps = {
  menuActive: boolean;
  setMenuActive: (value: boolean) => void;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};
export const BurgerMenu: FC<BurgerMenuProps> = ({ menuActive, setMenuActive }) => {
  const toggleMenuActiveClass = menuActive ? styles.active : '';

  return (
    <div className={styles.container} onClick={() => setMenuActive(!menuActive)}>
      <button className={`${styles.burger} ${toggleMenuActiveClass}`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};
