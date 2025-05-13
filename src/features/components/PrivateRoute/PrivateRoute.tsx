import type { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../../store/store';

export const PrivateRoute: FC = () => {
    const isAuth = useAuthStore((state) => state.isAuth)
    if (!isAuth) {
        return <Navigate to="/auth" replace />
    }
    return <Outlet />
}