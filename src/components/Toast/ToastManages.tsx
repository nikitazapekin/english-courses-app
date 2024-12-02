import React from 'react';
import Toast from './Toast';
import { useToast } from '../../hooks/useToast';
import styles from './ToastManager.module.scss';

const ToastManager: React.FC = () => {
  const { toasts, addToast } = useToast();

  return (
    <div className={styles.container}>
      <button
        onClick={() => addToast('Это ваш новый тост! 🥳')}
        className={styles.button}
      >
        Показать тост
      </button>
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            onClose={() => console.log('Toast closed')}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastManager;
