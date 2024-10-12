import { GetServerSideProps } from 'next';

export const getTracks: GetServerSideProps = async (context) => {
  const { spotify_access_token } = context.req.cookies;

    if (!spotify_access_token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    const response = await fetch ('https://api.spotify.com/v1/me/top/tracks?limit=20', {
      headers: {
        Authorization: `Bearer ${spotify_access_token}`,
      }
    })

    const tracks = await response.json();

    // console.log(tracks['items'][0]['preview_url'])
    return {
      props: {
        tracks: tracks.items,
      }
    }
  }