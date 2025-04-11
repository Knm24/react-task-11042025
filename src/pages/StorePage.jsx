import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StoreStatus from '../components/StoreStatus/StoreStatus';
import Sidebar from '../components/Sidebar/Sidebar';
import StoreOrdersPage from './StoreOrdersPage';
import StoreMyDeliveriesPage from './StoreMyDeliveriesPage';
import StoreProductsPage from './StoreProductsPage';
import styles from './StorePage.module.css';

const StorePage = () => {
  return (
    <div className={styles.storePage}>
      <Sidebar />
      <div className={styles.content}>
        <StoreStatus />
        <Routes>
          <Route path="orders" element={<StoreOrdersPage />} />
          <Route path="my-deliveries" element={<StoreMyDeliveriesPage />} />
          <Route path="products" element={<StoreProductsPage />} />
          <Route path="/" element={<StoreOrdersPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default StorePage;