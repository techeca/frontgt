import UserLogin from "../../components/UserLogin";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi"
import { Button, Label, TextInput, Checkbox, Card } from 'flowbite-react'
import { HiMail, HiLockClosed } from 'react-icons/hi'
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";

export default function Login(){

    return(
        <div className='px-6'>
            <div className='h-screen gap-24 flex items-center justify-center xl:flex-row flex-col'>
                <UserLogin />
                <div className={`xl:max-w-[50%] xl:block hidden`}>
                    <img width={'auto'} height='auto' src='/img/workers.png'></img>
                </div>
            </div>
            {/*<div className={`w-full bg-[url('/img/loginfondo.png')] bg-cover`}></div>
                <UserLogin />
                <div className='absolute bottom-0 right-0 mr-12 mb-12 w-12 h-12 bg-white/50 rounded-full'>
                <HiOutlineQuestionMarkCircle className='text-5xl opacity-90 text-cyan-900/80 hover:text-cyan-900/50 cursor-pointer' />
            </div>*/}
        </div>
    )
}