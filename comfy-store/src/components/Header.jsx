import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/user/UserSlice';
import { clearCart } from '../features/cart/CartSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userState.user)
    const handleLogoutUser = () => {
        navigate("/")
        dispatch(logoutUser())
        dispatch(clearCart())
    }
    return (
        <header className='bg-neutral py-2 text-neutral-content'>
            <div className="align-element flex justify-center sm:justify-end">
                {/* USERS */}
                {/* LINKS */}
                {user ? (
                    <div className='flex gap-x-2 sm:gap-x-8 items-center'>
                        <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
                        <button className='btn btn-xs btn-outline btn-primary' onClick={handleLogoutUser}>logout</button>
                    </div>
                ) : (
                    <div className="flex gap-x-6 justify-center items-center">
                    <Link to="/login" className='link link-hover text-xs sm:text-sm'>Sign In</Link>
                    <Link to="/register" className='link link-hover text-xs sm:text-sm'>Create Account</Link>
                </div>
                )}
                
            </div>
        </header>
    )
}

export default Header