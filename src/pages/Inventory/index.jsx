import { useState } from "react";
import { Card, Dropdown, Button } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import { FaArchive } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import NewProduct from "../../components/NewProduct";
import CardResume from "../../components/ui/MiInventory/CardResume";
import ProductTable from "../../components/ui/MiInventory/ProductTable";
import MiModal from "../../components/ui/MiModal";
import EditProductForm from "../../components/forms/EditProductForm";

export default function Inventory(){
    const [openModal, setOpenModal] = useState(false);
    const [openModalEditProduct, setOpenModalEditProduct] = useState('');

    //Solo para prueba
    const productos = (JSON.parse(localStorage.getItem('negocio'))).productos

    let totalCantProductos = 0;
    let totalCantVentas = 0;
    let totalVentas = 0
    let totalCompras = 0 

    for (let index = 0; index < productos.length; index++) {
        totalCantProductos = totalCantProductos + productos[index].cantidad;
        totalVentas = (productos[index].vendidos * productos[index].precio) + totalVentas
        totalCompras = ((productos[index].vendidos + productos[index].cantidad) * productos[index].costo) + totalCompras
        totalCantVentas = productos[index].vendidos + totalCantVentas
    }

    return(
        <div>
            <Card className="font-regular text-start shadow-sm">
                <h1 className="font-semibold text-2xl">Inventario</h1>
                <div className="flex justify-between gap-4 flex-col md:flex-row">
                    <CardResume label={'Total productos'} value={totalCantProductos} oldValue={820}/>
                    <CardResume label={'Nuevos productos'} value={1423} oldValue={1642}/>
                    <CardResume label={'Productos vendidos'} value={totalCantVentas} oldValue={2300}/>
                    <CardResume label={'Productos devueltos'} value={39} oldValue={42}/>                    
                </div>
                <div className="flex justify-between items-center flex-col md:flex-row gap-4">
                    <p className="font-[600]">Total Productos únicos <span className="font-[500]">{productos.length} resultados</span></p>
                    <div className="flex gap-4">
                        <Button onClick={() => setOpenModal(true)} className="bg-cyan-600"><FaPlus className="h4 w-4 mr-2"/>Agregar nuevo producto</Button>
                    </div>
                </div>
                <hr/>
                <div className="flex justify-between gap-4 flex-col md:flex-row">
                    <Dropdown disabled label='Acciones en masa' color={'gray'}>
                        <Dropdown.Item><BiSolidHide className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Deshabilitar</Dropdown.Item>
                        <Dropdown.Item><FaArchive className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Descuento</Dropdown.Item>
                        <Dropdown.Item className='text-red-500'><MdDelete className="w-4 h-4 mr-3 ml-0 mt-[1px]" />Eliminar</Dropdown.Item>
                    </Dropdown>
                    <div className="flex gap-4 flex-col md:flex-row">
                        <Dropdown disabled label='Categoría' color={'gray'}><Dropdown.Item>Comida</Dropdown.Item></Dropdown>
                        <Dropdown disabled label='Marca' color={'gray'}><Dropdown.Item>Felix</Dropdown.Item></Dropdown>
                        <Dropdown disabled label='Proveedor' color={'gray'}><Dropdown.Item>Comidas para mascotas inc.</Dropdown.Item></Dropdown>
                        <Dropdown disabled label='Estado' color={'gray'}><Dropdown.Item>Habilitado</Dropdown.Item></Dropdown>
                    </div>
                </div>
                <div>
                {productos.length > 0 ? 
                    <ProductTable productos={productos} setModal={setOpenModalEditProduct} />
                :
                    <div className="text-center">No hay productos</div>
                }
                <div className="flex w-full justify-between items-center mt-3">
                    <div className="flex font-regular text-md text-gray-900 dark:text-white">
                            <div className="px-6 py-3 text-base">
                                <p>Total compras</p>
                                <p className="font-[600]">${new Intl.NumberFormat().format(totalCompras)}</p>
                            </div>
                            <div className="px-6 py-3 text-base">
                                <p>Total vendidos</p>
                                <p className="font-[600]">${new Intl.NumberFormat().format(totalVentas)}</p>
                            </div>
                    </div>
                    <Button className="bg-cyan-600" disabled>Exportar</Button>
                </div>
                </div>
            </Card>
            <NewProduct openModal={openModal} setOpenModal={setOpenModal} />
            <div className={openModalEditProduct === '' ? 'hidden bg-gray-900/50' : 'bg-gray-900/50'}>
                <div className="absoulte bg-gray-900/50 h-full w-full"></div>
                <MiModal className='bg-gray-900/50' openModal={openModalEditProduct === '' ? false : true} setOpenModal={setOpenModalEditProduct} label='Editar Producto' btnLabel='Guardar'>
                    <EditProductForm data={openModalEditProduct} />
                </MiModal>
            </div>
        </div>
    )
}

