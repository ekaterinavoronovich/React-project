import { Navbar } from '../../../shared/ui/Navbar/Navbar';
import Cart from '../../Cart/Cart';
import styles from './Header.module.scss';
import { useAppSelector } from '../../../app/hooks/hooks';
import { MenuContextProvider, MenuContext } from '../../../app/providers/store/menu-active-context';
import useOnClickOutside from '../../../app/hooks/onClickOutside';
import { useContext, useRef } from 'react';

const Header: React.FC = () => {
  const { list } = useAppSelector(state => state.categories);
  const { isOpen, toggleState } = useContext(MenuContext);
  const node = useRef();
  useOnClickOutside(node, () => {
    if (isOpen) {
      toggleState();
    }
  });
  return (
    <header className={styles.header} ref={node}>
      <MenuContextProvider>
        <Navbar data={list} />
      </MenuContextProvider>
    </header>
  );
};
export default Header;
