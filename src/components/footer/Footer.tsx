import logo from '@/assets/images/logo_footer.svg';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <img
          className={styles.logo}
          src={logo}
          alt=''
          width={103}
          height={124}
        />
        <a
          className={styles.link}
          href='https://500na700.ru/'
          rel='noopener noreferrer'
          target='_blank'
        >
          Креативное агентство 500na700
        </a>
      </div>
    </footer>
  );
};
