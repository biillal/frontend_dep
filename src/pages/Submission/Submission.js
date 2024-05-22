import React, { useEffect, useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import MainLayout from "../../components/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { createRegistrations } from "../../redux/apiCalls/registrationApiCalls";
import { Select, Text } from "@chakra-ui/react";
import { getActive } from "../../redux/apiCalls/activeRegisterApiCalls";
import pdfImage from '../../assets/PDF.png'
import { topicsmap } from "../../utilis/topics";
import { useNavigate } from "react-router-dom";
export function Submission() {
    const dispatch = useDispatch()
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [institution, setInstitution] = useState('');
    const [institutionAddress, setInstitutionAddress] = useState('');
    const [ville, setVille] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [topic, setTopic] = useState('');
    const [file, setFile] = useState(null);
    const [disabled, setDisabled] = useState(true)

    const { actives } = useSelector((state) => state.activeRegister)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        if (!file) return alert("pdf file is requried")
        const formData = new FormData();
        formData.append("file", file);
        dispatch(createRegistrations({ nom, prenom, institution, institutionAddress, ville, phone, email, file, gender , topic }))
        navigate('/')
    }
    useEffect(() => {
        dispatch(getActive())
    }, [])
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => {

        if (nom.trim() === "" || prenom.trim() === "" || institution.trim() === "" || institutionAddress.trim() === "" || ville.trim() === "" || phone.trim() === "" || email.trim() === "" || gender.trim() === "") {
            alert('Please do not leave an entry blank')
        } else {
            !isLastStep && setActiveStep((cur) => cur + 1);
        }
    };
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <MainLayout>
            {
                actives.active ? (
                    <div className="pt-20 flex flex-col justify-center items-center h-auto w-[100%] py-4 px-8">
                        <Stepper
                            activeStep={activeStep}
                            isLastStep={(value) => setIsLastStep(value)}
                            isFirstStep={(value) => setIsFirstStep(value)}
                            className="lg:w-[50%]  "
                        >
                            <Step ><i class="ri-user-received-2-fill"></i></Step>
                            <Step ><i class="ri-file-word-2-line"></i></Step>
                        </Stepper>
                        <div className="w-[100%] ">
                            {
                                activeStep === 0 ? (
                                    <div className='flex justify-center items-center h-screen '>
                                        <div className=' lg:w-[50%] w-[100%] lg:bg-white lg:shadow-lg h-auto p-4 rounded-lg'>
                                            <Text className='text-xl font-bold mt-48 lg:-mt-12 text-center'>Please tell us more about yourself.</Text>
                                            <form className='lg:mt-10 mt-3'>
                                                {console.log(activeStep)}
                                                <div className='flex gap-5 w-[100%] lg:flex-row flex-col justify-center '>
                                                    <div className='flex flex-col gap-2 w-[100%] lg:w-[50%]'>
                                                        <Text className='text-lg font-semibold text-blue-900'>Nom <span className='text-red-600'>*</span> </Text>
                                                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e) => setNom(e.target.value)} type='text' placeholder='Entrez votre nom' />
                                                    </div>
                                                    <div className='flex flex-col gap-2 w-[100%] lg:w-[50%] '>
                                                        <Text className='text-lg font-semibold text-blue-900'>Prénom <span className='text-red-600'>*</span> </Text>
                                                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e) => setPrenom(e.target.value)} type='text' placeholder='Entrez votre prénom' />
                                                    </div>
                                                </div>
                                                <div className='flex gap-5 w-[100%] lg:flex-row flex-col justify-center mt-6'>
                                                    <div className='flex flex-col gap-2 w-[100%] lg:w-[50%]'>
                                                        <Text className='text-lg font-semibold text-blue-900'>Institution  <span className='text-red-600'>*</span> </Text>
                                                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e) => setInstitution(e.target.value)} type='text' placeholder='Entrez votre Institution ' />
                                                    </div>
                                                    <div className='flex flex-col gap-2 w-[100%] lg:w-[50%] '>
                                                        <Text className='text-lg font-semibold text-blue-900'>Institution Address <span className='text-red-600'>*</span> </Text>
                                                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e) => setInstitutionAddress(e.target.value)} type='text' placeholder='Entrez votre Institution address' />
                                                    </div>
                                                </div>
                                                <div className='flex gap-5 w-[100%] lg:flex-row flex-col justify-center mt-6'>
                                                    <div className='flex flex-col gap-2 w-[100%] lg:w-[50%]'>
                                                        <Text className='text-lg font-semibold text-blue-900'>Topic  <span className='text-red-600'>*</span> </Text>
                                                        <Select placeholder='Select topic' onChange={(e) => setTopic(e.target.value)}>
                                                            {
                                                                topicsmap?.map((topic) => {
                                                                    return (
                                                                        <option key={topic.id}>{topic.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </Select>
                                                    </div>
                                                    <div className='flex flex-col gap-2 w-[100%] lg:w-[50%]'>
                                                        <Text className='text-lg font-semibold text-blue-900'>Gender  <span className='text-red-600'>*</span> </Text>
                                                        <Select placeholder='Select Gender' onChange={(e) => setGender(e.target.value)}>
                                                            <option >Teacher-researchers</option>
                                                            <option >Post-graduate students</option>
                                                            <option >Industrial</option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div className='flex gap-5 w-[100%] lg:flex-row flex-col justify-center mt-6'>
                                                    <div className='flex flex-col gap-2 w-[100%] lg:w-[50%]'>
                                                        <Text className='text-lg font-semibold text-blue-900'>E-mail  <span className='text-red-600'>*</span> </Text>
                                                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Entrez votre E-mail ' />
                                                    </div>
                                                    <div className='flex flex-col gap-2 w-[100%] lg:w-[50%] '>
                                                        <Text className='text-lg font-semibold text-blue-900'>Phone number <span className='text-red-600'>*</span> </Text>
                                                        <input className='p-2 border border-blue-900 rounded-lg' onChange={(e) => setPhone(e.target.value)} type='text' placeholder='Entrez votre Phone number' />
                                                    </div>
                                                </div>
                                                <div className='flex flex-col mt-4 gap-2 w-[100%] lg:w-[50%]'>
                                                    <Text className='text-lg font-semibold text-blue-900'>Ville  <span className='text-red-600'>*</span> </Text>
                                                    <input className='p-2 border border-blue-900 rounded-lg' onChange={(e) => setVille(e.target.value)} type='text' placeholder='Entrez votre Ville ' />
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                ) :
                                    <div className="w-[100%]  ">
                                        <Text className="text-center text-2xl font-bold">Upload your resumé PDF</Text>
                                        <input
                                            type="file"
                                            id='upload'
                                            placeholder='Entre your product description...'
                                            className='hidden '
                                            multiple
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                        <div className="flex justify-center items-center cursor-pointer">
                                            <label htmlFor="upload">
                                                <img src={pdfImage} className="w-[60%] ml-12 cursor-pointer" alt={pdfImage} />
                                            </label>
                                        </div>

                                    </div>
                            }
                        </div>
                        <div className=" flex justify-between lg:w-[50%] w-[100%] mt-80 lg:mt-0 ">
                            <Button onClick={handlePrev} disabled={isFirstStep}>
                                Prev
                            </Button>

                            {
                                activeStep === 1 ?
                                    (
                                        <Button onClick={handleSubmit}>
                                            Enregistrer
                                        </Button>
                                    )
                                    :

                                    <Button onClick={handleNext} >
                                        <button type='submit' className='w-[100%] '  >Next</button>
                                    </Button>
                            }
                        </div>
                    </div>
                ) : (
                    <div className="pt-32 flex items-center justify-center mb-80">
                        <span className="mt-24 text-4xl text-center text-blue-900  ">Les inscriptions ont été clôturées.</span>
                    </div>

                )


            }
        </MainLayout >
    );
}