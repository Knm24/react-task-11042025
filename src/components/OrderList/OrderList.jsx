import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './OrderList.module.css';

const OrderList = () => {
  const { t } = useTranslation();
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    import('../../data/orders.json').then((data) => {
      setOrders(data.default);
      setFilteredOrders(data.default);
    });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = orders.filter((order) => {
      const matchesNumber = order.number.toLowerCase().includes(query);
      const matchesName = order.name.toLowerCase().includes(query);
      if (matchesNumber) {
        return true;
      }
      if (matchesName) {
        return true;
      }
      return false;
    });

    setFilteredOrders(filtered);
  };

  return (
    <div className={styles.orderList}>
      <h2>{t('orderNumber')}</h2>
      <input
        type="text"
        placeholder={t('searchOrders')}
        value={searchQuery}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      {filteredOrders.length === 0 ? (
        <p className={styles.noOrders}>{t('noOrdersFound')}</p>
      ) : (
        <ul className={styles.orderItems}>
          {filteredOrders.map((order) => (
            <li key={order.id} className={styles.orderItem}>
              <div>
                <p className={styles.orderNumber}>{order.number}</p>
                <p className={styles.orderName}>{order.name}</p>
                <p className={styles.orderDate}>{order.date}</p>
                <p className={styles.orderStatus}>{t(order.status)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;