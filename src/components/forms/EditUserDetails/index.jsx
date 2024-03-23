import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import { HiMail, HiLockClosed } from 'react-icons/hi'
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function EditUserDetails(){

    return(
        <form className="">
        <div className='flex flex-col gap-3 text-start'>
            <div className="flex justify-around gap-4 ">
                <div className="w-full">
                    <div className="mb-2 block ">
                        <Label htmlFor="txtContrasena" value="Nombre" className='text-sm' />
                    </div>
                    <TextInput className='' id="txtContrasena" icon={FaUser} type="text" placeholder="Nombre" required />
                </div>
                <div className="w-full">
                    <div className="mb-2 block">
                        <Label htmlFor="txtContrasena" value="Apellido" className='text-sm' />
                    </div>
                    <TextInput className='' id="txtContrasena" type="text" placeholder="Apellido" required />
                </div>
            </div>
            <div className="flex justify-around gap-4 ">
                <div className="w-full">
                    <div className="mb-2 block ">
                        <Label htmlFor="txtContrasena" value="Correo" className='text-sm' />
                    </div>
                    <TextInput className='' id="txtContrasena" icon={IoMail} type="text" placeholder="Correo" required />
                </div>
                <div className="w-full">
                    <div className="mb-2 block">
                        <Label htmlFor="txtContrasena" value="Teléfono" className='text-sm' />
                    </div>
                    <TextInput className='' id="txtContrasena" icon={FaPhone} type="text" placeholder="Teléfono" required />
                </div>
            </div>
        </div>
        <hr className="my-4"></hr>
        <Button className='mt-2' type="submit">Guardar</Button>
    </form>
    )
}