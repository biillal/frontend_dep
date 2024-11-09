import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout'
import HeaderHome from './header-home/HeaderHome'
import Download from './download/Download'
import ConfirenceHome from './confirence-home/ConfirenceHome'
import DateIm from './importent-date/DateIm'
import loading1 from '../../assets/loading1.mp4'
import { helix } from 'ldrs';
import Speakers from './Speakers/Speakers'
function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000);
  }, [setTimeout])
  helix.register()
  return (

    < div >
    {
      loading?((
        <MainLayout>
          <HeaderHome />
          <ConfirenceHome />
          <Download />
          <Speakers/>
        </MainLayout>
      ))
          :
  (
    <div className='h-screen flex justify-center items-center w-[100%] '>
      <l-helix
        className="text-3xl"
        size="100"
        speed="2.5"
        color="black"

      ></l-helix>
    </div>
  )
}
    </div >
  )
}

export default Home
