import styles from './Profile.module.css'
import Image from 'next/image'

interface ProfileProps {
  displayName: string,
  profileImage: string;
}

const Profile: React.FC<ProfileProps> = ({ displayName, profileImage }) => {
  return  (
    <div className={styles['profile-top']}>
       <h1>User Profile</h1>
      <Image className={styles['profile-image']}
        src={profileImage}
        alt={`${displayName}'s profile`}
      />
      <h2>{displayName}</h2>
    </div>
  );
};

export default Profile;