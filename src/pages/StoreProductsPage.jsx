import React from 'react';
import { useTranslation } from 'react-i18next';

const StoreProductsPage = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('products')}</h2>
      <p>{t('products')} (пока пусто)</p>
    </div>
  );
};

export default StoreProductsPage;