import { Table, Checkbox, Badge } from "flowbite-react"

export default function ProductTable({productos, setModal}){
    
    return(
        <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell className="p-4"><Checkbox /></Table.HeadCell>
                    <Table.HeadCell>Nombre Producto</Table.HeadCell>
                    <Table.HeadCell>Categoría</Table.HeadCell>
                    <Table.HeadCell>Marca</Table.HeadCell>
                    <Table.HeadCell>Proveedor</Table.HeadCell>
                    <Table.HeadCell>Costo</Table.HeadCell>
                    <Table.HeadCell>Precio</Table.HeadCell>
                    <Table.HeadCell>Vendidos</Table.HeadCell>
                    <Table.HeadCell>Cantidad</Table.HeadCell>
                    <Table.HeadCell>Estado</Table.HeadCell>
                </Table.Head>
                    <Table.Body className="divide-y">
                        {productos.map(i => 
                            <Table.Row key={i.id} onClick={(e) =>  e.target?.type === 'checkbox' ? '' : setModal(i)} className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-200 hover:cursor-pointer">
                                <Table.Cell className="p-4"> <Checkbox /></Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {i.nombre}
                                </Table.Cell>
                                <Table.Cell>{i.categoria}</Table.Cell>
                                <Table.Cell>{i.marca}</Table.Cell>
                                <Table.Cell>{i.proveedor}</Table.Cell>
                                <Table.Cell>${i.costo}</Table.Cell>
                                <Table.Cell>${i.precio}</Table.Cell>
                                <Table.Cell>{i.vendidos}</Table.Cell>
                                <Table.Cell>{i.cantidad}</Table.Cell>
                                <Table.Cell>
                                    <div className="flex">
                                        <Badge color={i.estado ? 'success': 'failure'}><p className="font-[500]">{i.estado ? 'Habilitado': 'Deshabilitado'}</p></Badge>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        )}         
                    </Table.Body>
            </Table>
        </div>
    )
}