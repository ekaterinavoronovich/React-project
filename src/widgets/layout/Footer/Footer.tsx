import React, { memo } from 'react';
import styles from './Footer.module.scss';
import Logo from '../../../shared/ui/Logo/Logo';
import LogoImg from '../../../img/logo2.png.webp';
import { LinkApp } from '../../../shared/ui/LinkApp/LinkApp';
import { AppRoutes } from '../../../shared/const/AppRoutes';
import Social1 from '../../../img/social/facebook-logo-meta-svgrepo-com.svg';
import Social3 from '../../../img/social/instagram-logo-facebook-svgrepo-com.svg';
import Social4 from '../../../img/social/pinterest-180-svgrepo-com.svg';
import Social5 from '../../../img/social/telegram-svgrepo-com.svg';
import Arrow from '../../../img/logo/arrow-sm-right.svg';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.nav_left}>
          <Logo src={LogoImg}></Logo>

          <ul>
            <li>
              <LinkApp to={`${AppRoutes.SHOP}`}> Shop </LinkApp>
            </li>
            <li>
              <LinkApp to={`${AppRoutes.BLOG}`}> Blog </LinkApp>
            </li>
            <li>
              <LinkApp to={`${AppRoutes.CONTACT}`}>Contact </LinkApp>
            </li>
          </ul>
        </div>
        <div className={styles.nav_right}>
          <ul>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Shipping and Delivery</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.area_social}>
        <div className={styles.area_subscribe}>
          <form className={styles.subscription}>
            <input className={styles.add_email} type="email" placeholder="Your email here" />
            <button className={styles.submit_email} type="button">
              <img className="before-submit" src={Arrow} />
            </button>
          </form>
        </div>
        <div className={styles.social_link}>
          <a href="#">
            <img src={Social1} alt={Social1} />
          </a>
          <a href="#">
            <img src={Social3} alt={Social3} />
          </a>
          <a href="#">
            <img src={Social4} alt={Social4} />
          </a>
          <a href="#">
            <img src={Social5} alt={Social5} />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default memo(Footer);
