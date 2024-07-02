import { useSelector } from 'react-redux';
import { RootState } from '../store';

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.users);
  console.log(user)
  if (!user) return <h1>Please log in</h1>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user.user?.username}</p>
    </div>
  );
};

export default UserProfile;