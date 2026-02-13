import { Button } from '../button/Button';
import { Logo } from '../logo/Logo';
import styles from './header.module.scss';

export const Header = ({ onClick }: { onClick: () => void }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Button onClick={onClick}>Связаться с нами</Button>
    </header>
  );
};
