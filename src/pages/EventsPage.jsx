import React from 'react';
import { useTranslation } from 'react-i18next';

const EventsPage = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('events')}</h2>
      <p>{t('events')} (пока пусто)</p>
    </div>
  );
};

export default EventsPage;