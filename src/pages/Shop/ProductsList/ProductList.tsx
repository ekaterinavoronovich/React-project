import React, { useEffect, FC } from 'react';
import styles from './ProductList.module.scss';
import { useAppSelector } from '../../../app/hooks/hooks';
import { Data } from '../../../app/providers/store/data-slice';
import ProductItem from '../../../shared/ui/ProductItem';

const ProductList: FC<NonNullable<Data>> = () => {
  const { list, limit, total } = useAppSelector(state => state.data);
  // // const total = useAppSelector(state => state.data.total);
  // console.log(total);
  // const pages = Math.ceil(total / limit);
  // let i = 1;
  // const ArrayPage: number[] = [];
  // while (i < pages) {
  //   ArrayPage.map(i => i++);
  // }
  // console.log(ArrayPage);
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <p className={styles.total_products}>
          <span>{'183'}</span>
          products found
        </p>
        <form>
          <label htmlFor="sort_products">
            <span>sort by:</span>
          </label>
          <select name="sort_by" id="sort_products">
            <option selected value="highest">
              highest rated
            </option>
            <option value="newest">newest</option>
            <option value="descending">price: $$ - $</option>
            <option value="ascending">price: $ - $$</option>
          </select>
        </form>
      </div>
      <div className={styles.product_list}>
        <ul>
          {/* {list.map(({ id, title, category, price, discountPercentage, brand, images }) => (
            <li key={id}>
              <ProductItem
                id={id}
                title={title}
                category={category}
                price={price}
                discountPercentage={discountPercentage}
                brand={brand}
                images={images}
              />
            </li>
          ))} */}
        </ul>
      </div>
      <div className={styles.pagination}>{}</div>
    </div>
  );
};

export default ProductList;
