import { Button, Label, TextInput, Checkbox, Card } from 'flowbite-react'
import { HiMail, HiLockClosed } from 'react-icons/hi'

export default function UserLogin(){

    return(
        <Card className="absolute self-center xl:w-1/3 md:w-2/4 sm:w-2/4 py-6">
            <h1 className='text-center text-2xl font-bold mb-2 text-cyan-950'>GatoCosmico</h1>
            <form className="flex flex-col gap-6 mx-6">
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="txtCorreo" value="Correo" className='text-md' />
                    </div>
                    <TextInput  className='fill-cyan-700' id="txtCorreo" icon={HiMail} type="email" placeholder="nombre@correo.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="txtContrasena" value="Contraseña" className='text-md' />
                    </div>
                    <TextInput id="txtContrasena" type="password" icon={HiLockClosed} placeholder='********' required />
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
