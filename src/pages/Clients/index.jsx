import { useState } from "react";
import { Card, Dropdown, Radio, Label, Table, Checkbox, Badge, Breadcrumb, Button, Popover } from "flowbite-react";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidUserDetail, BiSolidCommentDetail } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md"; 
import { FaDesktop, FaUserDoctor } from "react-icons/fa6"; 
import { HiHome } from 'react-icons/hi';
import { GoPlus } from "react-icons/go";
import NewUser from "../../components/NewUser";

export default function Clients(){
    const [openModal, setOpenModal] = useState(false);

    const content = (
        <div className="w-64 text-sm text-gray-500 dark:text-gray-400 font-regular cursor-pointer">
          <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <h3 className="font-[600] text-slate-700 dark:text-white">Administrador</h3>
          </div>
          <div className="px-3 py-2">
            <p>Encargado de la administración y configuración general de la plataforma.</p>
          </div>
        </div>
      );

    return(
        <div>
        <Card className="shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <Breadcrumb aria-label="breadcrumb" className="bg-gray-50 py-3 dark:bg-gray-800">
                        <Breadcrumb.Item href="#" icon={HiHome}>Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Usuarios</Breadcrumb.Item>
                        <Breadcrumb.Item>Todos</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1 className="text-xl font-semibold text-start text-slate-700">Clientes</h1>
                </div>
                <div className="">
                <Button type="text" size="sm" className="bg-cyan-600" onClick={() => setOpenModal(true)}><GoPlus className="w-5 h-5 mr-2"/>Agregar usuario</Button>
                </div>
            </div>
            <div className="flex justify-between">
                <Dropdown className="" label='Rol de Usuario' color='gray'>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                </Dropdown>
                <Dropdown className="" label='Estado' color='gray'>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                </Dropdown>
                <Dropdown className="" label='Rol de Usuario' color='gray'>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                </Dropdown>
                <Dropdown className="" label='Rol de Usuario' color='gray'>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                </Dropdown>
                <Dropdown className="" label='Rol de Usuario' color='gray'>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                </Dropdown>
            </div>
            <hr/>
            <fieldset className="flex max-w-md flex-col gap-4 my-4">
                <div className="flex gap-6 text-sm font-regular">
                    <legend className="w-28 self-center text-slate-800">Solo mostrar:</legend>
                    <div className="flex items-center gap-2">
                        <Radio id="united-state" name="countries" value="USA" defaultChecked />
                        <Label htmlFor="united-state">Todos</Label>
                    </div>
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

            <div className="overflow-x-auto">
                <Table hoverable className="font-regular">
                        <Table.Head className='border-b-[1px]'>
                        <Table.HeadCell className="p-4">
                            <Checkbox />
                        </Table.HeadCell>
                        <Table.HeadCell>Usuario</Table.HeadCell>
                        <Table.HeadCell>Rol de Usuario</Table.HeadCell>
                        <Table.HeadCell>Correo</Table.HeadCell>
                        <Table.HeadCell>Estado</Table.HeadCell>
                        <Table.HeadCell className="flex justify-center mt-[5px]">Acción</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="p-4">
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Jim Vásquez
                            </Table.Cell>
                            <Table.Cell>
                                <Popover content={content} trigger={'hover'}>
                                <div className="flex hover:cursor-pointer">
                                    <Badge color="indigo" className='font-[500]'>
                                        <div className="flex items-center gap-1">
                                            <BiSolidCommentDetail />
                                            Administrador
                                        </div>
                                    </Badge>
                                </div>
                                </Popover>
                            </Table.Cell>
                            <Table.Cell>jim@correo.com</Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                                        <span className="flex w-2.5 h-2.5 bg-green-500 rounded-full me-1.5 flex-shrink-0"></span>
                                        Activo
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="flex justify-center">
                                <Dropdown label={<BsThreeDots  />} size='sm' color={'gray'} inline arrowIcon={false}>
                                <Dropdown.Item><BiSolidUserDetail className="w-5 h-5 mr-2 mt-[1px]" />Detalles</Dropdown.Item>
                                <Dropdown.Item><FaUserEdit className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Editar</Dropdown.Item>
                                <Dropdown.Item className='text-red-500'><MdDelete className="w-4 h-4 mr-3 ml-0 mt-[1px]" />Eliminar</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="p-4">
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Elizabeth Cortes
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <Badge color="indigo" className='font-[500]'>
                                        <div className="flex items-center gap-1">
                                            <FaUserDoctor />
                                            Veterinario
                                        </div>
                                    </Badge>
                                </div>
                            </Table.Cell>
                            <Table.Cell>ely@correo.com</Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                                        <span className="flex w-2.5 h-2.5 bg-green-500 rounded-full me-1.5 flex-shrink-0"></span>
                                        Activo
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="flex justify-center">
                                <Dropdown label={<BsThreeDots  />} size='sm' color={'gray'} inline arrowIcon={false}>
                                <Dropdown.Item><BiSolidUserDetail className="w-5 h-5 mr-2 mt-[1px]" />Detalles</Dropdown.Item>
                                <Dropdown.Item><FaUserEdit className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Editar</Dropdown.Item>
                                <Dropdown.Item className='text-red-500'><MdDelete className="w-4 h-4 mr-3 ml-0 mt-[1px]" />Eliminar</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="p-4">
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Castolo
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <Badge color="indigo" className='font-[500]'>
                                        <div className="flex items-center gap-1">
                                            <FaDesktop />
                                            Recepcionista
                                        </div>
                                    </Badge>
                                </div>
                            </Table.Cell>
                            <Table.Cell>castolo@correo.com</Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                                        <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full me-1.5 flex-shrink-0"></span>
                                        Inactivo
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="flex justify-center hover:cursor-pointer">
                                <Dropdown label={<BsThreeDots  />} size='sm' color={'gray'} inline arrowIcon={false}>
                                <Dropdown.Item><BiSolidUserDetail className="w-5 h-5 mr-2 mt-[1px]" />Detalles</Dropdown.Item>
                                <Dropdown.Item><FaUserEdit className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Editar</Dropdown.Item>
                                <Dropdown.Item className='text-red-500'><MdDelete className="w-4 h-4 mr-3 ml-0 mt-[1px]" />Eliminar</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="p-4">
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Jim Vásquez
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <Badge color="indigo" className='font-[500]'>
                                        <div className="flex items-center gap-1">
                                            <BiSolidCommentDetail />
                                            Administrador
                                        </div>
                                    </Badge>
                                </div>
                            </Table.Cell>
                            <Table.Cell>jim@correo.com</Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                                        <span className="flex w-2.5 h-2.5 bg-green-500 rounded-full me-1.5 flex-shrink-0"></span>
                                        Activo
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="flex justify-center">
                                <Dropdown label={<BsThreeDots  />} size='sm' color={'gray'} inline arrowIcon={false}>
                                <Dropdown.Item><BiSolidUserDetail className="w-5 h-5 mr-2 mt-[1px]" />Detalles</Dropdown.Item>
                                <Dropdown.Item><FaUserEdit className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Editar</Dropdown.Item>
                                <Dropdown.Item className='text-red-500'><MdDelete className="w-4 h-4 mr-3 ml-0 mt-[1px]" />Eliminar</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="p-4">
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Elizabeth Cortes
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <Badge color="indigo" className='font-[500]'>
                                        <div className="flex items-center gap-1">
                                            <FaUserDoctor />
                                            Veterinario
                                        </div>
                                    </Badge>
                                </div>
                            </Table.Cell>
                            <Table.Cell>ely@correo.com</Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                                        <span className="flex w-2.5 h-2.5 bg-green-500 rounded-full me-1.5 flex-shrink-0"></span>
                                        Activo
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="flex justify-center">
                                <Dropdown label={<BsThreeDots  />} size='sm' color={'gray'} inline arrowIcon={false}>
                                <Dropdown.Item><BiSolidUserDetail className="w-5 h-5 mr-2 mt-[1px]" />Detalles</Dropdown.Item>
                                <Dropdown.Item><FaUserEdit className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Editar</Dropdown.Item>
                                <Dropdown.Item className='text-red-500'><MdDelete className="w-4 h-4 mr-3 ml-0 mt-[1px]" />Eliminar</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="p-4">
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Castolo
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <Badge color="indigo" className='font-[500]'>
                                        <div className="flex items-center gap-1">
                                            <FaDesktop />
                                            Recepcionista
                                        </div>
                                    </Badge>
                                </div>
                            </Table.Cell>
                            <Table.Cell>castolo@correo.com</Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                                        <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full me-1.5 flex-shrink-0"></span>
                                        Inactivo
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="flex justify-center hover:cursor-pointer">
                                <Dropdown label={<BsThreeDots  />} size='sm' color={'gray'} inline arrowIcon={false}>
                                <Dropdown.Item><BiSolidUserDetail className="w-5 h-5 mr-2 mt-[1px]" />Detalles</Dropdown.Item>
                                <Dropdown.Item><FaUserEdit className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Editar</Dropdown.Item>
                                <Dropdown.Item className='text-red-500'><MdDelete className="w-4 h-4 mr-3 ml-0 mt-[1px]" />Eliminar</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="p-4">
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Jim Vásquez
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <Badge color="indigo" className='font-[500]'>
                                        <div className="flex items-center gap-1">
                                            <BiSolidCommentDetail />
                                            Administrador
                                        </div>
                                    </Badge>
                                </div>
                            </Table.Cell>
                            <Table.Cell>jim@correo.com</Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                                        <span className="flex w-2.5 h-2.5 bg-green-500 rounded-full me-1.5 flex-shrink-0"></span>
                                        Activo
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="flex justify-center">
                                <Dropdown label={<BsThreeDots  />} size='sm' color={'gray'} inline arrowIcon={false}>
                                <Dropdown.Item><BiSolidUserDetail className="w-5 h-5 mr-2 mt-[1px]" />Detalles</Dropdown.Item>
                                <Dropdown.Item><FaUserEdit className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Editar</Dropdown.Item>
                                <Dropdown.Item className='text-red-500'><MdDelete className="w-4 h-4 mr-3 ml-0 mt-[1px]" />Eliminar</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="p-4">
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Elizabeth Cortes
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <Badge color="indigo" className='font-[500]'>
                                        <div className="flex items-center gap-1">
                                            <FaUserDoctor />
                                            Veterinario
                                        </div>
                                    </Badge>
                                </div>
                            </Table.Cell>
                            <Table.Cell>ely@correo.com</Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                                        <span className="flex w-2.5 h-2.5 bg-green-500 rounded-full me-1.5 flex-shrink-0"></span>
                                        Activo
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="flex justify-center">
                                <Dropdown label={<BsThreeDots  />} size='sm' color={'gray'} inline arrowIcon={false}>
                                <Dropdown.Item><BiSolidUserDetail className="w-5 h-5 mr-2 mt-[1px]" />Detalles</Dropdown.Item>
                                <Dropdown.Item><FaUserEdit className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Editar</Dropdown.Item>
                                <Dropdown.Item className='text-red-500'><MdDelete className="w-4 h-4 mr-3 ml-0 mt-[1px]" />Eliminar</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="p-4">
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Castolo
                            </Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <Badge color="indigo" className='font-[500]'>
                                        <div className="flex items-center gap-1">
                                            <FaDesktop />
                                            Recepcionista
                                        </div>
                                    </Badge>
                                </div>
                            </Table.Cell>
                            <Table.Cell>castolo@correo.com</Table.Cell>
                            <Table.Cell>
                                <div className="flex">
                                    <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
                                        <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full me-1.5 flex-shrink-0"></span>
                                        Inactivo
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="flex justify-center hover:cursor-pointer">
                                <Dropdown label={<BsThreeDots  />} size='sm' color={'gray'} inline arrowIcon={false}>
                                <Dropdown.Item><BiSolidUserDetail className="w-5 h-5 mr-2 mt-[1px]" />Detalles</Dropdown.Item>
                                <Dropdown.Item><FaUserEdit className="w-4 h-4 mr-2.5 ml-0.5 mt-[1px]" />Editar</Dropdown.Item>
                                <Dropdown.Item className='text-red-500'><MdDelete className="w-4 h-4 mr-3 ml-0 mt-[1px]" />Eliminar</Dropdown.Item>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        </Table.Body>
                </Table>
            </div>
            <div>
                <Button size={'sm'} className="bg-cyan-600" type='text'>Download CSV</Button>
            </div>
        </Card>
        <NewUser openModal={openModal} setOpenModal={setOpenModal} />
    </div>
    )
}