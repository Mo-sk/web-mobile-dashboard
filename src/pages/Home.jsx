import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Map from '../components/map/Map';
import BarChart from '../components/BarChart/BarChart';

export default function Home({
    user,
    setAuthState,
    setUser
}) {


    return (
        <div className='flex flex-col w-full items-center text-5xl font-bold text-center'>     
            <Map/>
 
            <div className='h-1/2'>
                <BarChart/>
            </div>
        </div> 
    )
}