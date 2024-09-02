import { useEffect, FC, FunctionComponentElement } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import Button from '../../shared/ui/Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './HomePage.module.scss';
import { Data } from '../../app/providers/store/data-slice';
import ProductItem from '../../shared/ui/ProductItem/ProductItem';
import Topshop from '../../img/brand1.png';
import Brand2 from '../../img/brand2.png';
import Brand3 from '../../img/brand3.png';
import Brand4 from '../../img/brand4.png';
import Brand5 from '../../img/brand5.png';

export const Home: FC<Data> = () => {
  const { list } = useAppSelector(state => state.data);
  const products = list.products;
  // почему не работает slice ?
  //const products1 = products.slice(0, 5);
  //console.log(products1);

  return (
    <>
      <section className={styles.mane_banner}>
        <div className={styles.hero_content}>
          <h6>asoss</h6>
          <h2>New Collection</h2>
          <a href="#">
            <Button>view collection</Button>
          </a>
        </div>
      </section>
      <section className={styles.section_categories}>
        <div className={styles.categories_content}>
          <a href="/shop">clothing</a>
        </div>
        <div className={styles.categories_content}>
          <a>shoes</a>
        </div>
        <div className={styles.categories_content}>
          <a>accessories</a>
        </div>
      </section>
      <section className={styles.section_sale}>
        <div className={styles.content_sale}>
          <h6>-60%</h6>
          <h2>Global Sale</h2>

          <a href="#">
            <Button>buy now</Button>
          </a>
        </div>
      </section>
      <section className={styles.section_popular}>
        <h2>Popular Products</h2>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          onSwiper={swiper => console.log(swiper)}
          breakpoints={{
            490: {
              slidesPerView: 2,
              spaceBetween: 10,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
        >
          {products &&
            products.map(({ id, title, price, discountPercentage, brand, images }) => (
              <SwiperSlide key={id}>
                <ProductItem
                  id={id}
                  title={title}
                  price={price}
                  discountPercentage={discountPercentage}
                  brand={brand}
                  images={images}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
      <section className={styles.section_brands}>
        <ul className={styles.brand_list}>
          <li>
            <img src={Topshop} alt={Topshop} />
          </li>
          <li>
            <img src={Brand2} alt={Brand2} />
          </li>
          <li>
            <img src={Brand3} alt={Brand3} />
          </li>
          <li>
            <img src={Brand4} alt={Brand4} />
          </li>
          <li>
            <img src={Brand5} alt={Brand5} />
          </li>
        </ul>
      </section>
    </>
  );
};
