import React from 'react';
import { useTranslation } from 'react-i18next';

const AccountPage = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('account')}</h2>
      <p>{t('account')} (пока пусто)</p>
    </div>
  );
};

export default AccountPage;