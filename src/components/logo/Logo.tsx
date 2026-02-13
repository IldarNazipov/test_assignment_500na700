import logo from '@/assets/images/logo.svg';
import styles from './logo.module.scss';
import { Link } from 'react-router';

export const Logo = () => {
  return (
    <Link className={styles.link} to={'/'} aria-label='На главную'>
      <img
        className={styles.logo}
        src={logo}
        width={70}
        height={84}
        alt='500 на 700'
      />
    </Link>
  );
};
