import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks/hooks';
import { Data } from '../../app/providers/store/data-slice';
import styles from './Shop.module.scss';
import Sidebar from '../../widgets/Sidebar/Sidebar';
import ProductList from './ProductsList/ProductList';

export const Shop = () => {
  // const { list } = useAppSelector(state => state.data);

  return (
    <>
      <div className={styles.container_img}>
        <h2> Shop</h2>
      </div>
      <div className={styles.container}>
        {/* <Sidebar /> */}
        <ProductList />
      </div>
    </>
  );
};
