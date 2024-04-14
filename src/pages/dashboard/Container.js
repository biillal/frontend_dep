import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import DashboardHome from './DashboardHome'

import UserDashb from './UserDashb'
import CreateAdmin from './CreateAdmin'
import { CommitteesDashb } from './CommitteesDashb'
import { CreateCommittees } from './CreateCommittees'
import { helix } from 'ldrs'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/apiCalls/userAdminApiCalls'
import Admins from './Admins'




function Container() {
    helix.register()
    const [container, setContainer] = useState('dashboard')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000)
    }, [])
    const dispatch = useDispatch()
    const handlelogout = ()=>{
        dispatch(logoutUser())
    }
    return (
        <div>
            {
                loading ?
                    (
                        <div className='flex lg:flex-row flex-col justify-between'>
                            <div className='lg:w-[20%] flex flex-col item-center bg-blue-900 h-screen p-4 '>
                                <Link to='/' className='w-[100%] flex justify-center '>
                                    <img src={logo} alt='' className='w-[45%] h-[60px] ' />
                                </Link>
                                <div className='flex flex-col justify-center w-[100%] h-[500px] gap-10 items-center '>
                                    <Text className='text-xl font-bold text-white cursor-pointer' onClick={() => setContainer('dashboard')}>Dashboard</Text>
                                    <Text className='text-xl font-bold text-white cursor-pointer' onClick={() => setContainer('committees')}>Committees</Text>
                                    <Text className='text-xl font-bold text-white cursor-pointer' onClick={() => setContainer('create-committees')}>Create committees</Text>
                                    <Text className='text-xl font-bold text-white cursor-pointer' onClick={() => setContainer('users')}>Users </Text>
                                    <Text className='text-xl font-bold text-white cursor-pointer' onClick={() => setContainer('create-admin')}>create admin</Text>
                                    <Text className='text-xl font-bold text-white cursor-pointer' onClick={() => setContainer('getall-admin')}>All admins</Text>
                                    <Text className='text-xl font-bold text-white cursor-pointer' onClick={handlelogout}>Logout</Text>
                                </div>
                            </div>

                            <div className='lg:w-[80%] p-6 h-screen overflow-scroll'>
                                {
                                    container === 'dashboard' ? <DashboardHome /> : null
                                }
                                {
                                    container === 'committees' ? <CommitteesDashb /> : null
                                }
                                {
                                    container === 'create-committees' ? <CreateCommittees /> : null
                                }
                                {
                                    container === 'users' ? <UserDashb /> : null
                                }
                                {
                                    container === 'create-admin' ? <CreateAdmin /> : null
                                }
                                {
                                    container === 'getall-admin' ? <Admins /> : null
                                }
                            </div>
                        </div>
                    ) :

                    <div className='h-screen shadow-lg flex justify-center items-center'>
                        <l-helix
                            className="text-3xl"
                            size="100"
                            speed="2.5"
                            color="black"
                            
                        ></l-helix>
                    </div>

            }
        </div>
    )
}

export default Container
