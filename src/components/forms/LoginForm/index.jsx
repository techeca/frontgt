import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import { useState } from "react"
import { HiMail, HiLockClosed } from 'react-icons/hi'
import { Form } from "react-router-dom";

export default function LoginForm(){
    const [correo, setCorreo] = useState({value:'', state: false});
    const [contrasena, setContrasena] = useState({value:'', state: false});

    function updateInput(e, fnUpdate){
        const inputValue = e.target.value
        const none = ['$', '/', '(', ')', '*', '[', ']', '`', '´', '?', `'`,]
        const letterYep = inputValue.includes('@')
        const letterNope = none.some(i => inputValue.includes(i))

        if(e.target.type !== 'password'){
            if(inputValue.length > 0 && !letterNope && letterYep){
                fnUpdate({value: inputValue , state:true })
            }else{
                fnUpdate({value: inputValue, state:false })
            }
        }else{
            inputValue.length >= 8 ? fnUpdate({value: inputValue, state: true}) : fnUpdate({value: inputValue, state:false })
        }
    }

    function setColorInput(input){
        let colorsh= 'gray'
        input.state ? colorsh = 'success' : colorsh = 'failure'
        if(input.value.length === 0){ colorsh = 'gray' }
        return colorsh
    }

    /*function handleSubmit(e){
        e.preventDefault()
        if(correo.state && contrasena.state){
            return userService.login(correo.value, contrasena.value)
            .then(e => {
                return redirect('/dashboard')
            }).catch(err => {
                console.error(`Error: ${err}`);
            })
        }
    }*/

    return(
        <Form action="/login" method="post" className="flex flex-col gap-6">
            <div className='flex md:flex-row flex-col md:gap-6 gap-3'>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="txtCorreo" value="Correo" className='text-sm' />
                    </div>
                    <TextInput className='' id="txtCorreo" name="correo" helperText={<span className="">{correo.state ? '' : 'Correo incorrecto'}</span>} icon={HiMail} onChange={e => updateInput(e, setCorreo)} color={setColorInput(correo)} type="email" placeholder="nombre@correo.com" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="txtContrasena" value="Contraseña" className='text-sm' />
                    </div>
                    <TextInput id="txtContrasena" name="contrasena" helperText={<span className="">{contrasena.state ? '' : 'Longitud incorrecta'}</span>} type="password" icon={HiLockClosed} onChange={e => updateInput(e, setContrasena)} color={setColorInput(contrasena)} placeholder='********' required />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-2'>
                    <Checkbox id="chbRecordar" className='' defaultChecked />
                    <Label htmlFor="chbRecordar">Recordar</Label>
                </div>
                <a className='text-sm font-light hover:underline text-cyan-700/50 cursor-not-allowed'>Recuperar contraseña</a>
            </div>
            <Button type="submit">Enviar</Button>
        </Form>
    )
}