import { useEffect } from 'react';
import { useMask } from '@react-input/mask';
import { Button } from '../button/Button';
import styles from './modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const inputRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Связаться с нами</h2>
        <button
          className={styles.closeBtn}
          type='button'
          aria-label='Закрыть модальное окно'
          onClick={onClose}
        >
          <svg
            width='36'
            height='36'
            viewBox='0 0 36 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M26.7 28.9999L6 8.29999L8.3 6L29 26.6999L26.7 28.9999Z'
              fill='#0F0F17'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M26.7 6.00012L6 26.7L8.3 29L29 8.30011L26.7 6.00012Z'
              fill='#0F0F17'
            />
          </svg>
        </button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type='text'
            name='name'
            placeholder='Имя'
            required
          />
          <input
            ref={inputRef}
            className={styles.input}
            type='text'
            name='phone'
            placeholder='Телефон'
            required
          />

          <input
            className={styles.input}
            type='email'
            name='email'
            placeholder='E-mail'
            required
          />
          <label className={styles.checkbox} htmlFor='agreement'>
            <input type='checkbox' name='agreement' id='agreement' required />
            <span className={styles.checkmark}></span>
            <span className={styles.labelText}>
              Я согласен (-а) на обработку персональных данных
            </span>
          </label>

          <Button className={styles.submitBtn}>Отправить</Button>
        </form>
      </div>
    </div>
  );
};
