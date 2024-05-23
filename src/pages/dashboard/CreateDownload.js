import { Input, Text } from '@chakra-ui/react'
import { Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import upload from '../../assets/upload.png'
import { useDispatch, useSelector } from 'react-redux'
import { createDownload } from '../../redux/apiCalls/downloadApiCalls'
import { FaCloudUploadAlt } from "react-icons/fa";

const CreateDownload = () => {
  const [title,setTitle] = useState('')
  const [file,setFile] = useState(null)
  const dispatch =useDispatch()
  const {message , loading} = useSelector((state)=>state.download)
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!title) return alert("title is requried")
    if (!file) return alert("pdf file is requried")
    dispatch(createDownload({title,file}))
  }

  return (
    <div className='flex justify-center items-star w-[100%] '>

      <form className='w-[50%] flex flex-col justify-center ' onSubmit={handleSubmit}>
        <h1 className='text-center text-3xl font-bold'>Create Download</h1>
        <div className='flex flex-col mt-10  gap-4'>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Title
          </Typography>
          <Input
            size="lg"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Please write title..!"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Text className="text-center text-2xl font-bold">Upload </Text>
          <input
            type="file"
            id='upload'
            placeholder='Entre your product description...'
            className='hidden '
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div className="flex justify-center items-center cursor-pointer">
            <label htmlFor="upload">
              <img src={upload} className="w-[30%] ml-12 cursor-pointer" alt={upload} />
            </label>
          </div>
        </div>
        <button className=''>
           {
            loading ? "loading"
               : " Create"
           }
        </button>
      </form>
    </div>
  )
}

export default CreateDownload
