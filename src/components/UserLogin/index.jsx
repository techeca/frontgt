import { Button, Card } from 'flowbite-react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import LoginForm from '../forms/LoginForm';

export default function UserLogin(){

    return(
        <Card className="sm:max-w-lg w-[90%] sm:p-6 font-regular">
            <div>
                <p className='font-semibold text-slate-700'>GatoCósmico</p>
            </div>
            <h1 className='text-center text-2xl font-bold mb-2 text-cyan-950'>Bienvenido</h1>
            {<h2 className=''>¿No tienes cuenta? <a href='/register' className='text-cyan-700/50 cursor-not-allowed'>Regístrate</a></h2>}
            <div>
                <div className='flex flex-col gap-6'>
                    <Button disabled color={'light'} type='submit' className='cursor-not-allowed'>
                        <FcGoogle className='mr-2 h-5 w-5' />
                        Ingresar con Google
                    </Button>
                    <Button disabled color={'light'} type='submit' className='cursor-not-allowed'>
                        <IoLogoGithub className='mr-2 h-5 w-5' />
                        Ingresar con Github
                    </Button>
                </div>
            </div>
            <div className='grid grid-cols-3 items-center text-center mt-2'>
                <hr/>
                <a>or</a>
                <hr/>
            </div>
            <LoginForm />
        </Card>           
    )
}