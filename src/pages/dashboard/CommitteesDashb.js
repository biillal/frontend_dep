import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from 'react-router-dom'

import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommittess, deleteCommittees, getAllCommittees, updateCommittees } from "../../redux/apiCalls/committeesApiCalls";
import { Select } from "@chakra-ui/react";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];

const TABLE_HEAD = ["Name", "Role", "University", "Category", "Date", "Edit", "Delete"];


export function CommitteesDashb() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [univ, setUniv] = useState("")
    const [gender, setGender] = useState("")
    const [categoryCmt, setCategoryCmt] = useState("")
    const { message } = useSelector((state) => state.committees);
    const [open, setOpen] = useState(false)
    const { committees } = useSelector((state) => state.committees)
    console.log(id);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submitHandler = (e) => {

        const committee = { name, role, univ, gender, categoryCmt }
        dispatch(updateCommittees(id, committee));
        alert('committees deleted successfully')
        window.location.reload();
    }
    const handleDelete = (id) => {
        dispatch(deleteCommittees(id))
        window.location.reload();
    }
    useEffect(() => {
        dispatch(getAllCommittees())
    }, [])
    return (
        <div className="relative">
            <Card className="h-screen overflow-auto w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Committees list
                            </Typography>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {committees.map(
                                (comt, index) => {
                                    const isLast = index === comt.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={comt.name}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex flex-col">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {comt.name}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {comt.role}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {comt.gender}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {comt.univ}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {comt.categoryCmt}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {new Date(comt.createdAt).toDateString()}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Link to={`/updateCommittees/${comt._id}`}>
                                                    <Tooltip content="Edit Committees" >
                                                        <IconButton variant="text" onClick={() => { setOpen(true) }}>
                                                            <PencilIcon className="h-4 w-4" onClick={() => setId(comt._id)} />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Link>
                                            </td>
                                            <td className={classes}>
                                                <Tooltip content="Delete Committees">
                                                    <IconButton variant="text" onClick={() => handleDelete(comt._id)}>
                                                        <i class="ri-delete-bin-6-fill text-xl text-red-700" ></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>

            {
                open ?
                    (
                        <div className="z-50 shadow-xl overflow-auto  bg-gray-100 rounded-lg fixed w-[50%]  -mt-[48%] ml-52  h-[600px] ">
                            <div className="p-3 text-end">
                                <i class="ri-close-line text-xl font-bold" onClick={() => setOpen(false)}></i>
                            </div>
                            <div className="">
                                <div className=" flex justify-center">
                                    <Card color="transparent" shadow={false}>
                                        <Typography variant="h4" color="blue-gray">
                                            Create New Committees
                                        </Typography>
                                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
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

                                            <Button className="mt-6" type="submit" fullWidth onClick={submitHandler}>
                                                Create
                                            </Button>
                                        </form>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    ) :
                    null
            }
        </div>


    );
}