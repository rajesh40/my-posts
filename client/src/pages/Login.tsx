import React from 'react';

type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="auth-page">
      <div className="card auth-card">
        <div className="brand">My Posts</div>
        <h1>Welcome back</h1>
        <p className="muted">Sign in to continue.</p>

        <form className="form">
          <label className="field">
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>

          <label className="field">
            <span>Password</span>
            <input type="password" placeholder="••••••••" />
          </label>

          <button className="btn primary" type="button" onClick={onLogin}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
