import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileActions from '../ProfileActions/ProfileActions';
import Modal from '../Modal/Modal';
import styles from './Header.module.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { id: paramId } = useParams();
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const id = paramId || '1';

  useEffect(() => {
    import('../../data/data.json').then((data) => {
      let userData = data.default.find((d) => d.userId === id);

      if (!userData) {
        userData = data.default.find((d) => d.userId === '1');
      }

      if (userData) {
        setUser({
          name: userData.user.name,
          birthDate: userData.user.birthDate,
          age: userData.user.age,
          city: userData.user.city,
          status: t(userData.user.status),
        });
      }

      if (!userData) {
        setUser({
          name: 'Неизвестный пользователь',
          birthDate: 'N/A',
          age: 0,
          city: 'N/A',
          status: t('inactive'),
        });
      }
    });
  }, [id, t]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  if (user === null) {
    return <div>Загрузка...</div>;
  }

  const isRussian = i18n.language === 'ru';
  const isKazakh = i18n.language === 'kk';

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.profileSection}>
          <ProfileHeader user={user} />
          <div className={styles.languageSwitch}>
            <button
              className={isRussian ? styles.languageBtn + ' ' + styles.active : styles.languageBtn}
              onClick={() => changeLanguage('ru')}
            >
              Рус
            </button>
            <button
              className={isKazakh ? styles.languageBtn + ' ' + styles.active : styles.languageBtn}
              onClick={() => changeLanguage('kk')}
            >
              Каз
            </button>
          </div>
        </div>
        <div className={styles.actionsWrapper}>
          <ProfileActions onSettingsClick={handleOpenModal} />
        </div>
      </div>
      {isModalOpen ? <Modal onClose={handleCloseModal} /> : null}
    </header>
  );
};

export default Header;