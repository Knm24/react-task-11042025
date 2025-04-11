import React from 'react';
import { useTranslation } from 'react-i18next';

const InstallmentsPage = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('installments')}</h2>
      <p>{t('installments')} (пока пусто)</p>
    </div>
  );
};

export default InstallmentsPage;