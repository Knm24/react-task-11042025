import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import StorePage from './pages/StorePage';
import AccountPage from './pages/AccountPage';
import DepositsPage from './pages/DepositsPage';
import EventsPage from './pages/EventsPage';
import RedKreditPage from './pages/RedKreditPage';
import InstallmentsPage from './pages/InstallmentsPage';
import ReportsPage from './pages/ReportsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/store/:id/*" element={<StorePage />} />
          <Route path="/account/:id" element={<AccountPage />} />
          <Route path="/deposits/:id" element={<DepositsPage />} />
          <Route path="/events/:id" element={<EventsPage />} />
          <Route path="/redKredit/:id" element={<RedKreditPage />} />
          <Route path="/installments/:id" element={<InstallmentsPage />} />
          <Route path="/reports/:id" element={<ReportsPage />} />
          <Route path="/:id" element={<StorePage />} />
          <Route path="/" element={<Navigate to="/1" />} /> {/* Редирект */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;