import { FC, ReactNode } from 'react';
import styles from './ProductItem.module.scss';
import Button from '../Button/Button';
import { Data } from '../../../app/providers/store/data-slice';
type ProductItemProps = Data & {
  data: Array<Data>;
};

const ProductItem: FC<ProductItemProps> = (props: ProductItemProps) => {
  const { id, title, price, discountPercentage, brand, images } = props;
  return (
    <div className={styles.product_container} id={id}>
      <div className={styles.product_img}>
        <img src={`${images}`} alt={title} />
        <a>
          <Button>add to cart</Button>
        </a>
      </div>
      <div className={styles.product_description}>
        <span>{brand}</span>
        <h5>{title}</h5>
        <div className={styles.product_price}>
          <span>{discountPercentage}</span>
          {price}
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
