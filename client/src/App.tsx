import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [screen, setScreen] = useState<'home' | 'login' | 'dashboard'>('home');

  if (screen === 'home') {
    return <Home onStart={() => setScreen('login')} />;
  }

  if (screen === 'login') {
    return <Login onLogin={() => setScreen('dashboard')} />;
  }

  return <Dashboard onLogout={() => setScreen('login')} />;
}
