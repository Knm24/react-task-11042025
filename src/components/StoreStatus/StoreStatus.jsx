import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import styles from './StoreStatus.module.css';

const StoreStatus = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    import('../../data/data.json').then((data) => {
      const userData = data.default.find((d) => d.userId === id);
      if (userData) {
        setStores(userData.stores);
        setSelectedStore(userData.stores[0]);
      }
      if (!userData) {
        setStores([]);
        setSelectedStore(null);
      }
    });
  }, [id]);



  if (selectedStore === null) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.storeStatus}>
      <div className={styles.section}>
        <strong>{t('store')}</strong>
        <div>
          {selectedStore.name}{' '}
          <span className={styles.tag + ' ' + styles[selectedStore.status]}>
            {t(selectedStore.status)}
          </span>
        </div>
        <div>
          {t('kassa')}{' '}
          <span className={styles.tag + ' ' + styles[selectedStore.kassa]}>
            {t(selectedStore.kassa)}
          </span>
        </div>
      </div>
      <div className={styles.section}>
        <strong>{t('quality')}</strong>
        <div>
          {selectedStore.qualityMetrics.qualityRating}{' '}
          <span className={styles.gray}>
            ({selectedStore.qualityMetrics.qualityPoints})
          </span>
        </div>
        <div>
          {selectedStore.qualityMetrics.cancellationRate}{' '}
          <span className={styles.gray}>
            {selectedStore.qualityMetrics.cancellationLabel}
          </span>
        </div>
      </div>
      <div className={styles.section}>
        <strong>{t('delivery')}</strong>
        {selectedStore.deliveryOptions.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
    </div>
  );
};

export default StoreStatus;