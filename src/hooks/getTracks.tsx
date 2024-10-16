import { GetServerSidePropsContext } from 'next';


export const getTracks = async (context: GetServerSidePropsContext) => {
  const { spotify_access_token } = context.req.cookies;

    if (!spotify_access_token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    const response = await fetch (`https://api.spotify.com/v1/me/top/tracks?limit=50`, {
      headers: {
        Authorization: `Bearer ${spotify_access_token}`,
      }
    })

    const tracks = await response.json();

    return {
      props: {
        tracks: tracks.items,
        totalTracks: tracks.total
      }
    }
  }