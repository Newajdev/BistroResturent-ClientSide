import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
   const {user} = useAuth()
    return (
        <div>
            <h2 className="text-2xl">Hi, <span className="text-green-600 font-semibold">{user.displayName}</span> Welcome Back </h2>
        </div>
    );
};

export default UserHome;