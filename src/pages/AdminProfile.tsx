import { useSelector } from 'react-redux';
import { RootState } from '../store';

const AdminProfile = () => {
  const user = useSelector((state: RootState) => state.users);

  if (!user || !user.isAdmin) return <h1>Unauthorized</h1>;

  return (
    <div>
      <h1>Admin Profile</h1>
      <p>Username: {user.user}</p>
    </div>
  );
};

export default AdminProfile;