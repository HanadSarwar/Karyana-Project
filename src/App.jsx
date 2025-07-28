import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AdminLogin from './routes/AdminLogin';
import Dashboard, { DashboardStats } from './routes/Dashboard';
import Users from './routes/Users';
import ProductRoute from './routes/Product';
import Categories from './components/Categories/categories';
import Brands from './components/Brands/brands';
import Orders from './routes/Orders';
import Cities from './routes/Cities';
import Banners from './routes/Banners';
import Logs from './routes/Logs';
import PrivacyPolicy from './routes/PrivacyPolicy';
import TermConditions from './routes/TermConditions';

const ProtectedLayout = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardStats />} />
            <Route path="users" element={<Users />} />
            <Route path="categories" element={<Categories />} />
            <Route path="brands" element={<Brands />} />
            <Route path="products" element={<ProductRoute />} />
            <Route path="orders" element={<Orders />} />
            <Route path="cities" element={<Cities />} />
            <Route path="banner" element={<Banners />} />
            <Route path="log" element={<Logs />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermConditions />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
