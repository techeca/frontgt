import { Button, Card } from 'flowbite-react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import LoginForm from '../forms/LoginForm';

export default function UserLogin({ moreLogin }){
    const formDataUI = {
        sysName: 'GatoCósmico',
        title: 'Bienvenido',
        noAcc: '¿No tienes cuenta?',
        register: {
            text: 'Regístrate',
            ruta: '/register'
        },
        google: {
            text: 'Ingresar con Google'
        },
        github: {
            text: 'Ingresar con Github'
        },
        o:''
    } 

    return(
        <Card className="sm:max-w-lg w-[90%] sm:p-6 font-regular animate-fade-up">
            <div>
                <p className='font-semibold text-slate-700'>{formDataUI.sysName}</p>
            </div>
            <h1 className='text-center text-2xl font-bold mb-2 text-cyan-950'>{formDataUI.title}</h1>
            {<h2>{formDataUI.noAcc} <a className='text-cyan-700/50 cursor-not-allowed'>{formDataUI.register.text}</a></h2>}
            <>
            {moreLogin ? 
                <div className='flex flex-col gap-6'>
                    <Button disabled color={'light'} type='submit' className='cursor-not-allowed'>
                        <FcGoogle className='mr-2 h-5 w-5' />
                        {formDataUI.google.text}
                    </Button>
                    <Button disabled color={'light'} type='submit' className='cursor-not-allowed'>
                        <IoLogoGithub className='mr-2 h-5 w-5' />
                        {formDataUI.github.text}
                    </Button>
                </div>
            :
                <></>
            }
            </>
            <div className='grid grid-cols-3 items-center text-center mt-2'>
                <hr/>
                <a>{formDataUI.o}</a>
                <hr/>
            </div>
            <LoginForm />
        </Card>           
    )
}