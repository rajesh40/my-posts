import React from 'react';

type DashboardProps = {
  onLogout: () => void;
};

export default function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="dashboard">
      <header className="topbar">
        <div className="brand">My Posts</div>
        <button className="btn ghost" type="button" onClick={onLogout}>
          Logout
        </button>
      </header>

      <main className="content">
        <h1>Dashboard</h1>
        <p className="muted">You are logged in.</p>
      </main>
    </div>
  );
}
