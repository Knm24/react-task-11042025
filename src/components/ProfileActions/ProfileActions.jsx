import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ProfileActions.module.css';

const ProfileActions = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.profileActions}>
      <button className={styles.settingsBtn} onClick={props.onSettingsClick}>
        {t('settings')}
      </button>
      <button className={styles.themeBtn}>{t('selectTheme')}</button>
    </div>
  );
};

export default ProfileActions;