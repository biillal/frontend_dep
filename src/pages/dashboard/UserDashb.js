import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom'
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
import { deleteCommittees, getAllCommittees } from "../../redux/apiCalls/committeesApiCalls";
import { deleteUser, fetchAllRegistration } from '../../redux/apiCalls/registrationApiCalls';
import { activeReg, desactiveReg, getActive } from '../../redux/apiCalls/activeRegisterApiCalls';

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

const TABLE_HEAD = ["Nom", "Prénom", "Institution", "InstitutionAddress", "Ville", "Phone", "Email", "Gender", "pdf", "Date", "Delete"];
function UserDashb() {
  const { registrations } = useSelector((state) => state.registrations);
  const { actives , message } = useSelector((state) => state.activeRegister);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
    window.location.reload();
  }
  console.log(message);
  const desactivRg = () =>{
    dispatch(desactiveReg())
    window.location.reload();
  }
  const activRg = () =>{
    dispatch(activeReg())
    window.location.reload();
  }
  useEffect(() => {
    dispatch(fetchAllRegistration())
    dispatch(getActive())
  }, [])
  const showPdf = (pdf) => {
    window.open(`http://localhost:8000/files/${pdf}`, "_blank", "noreferrer")
  }

  return (
    <div>
      <Card className="h-screen overflow-auto w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Committees list
              </Typography>
            </div>
            <div className='mr-5'>
              {
                actives.active ? (
                  <button className='bg-red-800 p-2 text-white rounded-lg' onClick={desactivRg} >Désactive</button>
                ) : 
                (
                  <button className='bg-blue-800 p-2 text-white rounded-lg' onClick={activRg}>active</button>
                )
              }

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
              {registrations.map(
                (register, index) => {
                  const isLast = index === register.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  console.log(register.file);
                  return (
                    <tr key={register.nom}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {register.nom}
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
                            {register.prenom}
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
                            {register.institution}
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
                            {register.institutionAddress}
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
                            {register.ville}
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
                            {register.phone}
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
                            {register.email}
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
                            {register.gender}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <button onClick={() => showPdf(register.file)} className='text-center'>
                            <i class="ri-arrow-down-circle-line text-3xl"></i>
                          </button>

                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {new Date(register.createdAt).toDateString()}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Delete Committees">
                          <IconButton variant="text" onClick={() => deleteHandler(register._id)}>
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
    </div>
  )
}

export default UserDashb
