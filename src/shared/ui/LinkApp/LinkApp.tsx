import { Link, useMatch } from 'react-router-dom';
import { FC, ReactNode } from 'react';
import styles from './LinkApp.module.scss';

type LinkAppProps = {
    to: string;
    children: ReactNode;
};
export const LinkApp: FC<LinkAppProps> = (props: LinkAppProps) => {
    const { to, children, ...otherProps } = props;
    const match = useMatch(to);

    const style = {
        color: match
            ? `${styles.link} ${styles.active_link}`
            : `${styles.link}`,
    };
    return (
        <Link to={to} {...otherProps} style={style}>
            {children}
        </Link>
    );
};
