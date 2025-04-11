import React from 'react';
import { useParams } from 'react-router-dom';  
import { useTranslation } from 'react-i18next';

const ReportsPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();  

  if (!id) {
    return <div>{t('invalidReportId')}</div>;  
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{t('reports')}</h2>
      <p>{t('reportDetails')}: {id}</p> 
    </div>
  );
};

export default ReportsPage;
