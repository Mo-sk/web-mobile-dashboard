import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Map from '../components/map/Map';

export default function Home({
    user,
    setAuthState,
    setUser
}) {

    const signOutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setAuthState('login');
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className='flex flex-col w-full items-center text-5xl font-bold text-center'>
            <Map className='w-full' />
        </div> 
    )
}