
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommittess } from "../../redux/apiCalls/committeesApiCalls";
import { Select } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
export function CreateCommittees() {
    const toast = useToast()
    const [selectRole, setSelectRole] = useState("Select Role")
    const [selectGender, setSelectGender] = useState("Select Gender")
    const [selectCategory, setSelectCategory] = useState("Select Category of committees")
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [univ, setUniv] = useState("")
    const [gender, setGender] = useState("")
    const [categoryCmt, setCategoryCmt] = useState("")
    const { message } = useSelector((state) => state.committees);
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createCommittess({ name, role, univ, gender, categoryCmt }));
        window.location.reload(); 
        
    }
    console.log(message);
    return (
        <div className=" flex justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Create New Committees
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submitHandler}>
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Select placeholder='Select Role' onChange={(e) => setRole(e.target.value)}>
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
                        />
                        <Select placeholder='Select Gender' onChange={(e) => setGender(e.target.value)}>
                            <option >Pr</option>
                            <option >Dr</option>
                        </Select>
                        <Select placeholder='Select Gender' onChange={(e) => setCategoryCmt(e.target.value)}>
                            <option  >Honorary Commitee</option>
                            <option >General Chair</option>
                            <option >Organizing Commitee</option>
                            <option >Scientific Commitee</option>
                        </Select>
                    </div>

                    <Button className="mt-6" type="submit" fullWidth>
                        Create
                    </Button>
                </form>
            </Card>
        </div>
    );
}