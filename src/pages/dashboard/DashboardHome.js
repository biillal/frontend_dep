import { Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCommittees } from '../../redux/apiCalls/committeesApiCalls'
import { fetchAllRegistration } from '../../redux/apiCalls/registrationApiCalls'
import { getAllAdmin } from '../../redux/apiCalls/userAdminApiCalls'

function DashboardHome() {
  const { committees } = useSelector((state) => state.committees)
  const { registrations } = useSelector((state) => state.registrations)
  const { users } = useSelector((state) => state.admin)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCommittees())
    dispatch(fetchAllRegistration())
    dispatch(getAllAdmin())
  }, [])
  return (
    <div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-7'>
        <div class="max-w-sm p-6 flex flex-col justify-center items-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Text>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">Committees</h5>
          </Text>
          <p class="mb-3  text-4xl font-bold dark:text-gray-400">{committees.length} </p>
        </div>
        <div class="max-w-sm p-6 flex flex-col justify-center items-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Text>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">Users Registration</h5>
          </Text>
          <p class="mb-3  text-4xl font-bold dark:text-gray-400">{registrations.length} </p>
        </div>
        <div class="max-w-sm p-6 flex flex-col justify-center items-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Text>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">Admins</h5>
          </Text>
          <p class="mb-3  text-4xl font-bold dark:text-gray-400">{users.length} </p>
        </div>

      </div>
    </div>
  )
}

export default DashboardHome
