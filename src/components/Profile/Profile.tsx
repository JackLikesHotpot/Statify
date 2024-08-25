interface ProfileProps {
  displayName: string,
  profileImage: string;
}

const Profile: React.FC<ProfileProps> = ({ displayName, profileImage }) => {
  return  (
    <div className="text-center p-6 bg-white shadow-md rounded-lg">
       <h1>User Profile</h1>
      <img
        src={profileImage}
        alt={`${displayName}'s profile`}
        style={{ borderRadius: '50%', width: '150px', height: '150px' }}
      />
      <h2>{displayName}</h2>
    </div>
  );
};

export default Profile;