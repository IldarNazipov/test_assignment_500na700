import * as React from 'react';
import { clsx } from 'clsx';
import styles from './button.module.scss';

export const Button = ({
  children,
  className,
  ...props
}: React.ComponentProps<'button'>) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
