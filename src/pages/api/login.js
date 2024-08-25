// pages/api/login.js

export default function handler(req, res) {
  const scope = 'user-read-private user-read-email';
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const clientId = process.env.SPOTIFY_CLIENT_ID;

  const scopes = [
    "user-read-private",
    "user-read-email",
    "user-library-read",
    "user-top-read"
  ].join(' ');

  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scopes
  )}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  res.redirect(authUrl);
}