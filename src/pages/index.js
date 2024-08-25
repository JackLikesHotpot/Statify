// pages/index.ts
import { FC } from 'react';

export default function Home() {
  const handleLogin = () => {
    window.location.href = '/api/login';
  };

  return (
    <div>
      <h1>Spotify OAuth with Next.js</h1>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};
