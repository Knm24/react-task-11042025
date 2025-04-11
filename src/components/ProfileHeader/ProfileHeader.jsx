import React from 'react';
import avatar from '../../assets/avatar.png';
import styles from './ProfileHeader.module.css';

const ProfileHeader = (props) => {
  const user = props.user;

  return (
    <div className={styles.profileHeader}>
      <img src={avatar} alt="Avatar" className={styles.avatar} />
      <div className={styles.userInfo}>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.info}>
          {user.birthDate}, {user.age} лет
        </p>
        <p className={styles.info}>{user.city}</p>
        <p className={styles.status}>{user.status}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;