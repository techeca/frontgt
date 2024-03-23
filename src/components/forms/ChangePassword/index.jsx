import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import { HiMail, HiLockClosed } from 'react-icons/hi'

export default function ChangePassword(){

    return(
        <form className="">
        <div className='flex flex-col md:gap-6 gap-3'>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="txtContrasena" value="Contraseña actual" className='text-sm' />
                </div>
                <TextInput className='' id="txtContrasena" icon={HiLockClosed} type="password" placeholder="********" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="txtContrasena" value="Nueva contraseña" className='text-sm' />
                </div>
                <TextInput className='' id="txtContrasena" icon={HiLockClosed} type="password" placeholder="********" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="txtContrasenaR" value="Confirmar nueva contraseña" className='text-sm' />
                </div>
                <TextInput id="txtContrasenaR" type="password" icon={HiLockClosed} placeholder='********' required />
            </div>
        </div>
        <hr className="my-4"></hr>
        <Button className='mt-2' type="submit">Guardar cambios</Button>
    </form>
    )
}