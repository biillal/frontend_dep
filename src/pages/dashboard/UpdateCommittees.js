import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { singleCommittee, updateCommittees } from '../../redux/apiCalls/committeesApiCalls';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Select } from '@chakra-ui/react';
const UpdateCommittees = () => {
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [univ, setUniv] = useState("")
    const [gender, setGender] = useState("")
    const [categoryCmt, setCategoryCmt] = useState("")
    const { id } = useParams()
    const { update } = useSelector((state) => state.committees)
    const { committeeSingle } = useSelector((state) => state.committees)
    console.log(id);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(singleCommittee(id))
    }, [])
    console.log(committeeSingle);
    const submitHandler = (e) => {

        const committee = { name, role, univ, gender, categoryCmt }
        dispatch(updateCommittees(id, committee));
        navigate('/dashboard')

    }
    console.log(update);
    return (
        <div className="h-screen bg-black">
            <Link to='/dashboard' className='text-start text-white p-5 text-2xl'>
            <i class="ri-arrow-left-line text-xl mt-6"></i> <span className=' text-white'>Dashboard</span>
            </Link>
            <div className=" flex justify-center ">
                <Card color="transparent" shadow={false} className='bg-white p-5'>
                    <Typography variant="h4" color="blue-gray">
                        Update Committees
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 bg-black$" onSubmit={submitHandler}>
                        <div className="mb-1 flex flex-col gap-6 ">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Name
                            </Typography>
                            <Input
                                size="lg"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200  focus:!boer-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                defaultValue={committeeSingle.name}
                            />
                            <Select placeholder='Select Role' defaultValue={committeeSingle.role} onChange={(e) => setRole(e.target.value)}>
                                <option >Rector</option>
                                <option >Dean</option>
                                <option >Co-Chair</option>
                                <option >President</option>
                            </Select>
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                University
                            </Typography>
                            <Input
                                size="lg"
                                onChange={(e) => setUniv(e.target.value)}
                                placeholder="University"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                defaultValue={committeeSingle.univ}
                            />
                            <Select placeholder='Select Gender' defaultValue={committeeSingle.gender} onChange={(e) => setGender(e.target.value)}>
                                <option >Pr</option>
                                <option >Dr</option>
                            </Select>
                            <Select placeholder='Select Gender' defaultValue={committeeSingle.categoryCmt} onChange={(e) => setCategoryCmt(e.target.value)}>
                                <option  >Honorary Commitee</option>
                                <option >General Chair</option>
                                <option >Organizing Commitee</option>
                                <option >Scientific Commitee</option>
                            </Select>
                        </div>

                        <Button className="mt-6" type="submit" fullWidth>
                            Update
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default UpdateCommittees
