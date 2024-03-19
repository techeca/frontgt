import { Button, Label, TextInput, Checkbox, Card } from 'flowbite-react'
import { HiMail, HiLockClosed } from 'react-icons/hi'
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";

export default function UserLogin(){

    return(
        <Card className="sm:max-w-lg w-[90%] sm:p-6">
            <div>
                <p className='font-semibold text-slate-700'>GatoCósmico</p>
            </div>
            <h1 className='text-center text-2xl font-bold mb-2 text-cyan-950'>Bienvenido</h1>
            {/*<h2 className=''>¿No tienes cuenta? <span className='text-cyan-700'>Regístrate</span></h2>*/}
            <div>
                <div className='flex flex-col gap-6'>
                    <Button color={'light'} type='submit'>
                        <FcGoogle className='mr-2 h-5 w-5' />
                        Ingresar con Google
                    </Button>
                    <Button color={'light'} type='submit'>
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
            <form className="flex flex-col gap-6">
                <div className='flex md:flex-row flex-col md:gap-6 gap-3'>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="txtCorreo" value="Correo" className='text-sm' />
                        </div>
                        <TextInput className='fill-cyan-700' id="txtCorreo" icon={HiMail} type="email" placeholder="nombre@correo.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="txtContrasena" value="Contraseña" className='text-sm' />
                        </div>
                        <TextInput id="txtContrasena" type="password" icon={HiLockClosed} placeholder='********' required />
                    </div>
                 </div>
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-2'>
                        <Checkbox id="chbRecordar" className='hover:cursor-pointer' />
                        <Label htmlFor="chbRecordar">Recordar</Label>
                    </div>
                     <a className='text-sm font-light hover:cursor-pointer hover:underline text-cyan-700'>Recuperar contraseña</a>
                </div>
                <Button type="submit">Enviar</Button>
            </form>
        </Card>           
    )
}