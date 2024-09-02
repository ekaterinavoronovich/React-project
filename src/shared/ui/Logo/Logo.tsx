import { FC } from 'react';
import styles from './Logo.module.scss';
type LogoProps = {
  src: string;
};

const Logo: FC<LogoProps> = (props: LogoProps) => {
  return (
    <div>
      <a href="/">
        <img src={props.src} alt="logo store" className={styles.logo} />
      </a>
    </div>
  );
};

export default Logo;
