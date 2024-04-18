import { Modal, Button, Accordion, Avatar, FileInput, Label, TextInput, Dropdown, Radio, ToggleSwitch  } from 'flowbite-react';
import { GoPlus } from "react-icons/go";
import { useState } from 'react';

export default function NewUser({openModal, setOpenModal}){
    const [switch1, setSwitch1] = useState(false);

    return(
        <Modal className='font-regular' show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Agregar Usuario</Modal.Header>
        <Modal.Body className='p-0'>
            <Accordion className='rounded-none'>
                <Accordion.Panel>
                    <Accordion.Title className='font-[600] text-lg'>Información General</Accordion.Title>
                    <Accordion.Content className=''>
                        <div className='flex justify-center items-center mb-3'>
                            <div className='flex flex-col w-1/5 gap-2'>
                                <p className='text-sm font-regular'>Subir Imagen</p>
                                <Avatar size={'lg'} className='self-start' rounded ></Avatar>
                            </div>
                            <div className='w-full'>
                                <FileInput id="file-upload-helper-text" helperText="SVG, PNG o JPG (Max size 1mb)." />
                            </div>
                        </div>
                        <form className="flex justify-center items-center flex-col gap-4">
                            <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtPrimerNombre" value="Primer Nombre" className='text-sm' />
                                    </div>
                                    <TextInput className='' id="txtPrimerNombre" type="text" placeholder='Rosamel' required />
                                </div>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtSegundoNombre" value="Segundo Nombre" className='text-sm' />
                                    </div>
                                    <TextInput className='' id="txtSegundoNombre" type="text" placeholder="Troso" required />
                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtCorreoUsuario" value="Correo" className='text-sm' />
                                    </div>
                                    <TextInput className='' id="txtCorreoUsuario" type="email" placeholder="correo@mail.com" required />
                                </div>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtPermisosUsuario" value="Permisos de Usuario" className='text-sm' />
                                    </div>
                                    <div className='flex w-full'>
                                        <Dropdown id='txtPermisosUsuario' className='' label={<div className='w-[218px] text-start'>Seleccionar</div>} color={'gray'}>
                                            <Dropdown.Item>Veterinario</Dropdown.Item>
                                            <Dropdown.Item>Recepcionista</Dropdown.Item>
                                            <Dropdown.Item>Administrador</Dropdown.Item>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtCargo" value="Cargo" className='text-sm' />
                                    </div>
                                    <TextInput className='' id="txtCargo" type="text" placeholder='Asistente' required />
                                </div>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtRolUsuario" value="Permisos de Usuario" className='text-sm' />
                                    </div>
                                    <div className='flex w-full'>
                                        <Dropdown id='txtRolUsuario' className='' label={<div className='w-[218px] text-start'>Seleccionar</div>} color={'gray'}>
                                            <Dropdown.Item>Veterinario</Dropdown.Item>
                                            <Dropdown.Item>Recepcionista</Dropdown.Item>
                                            <Dropdown.Item>Administrador</Dropdown.Item>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtContrasenaUsuario" value="Contraseña" className='text-sm' />
                                    </div>
                                    <TextInput id="txtContrasenaUsuario" type="password" placeholder="********" required />
                                </div>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtContrasenaUsuarioR" value="Repetir Contraseña" className='text-sm' />
                                    </div>
                                    <TextInput id="txtContrasenaUsuarioR" type="password" placeholder='********' required />
                                </div>
                            </div>
                            {/*<div className="flex items-center justify-between">
                                <div className='flex items-center gap-2'>
                                    <Checkbox id="chbRecordar" className='hover:cursor-pointer' />
                                    <Label className="font-regular text-xs" htmlFor="chbRecordar">Acepto las <span className="hover:underline text-cyan-700">Condiciones y Términos de contrato.</span></Label>
                                </div>
                                <a className='text-sm font-light hover:cursor-pointer hover:underline text-cyan-700'>Recuperar contraseña</a>
                            </div>*/}
                            {/*<Button className='mt-2' type="submit">Registrar</Button>*/}
                            
                            <fieldset className=" max-w-md flex-col gap-4 self-start">
                                    <Label className='self-start text-sm'>Asignar Rol</Label>
                                <div className="flex gap-6 text-sm font-regular mt-1">
                                    <div className="flex items-center gap-2">
                                        <Radio id="germany" name="countries" value="Germany" />
                                        <Label className="w-24" htmlFor="germany">Administrador</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio id="spain" name="countries" value="Spain" />
                                        <Label htmlFor="spain">Veterinarios</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Radio id="uk" name="countries" value="United Kingdom" />
                                        <Label htmlFor="uk">Recepcionistas</Label>
                                    </div>
                                </div>
                            </fieldset>
                            
                            <div className='flex self-start flex-col'>
                                <Label className='self-start text-sm'>Estado</Label>
                                <ToggleSwitch className='self-start mt-1' checked={switch1} label={switch1 ? 'Activo' : 'Inactivo'} onChange={setSwitch1} />
                            </div>
                        </form>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='font-[600] text-lg'>Información Adicional</Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                        has a design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Check out the
                        <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        Figma design system
                        </a>
                        based on the utility classes from Tailwind CSS and components from Flowbite.
                    </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </Modal.Body>
        <Modal.Footer className=''>
            <div className='flex w-full gap-6'>
                <Button type='submit' className='w-full bg-cyan-600'><GoPlus className='w-5 h-5 mr-2' />Agregar usuario</Button>
                <Button className='w-full' color={'gray'} onClick={() => setOpenModal(false)}>Cerrar</Button>
            </div>
        </Modal.Footer>
      </Modal>
    )
}