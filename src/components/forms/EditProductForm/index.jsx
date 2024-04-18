import { Label, TextInput, Checkbox, ToggleSwitch, Select, Datepicker } from 'flowbite-react';
import { useState } from 'react';

export default function EditProductForm({data}){
    const [switch1, setSwitch1] = useState(data.estado);
    const [tieneVencimiento, setTieneVencimiento] = useState(false)

    return(
        <form className="flex justify-center items-center flex-col gap-4">
                <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="txtNombreProducto" value="Nombre Producto" className='text-sm' />
                        </div>
                            <TextInput className='' id="txtNombreProducto" type="text" defaultValue={data.nombre} placeholder='Comida para gatos 50g' required />
                    </div>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="selectCategoria" value="Categoría" className='text-sm' />
                        </div>
                        <div className='flex w-full'>
                            <Select id="selectCategoria" defaultValue={data.categoria} className='w-full'>
                                <option>Comida</option>
                                <option>Juguete</option>
                                <option>Medicamento</option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="selectMarca" value="Marca" className='text-sm' />
                        </div>
                        <div className='flex w-full'>
                            <Select id='selectMarca' defaultValue={data.marca} className='w-full'>
                                <option>Felix</option>
                                <option>Dog Chow</option>
                                <option>Whiskas</option>
                            </Select>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="selectProveedor" value="Proveedor" className='text-sm' />
                        </div>
                        <div className='flex w-full'>
                            <Select id='selectProveedor' defaultValue={data.proveedor} className='w-full'>
                                <option>Comidas SA.</option>
                                <option>Juguetes SA.</option>
                                <option>Medicamentos SA.</option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="txtCosto" value="Costo" className='text-sm' />
                        </div>
                        <TextInput className='' id="txtCosto" type="number" placeholder='$500' defaultValue={data.costo} required />
                     </div>
                     <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="txtPrecio" value="Precio" className='text-sm' />
                         </div>
                          <TextInput id="txtPrecio" type="number" placeholder='$750' defaultValue={data.precio} required />
                     </div>
                </div>
                <div className='flex md:flex-row flex-col md:gap-6 gap-3 w-full'>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="txtCantidad" value="Cantidad" className='text-sm' />
                        </div>
                        <TextInput id="txtCantidad" type="number" placeholder="100" defaultValue={data.cantidad} required />
                    </div>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="dtFechaVencimiento" value="Fecha Vencimiento" className='text-sm' />
                            <Checkbox className='ml-2' onChange={(e) => setTieneVencimiento(e.target.checked)}/>
                        </div>
                            <Datepicker id='dtFechaVencimiento' disabled={!tieneVencimiento} required language='es-ES' labelTodayButton="Hoy" labelClearButton="Cerrar" />
                    </div>
                </div>
                <div className='md:flex-row flex-col md:gap-6 gap-3 w-full hidden'>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="dtFechaIngreso" value="Fecha Ingreso" className='text-sm' />
                        </div>
                        <Datepicker id='dtFechaIngreso' required language='es-ES' labelTodayButton="Hoy" labelClearButton="Cerrar" />
                    </div>
                </div>
                <div className='flex self-start flex-col'>
                    <Label htmlFor='chBoxEstado' className='self-start text-sm'>Estado</Label>
                    <ToggleSwitch id={'chBoxEstado'} className='self-start mt-1' checked={switch1} label={switch1 ? 'Habilitado' : 'Deshabilitado'} onChange={setSwitch1} />
                </div>
            </form>
    )
}