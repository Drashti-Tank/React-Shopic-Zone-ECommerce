import React from 'react'
import { Navigate } from 'react-router-dom'

function RequireAuth({ children }) {
    const currentUser = localStorage.getItem('TOKEN');
    return currentUser ? children : <Navigate to='/' replace />;
}

export default RequireAuth;