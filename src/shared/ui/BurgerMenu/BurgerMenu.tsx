import { MouseEvent, FC, useContext } from 'react';
import styles from './BurgerMenu.module.scss';
import { MenuContext } from '../../../app/providers/store/menu-active-context';

// type BurgerMenuProps = {
//   menuActive: boolean;
//   setMenuActive: (value: boolean) => void;
//   onClick?: (e: MouseEvent<HTMLDivElement>) => void;
// };
export const BurgerMenu = () => {
  const { isOpen, toggleState } = useContext(MenuContext);
  const toggleMenuActiveClass = isOpen ? styles.active : '';
  const onClickHandler = () => {
    toggleState();
  };

  return (
    <div className={styles.container} onClick={onClickHandler}>
      <button className={`${styles.burger} ${toggleMenuActiveClass}`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};
