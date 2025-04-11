import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  let userId = id;
  if (id === undefined) {
    userId = '1'; // Значение по умолчанию
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
         
          <NavLink
            to={`/store/${userId}`}
            className={(navData) => {
              if (navData.isActive) {
                return styles.navItem + ' ' + styles.active;
              }
              return styles.navItem;
            }}
          >
            {t('store')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/${userId}`}
            className={(navData) => {
              if (navData.isActive) {
                return styles.navItem + ' ' + styles.active;
              }
              return styles.navItem;
            }}
          >
            {t('account')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/deposits/${userId}`}
            className={(navData) => {
              if (navData.isActive) {
                return styles.navItem + ' ' + styles.active;
              }
              return styles.navItem;
            }}
          >
            {t('deposits')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/events/${userId}`}
            className={(navData) => {
              if (navData.isActive) {
                return styles.navItem + ' ' + styles.active;
              }
              return styles.navItem;
            }}
          >
            {t('events')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/redKredit/${userId}`}
            className={(navData) => {
              if (navData.isActive) {
                return styles.navItem + ' ' + styles.active;
              }
              return styles.navItem;
            }}
          >
            {t('redKredit')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/installments/${userId}`}
            className={(navData) => {
              if (navData.isActive) {
                return styles.navItem + ' ' + styles.active;
              }
              return styles.navItem;
            }}
          >
            {t('installments')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/reports/${userId}`}
            className={(navData) => {
              if (navData.isActive) {
                return styles.navItem + ' ' + styles.active;
              }
              return styles.navItem;
            }}
          >
            {t('reports')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;