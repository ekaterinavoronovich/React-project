import { FC } from 'react';
import styles from './Productitem.module.scss';
import { Data } from '../../../app/providers/store/data-slice';
import Button from '../../../shared/ui/Button/Button';

const Productitem: FC<Data> = (props: Data) => {
  const { id, title, price, discountPercentage, brand, images } = props;
  return (
    <div className={styles.container} id={id}>
      <div style={{ backgroundImage: `url(${images[0]})` }} className={styles.container_img}>
        <a>
          <Button>add to cart</Button>
        </a>
        <div className={styles.product_details}>
          <p className={styles.product_brand}>{brand}</p>
          <h5 className={styles.product_title}>{title}</h5>
          <p className={styles.product_price}>
            <span> {discountPercentage}</span>
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Productitem;
