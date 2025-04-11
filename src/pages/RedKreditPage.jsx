import React from 'react';
import { useTranslation } from 'react-i18next';

const RedKreditPage = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('redKredit')}</h2>
      <p>{t('redKredit')} (пока пусто)</p>
    </div>
  );
};

export default RedKreditPage;