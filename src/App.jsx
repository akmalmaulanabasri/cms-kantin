import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
const App = () => {
  const path = window.location.pathname;

  const checkAuth = () => {
    if (path !== "/auth/sign-in") {
      if (sessionStorage.getItem("auth_token") == null) {
        window.location.href = "/auth/sign-in";
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
