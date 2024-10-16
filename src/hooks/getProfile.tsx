import { GetServerSidePropsContext } from 'next';

export const getProfile = async (context: GetServerSidePropsContext) => {
  const { spotify_access_token } = context.req.cookies;

    if (!spotify_access_token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    const profileResponse = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${spotify_access_token}`,
      },
    });


    const profileData = await profileResponse.json();
    const profileImage = profileData.images?.[0]?.url || '/default_profile.png';
  
    return {
      props: {
        profileName: profileData.display_name, 
        profileImage: profileImage
      }
    }
  }