import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import { HiMail, HiLockClosed } from 'react-icons/hi'

export default function RegisterForm(){

    return(
        <form className="flex flex-col gap-6">
            <div className='flex md:flex-row flex-col md:gap-6 gap-3'>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="txtNombre" value="Nombre" className='text-sm' />
                    </div>
                    <TextInput id="txtNombre" type="text" icon={HiLockClosed} placeholder='José Pedro Fuenzalida' required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="txtCorreo" value="Correo" className='text-sm' />
                    </div>
                    <TextInput className='' id="txtCorreo" icon={HiMail} type="email" placeholder="nombre@correo.com" required />
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:gap-6 gap-3'>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="txtContrasena" value="Contraseña" className='text-sm' />
                    </div>
                    <TextInput className='' id="txtContrasena" icon={HiLockClosed} type="password" placeholder="********" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="txtContrasenaR" value="Repetir Contraseña" className='text-sm' />
                    </div>
                    <TextInput id="txtContrasenaR" type="password" icon={HiLockClosed} placeholder='********' required />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-2'>
                    <Checkbox id="chbRecordar" className='hover:cursor-pointer' />
                    <Label className="font-regular text-xs" htmlFor="chbRecordar">Acepto las <span className="hover:underline text-cyan-700">Condiciones y Términos de contrato.</span></Label>
                </div>
                {/*<a className='text-sm font-light hover:cursor-pointer hover:underline text-cyan-700'>Recuperar contraseña</a>*/}
            </div>
            <Button className='mt-2' type="submit">Registrar</Button>
        </form>
    )
}