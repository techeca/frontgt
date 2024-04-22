import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import { useState } from "react"
import { HiMail, HiLockClosed } from 'react-icons/hi'
import { Form } from "react-router-dom";

const inputsData = {
    correo: {
        label: {
            htmlFor: 'txtCorreo',
            value: 'Correo'
        },
        input: {
            id: 'txtCorreo',
            name: 'correo',
            helperText: 'Correo incorrecto',
            placeholder: 'nombre@correo.com'
        }
    },
    contrasena: {
        label: {
            htmlFor: 'txtContrasena',
            value: 'Contrasena'
        },
        input: {
            id: 'txtContrasena',
            name: 'contrasena',
            helperText: 'Longitud incorrecta',
            placeholder: '********'
        }
    },
    recordar: {
        label: {
            htmlFor: 'chbRecordar',
            value: 'Recordar'
        },
        checkbox: {
            id: 'chbRecordar',
            name: 'chbRecordar'
        }
    }
    ,
    submit: {
        text: 'Enviar'
    },
    action: {
        path: '/login'
    },
    recoverPass: {
        text: 'Recuperar Contraseña',
        path: ''
    } 
}

export default function LoginForm(){
    const [correo, setCorreo] = useState({value:'', state: false});
    const [contrasena, setContrasena] = useState({value:'', state: false});
    const [isRe, setIsRe] = useState(true);

    function updateInput(e, fnUpdate){
        const inputValue = e.target.value
        const none = ['$', '/', '(', ')', '*', '[', ']', '`', '´', '?', `'`]
        const letterYep = inputValue.includes('@')
        const letterNope = none.some(i => inputValue.includes(i))

        if(e.target.type !== 'password'){
            if(inputValue.length > 0 && !letterNope && letterYep){
                fnUpdate({value: inputValue , state:true })
            }else{
                fnUpdate({value: inputValue, state:false })
            }
        }else if(e.target.type === 'password'){
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
        <Form action={inputsData.action.path} method="post" className="flex flex-col gap-6">
            <div className='flex md:flex-row flex-col md:gap-6 gap-3'>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor={inputsData.correo.label.htmlFor} 
                                value={inputsData.correo.label.value}
                                className='text-sm' />
                    </div>
                    <TextInput id={inputsData.correo.input.id} 
                                name={inputsData.correo.input.name} 
                                helperText={<span>{correo.value.length === 0 ? '' : correo.state ? '' : inputsData.correo.helperText}</span>} 
                                icon={HiMail} 
                                onChange={e => updateInput(e, setCorreo)} 
                                color={setColorInput(correo)} 
                                type="email" 
                                placeholder={inputsData.correo.input.placeholder}
                                required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor={inputsData.contrasena.label.htmlFor} 
                            value={inputsData.contrasena.label.value}  
                            className='text-sm' />
                    </div>
                    <TextInput id={inputsData.contrasena.input.id}
                                name={inputsData.contrasena.input.name} 
                                helperText={<span>{contrasena.value.length === 0 ? '' : contrasena.state ? '' : inputsData.contrasena.helperText}</span>} 
                                icon={HiLockClosed} 
                                onChange={e => updateInput(e, setContrasena)} 
                                color={setColorInput(contrasena)} 
                                type="password" 
                                placeholder={inputsData.contrasena.input.placeholder}  
                                required />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-2 flex-row-reverse'>
                    <Label htmlFor={inputsData.recordar.label.htmlFor} value={inputsData.recordar.label.value} />
                    <Checkbox id={inputsData.recordar.checkbox.id} name={inputsData.recordar.checkbox.name} value={isRe} onClick={() => setIsRe(!isRe)} />
                </div>
                <a className='text-sm font-light hover:underline text-cyan-700/50 cursor-not-allowed'>{inputsData.recoverPass.text}</a>
            </div>
            <Button type="submit">{inputsData.submit.text}</Button>
        </Form>
    )
}