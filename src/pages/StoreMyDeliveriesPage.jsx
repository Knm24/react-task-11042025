import React from 'react';
import { useTranslation } from 'react-i18next';

const StoreMyDeliveriesPage = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('myDeliveries')}</h2>
      <p>{t('myDeliveries')} (пока пусто)</p>
    </div>
  );
};

export default StoreMyDeliveriesPage;