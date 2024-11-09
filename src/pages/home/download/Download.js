import { AbsoluteCenter, Box, Divider, IconButton, Text, Tooltip } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import telecherger from '../../../assets/telecharger.png'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDownload, getAllDownload } from '../../../redux/apiCalls/downloadApiCalls';
function Download() {
  const { downloads, message } = useSelector((state) => state.download);

  const { user } = useSelector((state) => state.admin);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllDownload())
  }, [])
  const showPdf = (pdf) => {
    console.log(pdf);
    window.open(pdf, "_blank", "noreferrer")
  }
  const handleDelete = (id) => {
    dispatch(deleteDownload(id))
    alert("deleted Successfully")
    window.location.reload()
  }
  return (
    <div className='lg:mt-[30px] lg:ml-[80px] lg:mr-[80px] pl-5 pr-5' >

      {
        downloads.length > 0 ? (
          <div>
            <Box position='relative' padding='10' className=''>
              <Divider color="blue" />
              <AbsoluteCenter bg='white' px='4'>
                <Text className='text-center text-3xl font-bold font-[Poppins]'>Download</Text>
              </AbsoluteCenter>
            </Box>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
              {
                downloads.map((download) => {
                  return (
                    <motion.div
                      className='relative border shadow-lg p-5 flex flex-col items-center rounded-lg'
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <i class="ri-file-word-fill text-4xl text-blue-900"></i>
                      <Text className='text-xl font-bold text-blue-900 mt-3 font-[Poppins]'>{download.title}</Text>
                      <button onClick={() => showPdf(download.file)}>
                        <img src={telecherger} alt='telechergement' className='h-[40px] ' />
                      </button>
                      {
                        user ? (
                          <span className='absolute left-4 top-0'>
                            <Tooltip content="Delete Committees">
                              <IconButton variant="text" onClick={() => handleDelete(download._id)}>
                                <i class="ri-delete-bin-6-fill text-xl text-red-700" ></i>
                              </IconButton>
                            </Tooltip>
                          </span>
                        ) : null
                      }
                    </motion.div>

                  )
                })
              }


            </div>
          </div>
        ) : null//<div className='flex justify-center items-center font-bold text-2xl text-gray-400'>No downloads</div>
      }

    </div>
  )
}

export default Download
