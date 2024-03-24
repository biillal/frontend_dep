import React, { useEffect } from 'react'

import { Text } from '@chakra-ui/react'
import MainLayout from '../../components/MainLayout'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCommittees } from '../../redux/apiCalls/committeesApiCalls';
import { motion } from 'framer-motion';
function Committees() {
    const { committees } = useSelector((state) => state.committees)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCommittees())
    }, [getAllCommittees])

    console.log(committees);
    return (
        <MainLayout>
            <div className='lg:pl-60 lg:pr-60 pl-7 flex flex-col gap-6 pt-24'>
                <div className=''>
                    <motion.span
                        className='text-3xl font-bold text-blue-900'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.2, duration: 0.7 }}
                    >
                        Honorary Commitee
                    </motion.span>
                    {
                        committees.map((cmt) => {
                            return (
                                <motion.div
                                    className='flex flex-col'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1.4 }}
                                    transition={{ staggerChildren: 0.2, duration: 1 }}
                                >
                                    {cmt.categoryCmt === "Honorary Commitee" ? (
                                        <div className='flex gap-2 mt-2'>
                                            <Text className='text-xl font-semibold text-gray-500'>{cmt.name}</Text> <span className='text-xl font-semibold text-gray-500'>({cmt.role},{cmt.univ}) </span>
                                        </div>
                                    ) : null}
                                </motion.div>
                            )
                        })
                    }

                </div>

                <div className=''>
                    <motion.span
                        className='text-3xl font-bold text-blue-900'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.2, duration: 0.7 }}
                    >
                        General Chair
                    </motion.span>
                    {
                        committees.map((cmt) => {
                            return (
                                <motion.div
                                    className='flex flex-col'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ staggerChildren: 0.2, duration: 1, delay: 0.2 }}
                                >
                                    {cmt.categoryCmt === "General Chair" ? (
                                        <span className='text-xl font-semibold text-gray-500'>{cmt.name}</span>
                                    ) : null}
                                </motion.div>
                            )
                        })
                    }
                </div>

                <div className=''>
                    <motion.span
                        className='text-3xl font-bold text-blue-900'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.2, duration: 0.7 }}
                    >
                        Organizing Commitee
                    </motion.span>
                    {
                        committees.map((cmt) => {
                            return (
                                <motion.div
                                    className='flex flex-col'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ staggerChildren: 0.2, duration: 1, delay: 0.2 }}
                                >
                                    {cmt.categoryCmt === "Organizing Commitee" ? (
                                        <span className='text-xl font-semibold text-gray-500'>{cmt.name}</span>
                                    ) : null}
                                </motion.div>
                            )
                        })
                    }
                </div>


                <div className=''>
                    <motion.span
                        className='text-3xl font-bold text-blue-900'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.2, duration: 0.7 }}
                    >
                        Scientific Commitee
                    </motion.span>
                    {
                        committees.map((cmt) => {
                            return (
                                <motion.div
                                    className='flex flex-col'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ staggerChildren: 0.2, duration: 1, delay: 0.2 }}
                                >
                                    {cmt.categoryCmt === "Scientific Commitee" ? (
                                        <div className='flex '>
                                            <span className='text-xl font-semibold text-gray-500'>{cmt.gender} .</span>
                                            <span className='text-xl font-semibold text-gray-500'>{cmt.name}</span>
                                            <span className='text-xl font-semibold text-gray-500'>({cmt.univ}) </span>
                                        </div>
                                    ) : null}
                                </motion.div>
                            )
                        })
                    }
                </div>

            </div>

        </MainLayout>
    )
}

export default Committees
