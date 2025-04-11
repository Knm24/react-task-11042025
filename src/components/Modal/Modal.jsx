import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Modal.module.css';

const Modal = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>{t('modalTitle')}</h2>
        <p className={styles.modalText}>{t('modalText')}</p>
        <button className={styles.closeButton} onClick={props.onClose}>
          {t('close')}
        </button>
      </div>
    </div>
  );
};

export default Modal;