// pages/api/callback.js


import axios from 'axios';

export default async function handler(req, res) {
  const code = req.query.code || null;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    params: {
      code: code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  try {
    const response = await axios(authOptions);
    const { access_token, refresh_token } = response.data;
    res.setHeader(
      'Set-Cookie',
      [
        `spotify_access_token=${access_token}; HttpOnly; Path=/; Max-Age=3600; Secure=${process.env.NODE_ENV !== 'development'}`,
        `spotify_refresh_token=${refresh_token}; HttpOnly; Path=/; Max-Age=${3600 * 24 * 30}; Secure=${process.env.NODE_ENV !== 'development'}`,
      ]
    );

    res.redirect('/tracks');
  } catch (error) {
    res.status(500).json({ error: 'Failed to authenticate' });
  }
}
