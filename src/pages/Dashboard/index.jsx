import DefaultLayout from "../../components/layouts/DefaultLayout";
import { Button, Card, Table, Badge, Checkbox } from "flowbite-react";
import { FaCalendarAlt } from "react-icons/fa";
import LineChart from "../../components/charts/LineChart";
import { FaChartLine } from "react-icons/fa";
import { PiChartLineUpBold } from "react-icons/pi";
import { PiChartLineDownBold } from "react-icons/pi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Dashboard(){

    return(
        <div>
            <div className=''> 
                <LineChart />    
            </div>
            <div className='flex flex-col md:flex-row md:gap-x-4 gap-4 justify-between py-4'>
                <Card className='text-start w-full font-regular shadow-sm'>
                    <PiChartLineUpBold className='w-6 h-6' />
                    <p className='mt-[-16px] font-regular'>Entrada Total</p>
                    <p className='text-2xl font-bold mt-[-16px] text-slate-800'>$854.369</p>
                    <div className='flex items-center text-green-500 font-[600] mt-[-8px]'>
                    <FaArrowUp className='mt-[2px] w-4 h-4' />
                    <p className='ml-[1px] font-[600]'>7%</p><p className='font-[500] text-sm ml-2 text-gray-500'>vs últimos 3 meses</p>
                    </div>
                </Card>
                <Card className='text-start w-full font-regular shadow-sm'>
                    <PiChartLineDownBold className='w-6 h-6' />
                    <p className='mt-[-16px] font-regular'>Salida Total</p>
                    <p className='text-2xl font-bold mt-[-16px] text-slate-800'>$854.369</p>
                    <div className='flex items-center text-green-500 font-[600] mt-[-8px]'>
                    <FaArrowUp className='mt-[2px] w-4 h-4' />
                    <p className='ml-[1px] font-[600]'>7%</p><p className='font-[500] text-sm ml-2 text-gray-500'>vs últimos 3 meses</p>
                    </div>
                </Card>
                <Card className='text-start w-full font-regular shadow-sm'>
                    <MdOutlineAttachMoney className='w-6 h-6' />
                    <p className='mt-[-16px] font-regular'>Entrada Total</p>
                    <p className='text-2xl font-bold mt-[-16px] text-slate-800'>$854.369</p>
                    <div className='flex items-center text-red-500 font-[600] mt-[-8px]'>
                    <FaArrowDownLong  className='mt-[2px] w-4 h-4' />
                    <p className='ml-[1px] font-[600]'>7%</p><p className='font-[500] text-sm ml-2 text-gray-500'>vs últimos 3 meses</p>
                    </div>
                </Card>
                <Card className='text-start w-full font-regular shadow-sm'>
                    <FaPeopleGroup className='w-6 h-6' />
                    <p className='mt-[-16px] font-regular'>Entrada Total</p>
                    <p className='text-2xl font-bold mt-[-16px] text-slate-800'>$854.369</p>
                    <div className='flex items-center text-green-500 font-[600] mt-[-8px]'>
                    <FaArrowUp className='mt-[2px] w-4 h-4' />
                    <p className='ml-[1px] font-[600]'>7%</p><p className='font-[500] text-sm ml-2 text-gray-500'>vs últimos 3 meses</p>
                    </div>
                </Card>
                
            </div>
            <div>
                <Card className='font-regular shadow-sm'>
                    <div className='self-start flex gap-4'>
                        <p>Agendamientos:<span className='text-slate-800 font-semibold'>1532</span></p>
                        <p>Atenciones:<span className='text-slate-800 font-semibold'>1532</span></p>
                    </div>
                    <div className="overflow-x-auto">
                        <Table hoverable>
                            <Table.Head>
                            <Table.HeadCell className="p-4">
                                <Checkbox />
                            </Table.HeadCell>
                            <Table.HeadCell>Cliente</Table.HeadCell>
                            <Table.HeadCell>Mascota</Table.HeadCell>
                            <Table.HeadCell>Raza</Table.HeadCell>
                            <Table.HeadCell>Fecha</Table.HeadCell>
                            <Table.HeadCell>Estado</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Jim Vásquez
                                </Table.Cell>
                                <Table.Cell>Cleo</Table.Cell>
                                <Table.Cell>Gato</Table.Cell>
                                <Table.Cell>14/02/2024</Table.Cell>
                                <Table.Cell>
                                    <div className="flex">
                                    <Badge color="warning" className='w-sm'>Pendiente</Badge>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Elizabeth Cortes
                                </Table.Cell>
                                <Table.Cell>Zoe</Table.Cell>
                                <Table.Cell>Gato</Table.Cell>
                                <Table.Cell>14/02/2024</Table.Cell>
                                <Table.Cell>
                                <div className="flex">
                                    <Badge color="success" className='w-sm'>Completado</Badge>
                                </div>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Castolo
                                </Table.Cell>
                                <Table.Cell>Perico</Table.Cell>
                                <Table.Cell>Pájaro</Table.Cell>
                                <Table.Cell>14/02/2024</Table.Cell>
                                <Table.Cell>
                                <div className="flex">
                                    <Badge color="failure" className='w-sm'>Cancelada</Badge>
                                </div>
                                </Table.Cell>
                            </Table.Row>
                            </Table.Body>
                        </Table>
                        </div>
                </Card>
            </div>
        </div>
    )
}