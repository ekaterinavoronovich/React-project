import { Navbar } from '../../../shared/ui/Navbar/Navbar';
import Cart from '../../Cart/Cart';
import styles from './Header.module.scss';
import { useAppSelector } from '../../../app/hooks/hooks';
// import useOnClickOutside from '../../../app/hooks/onClickOutside';

const Header: React.FC = () => {
  const { list } = useAppSelector(state => state.categories);
  return (
    <header className={styles.header}>
      <Navbar data={list} />
    </header>
  );
};
export default Header;
