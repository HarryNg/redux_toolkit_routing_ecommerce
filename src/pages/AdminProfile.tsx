import React from 'react';
import { useSelector } from 'react-redux';

const AdminProfile = () => {
  const user = useSelector((state) => state.users.user);

  if (!user || !user.isAdmin) return <h1>Unauthorized</h1>;

  return (
    <div>
      <h1>Admin Profile</h1>
      <p>Username: {user.username}</p>
    </div>
  );
};

export default AdminProfile;