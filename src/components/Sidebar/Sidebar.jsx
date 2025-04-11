import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';
import styles from './Sidebar.module.css';

import MyImage from '../../assets/chevron-down-300.png'; 



const Sidebar = () => {
  const { t } = useTranslation();
  const { id: paramId } = useParams();
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);

  const id = paramId || '1'; 

  useEffect(() => {
    import('../../data/data.json').then((data) => {
      const userData = data.default.find((d) => d.userId === id);
      if (userData) {
        setStores(userData.stores);
        setSelectedStore(userData.stores[0]); 
      }
      if (!userData) {
        setStores([]);
        setSelectedStore(null);
      }
    });
  }, [id]);

  const handleStoreChange = (e) => {
    const storeId = e.target.value;
    const store = stores.find((s) => s.storeId === storeId);
    setSelectedStore(store);
  };

  if (selectedStore === null) {
    return <div>Загрузка...</div>;
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.storeSelect}>
        <div data-store-id={selectedStore.storeId} onChange={handleStoreChange}>
        {stores.map((store, index) => {
          if (index === 0) {
            return (
              <span key={store.storeId} value={store.storeId}>
                <b>{store.name} </b>
                <a href="#" >&nbsp;<img src={MyImage} alt="Описание картинки" /></a>
              </span>            
            );
            
          }          
})}
        </div>
      </div>
      <ul className={styles.menuList}>
        <li>
          <NavLink
            to={`/store/${id}/`}
            className={(navData) =>
              navData.isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
            }
          >
            {t('mainPage')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/store/${id}/orders`}
            className={(navData) =>
              navData.isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
            }
          >
            {t('orders')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/store/${id}/my-deliveries`}
            className={(navData) =>
              navData.isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
            }
          >
            {t('myDeliveries')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/store/${id}/products`}
            className={(navData) =>
              navData.isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
            }
          >
            {t('products')}
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;