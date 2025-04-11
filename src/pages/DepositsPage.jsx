import React from 'react';
import { useTranslation } from 'react-i18next';

const DepositsPage = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('deposits')}</h2>
      <p>{t('deposits')} (пока пусто)</p>
    </div>
  );
};

export default DepositsPage;