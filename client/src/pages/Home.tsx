import React from 'react';

type HomeProps = {
  onStart: () => void;
};

export default function Home({ onStart }: HomeProps) {
  return (
    <div className="home">
      <div className="card">
        <div className="brand">My Posts</div>
        <h1>Welcome</h1>
        <p className="muted">
          This is the starter page. Click below to go to Login.
        </p>
        <button className="btn primary" type="button" onClick={onStart}>
          Go to Login
        </button>
      </div>
    </div>
  );
}
