import { Label, TextInput, Checkbox, ToggleSwitch, Select, Datepicker, Table, Button } from 'flowbite-react';
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";

export default function NewProductForm(){
    const [switch1, setSwitch1] = useState(false);
    const [tieneVencimiento, setTieneVencimiento] = useState(false)

    return(
        <form className="flex justify-center items-center flex-col gap-4">
                <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtNombreProducto" value="Nombre Producto" className='text-sm' />
                                    </div>
                                    <TextInput className='' id="txtNombreProducto" type="text" placeholder='Comida para gatos 50g' required />
                                </div>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtCategoria" value="Categoría" className='text-sm' />
                                    </div>
                                    <div className='flex w-full'>
                                        <Select id='txtCategoria' className='w-full'>
                                            <option>Comida</option>
                                            <option>Recepcionista</option>
                                            <option>Administrador</option>
                                        </Select>
                                    </div>
                                </div>
                </div>
                <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtMarca" value="Marca" className='text-sm' />
                                    </div>
                                    <div className='flex w-full'>
                                        <Select id='txtMarca' className='w-full'>
                                            <option>Felix</option>
                                            <option>Recepcionista</option>
                                            <option>Administrador</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className="mb-2 block">
                                        <Label htmlFor="txtProveedor" value="Proveedor" className='text-sm' />
                                    </div>
                                    <div className='flex w-full'>
                                        <Select id='txtProveedor' className='w-full'>
                                            <option>Comidas SA.</option>
                                            <option>Recepcionista</option>
                                            <option>Administrador</option>
                                        </Select>
                                    </div>
                                </div>
                </div>
                <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="txtPrecio" value="Costo" className='text-sm' />
                        </div>
                        <TextInput className='' id="txtPrecio" type="number" placeholder='$500' required />
                     </div>
                     <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="txtRolUsuario" value="Precio" className='text-sm' />
                         </div>
                          <TextInput className='' id="txtCargo" type="number" placeholder='$750' required />
                     </div>
                </div>
                <div className='md:flex-row flex-col md:gap-6 gap-3 w-full hidden'>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="txtCantidad" value="Cantidad" className='text-sm' />
                        </div>
                        <TextInput id="txtCantidad" type="number" placeholder="100" required />
                    </div>
                </div>
                <div className='flex self-start flex-col'>
                    <Label className='self-start text-sm'>Estado</Label>
                    <ToggleSwitch className='self-start mt-2' checked={switch1} label={switch1 ? 'Habilitado' : 'Deshabilitado'} onChange={setSwitch1} />
                </div>
                <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="txtCantidad" value="Cantidad" className='text-sm' />
                        </div>
                        <TextInput id="txtCantidad" type="number" placeholder="100" required />
                    </div>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="txtCantidad" value="Fecha Vencimiento" className='text-sm' />
                            <Checkbox className='ml-2' onChange={(e) => setTieneVencimiento(e.target.checked)}/>
                        </div>
                        <div className='flex justify-between w-full gap-4'>
                            <Datepicker className='w-full' disabled={!tieneVencimiento} required language='es-ES' labelTodayButton="Hoy" labelClearButton="Cerrar" />
                            <Button disabled={!tieneVencimiento}><FiPlus className='w-4 h-4' /></Button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto w-full border-[1px] rounded-lg">
                    <Table className={tieneVencimiento ? '' : 'cursor-not-allowed opacity-50'}>
                        <Table.Head>
                            <Table.HeadCell>Fecha Vencimiento</Table.HeadCell>
                            <Table.HeadCell>Cantidad</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">     
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    14 de febrero de 2024
                                </Table.Cell>
                                <Table.Cell>50</Table.Cell>
                                <Table.Cell>
                                    <div className='flex gap-2 justify-end'>
                                        <div className="relative flex items-center max-w-[8rem]">
                                            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                                </svg>
                                            </button>
                                            <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
                                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <Button disabled={!tieneVencimiento} size={'sm'} className='bg-red-600'>Reducir</Button>
                                        <Button disabled={!tieneVencimiento} size={'sm'} className='bg-red-600'>Eliminar</Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>             
                        </Table.Body>
                    </Table>
                </div>
            </form>
    )
}