import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './OrderItem.module.css';

const OrderItem = ({ order }) => {
  const { t } = useTranslation();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div className={styles.orderItem}>
      <div className={styles.orderHeader} onClick={toggleDetails}>
        <h3>{order.id}</h3>
        <p>{order.name}</p>
        <button className={styles.detailsBtn}>
          {isDetailsOpen ? '⬆ Скрыть' : '⬇ Детали'}
        </button>
      </div>
      {isDetailsOpen && (
        <div className={styles.details}>
          <p>{order.details}</p>
        </div>
      )}
    </div>
  );
};

export default OrderItem;