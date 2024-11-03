import { GetServerSidePropsContext } from 'next';

export const getArtists = async (context: GetServerSidePropsContext, time_range: string) => {
  const { spotify_access_token } = context.req.cookies;

    if (!spotify_access_token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    const response = await fetch (`https://api.spotify.com/v1/me/top/artists?time_range=${time_range}&limit=50`, {
      headers: {
        Authorization: `Bearer ${spotify_access_token}`,
      }
    })

    const artists = await response.json();

    return {
      props: {
        artists: artists.items,
        totalArtists: artists.total
      }
    }
  }