import logo from '@/assets/images/logo_footer.svg';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt='' />
      <a
        className={styles.link}
        href='https://500na700.ru/'
        rel='noopener noreferrer'
        target='_blank'
      >
        Креативное агентство 500na700
      </a>
    </footer>
  );
};
