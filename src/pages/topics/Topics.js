import React from 'react'
import MainLayout from '../../components/MainLayout'
import { Card, CardBody, Divider, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { topics } from '../../components/topicscmpnents'
import { motion } from 'framer-motion'
function Topics() {
    return (
        <MainLayout>
            <div className='lg:pl-40 lg:pr-40 pt-20'>
                <Text className='text-3xl font-bold text-center mt-6'>Topics</Text>
                <div className='grid lg:grid-cols-3 grid-cols-1 p-3 lg:p-0 gap-4 '>
                    {
                        topics.map((topic,i) => {
                            return (
                                <motion.div
                                    
                                   initial={{ opacity: 0 , translateX:-50 , scale:0.5}}
                                   whileInView={{ opacity: 1 , translateX:0 ,scale:1}}
                                   transition={{ duration: 1.3 , delay:topic._id * 0.1}}>
                                    <Card maxW='sm' key={topic.id} height={310}>
                                        <CardBody>
                                            <motion.img
                                                initial={{scale:1}}
                                                whileHover={{scale:1.9}}
                                                transition={{duration:1 , delay:0.6}}
                                                src={topic.image}
                                                alt='Green double couch with wooden legs'
                                                className='h-[200px] '
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading size='md'>{topic.title}</Heading>

                                            </Stack>
                                        </CardBody>
                                        <Divider />
                                    </Card>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </MainLayout>
    )
}

export default Topics
