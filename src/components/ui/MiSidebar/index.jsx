import { Sidebar, Badge} from 'flowbite-react';
import { HiChartPie, HiUser, HiViewBoards  } from 'react-icons/hi';
import { MdSpaceDashboard, MdOutlinePets } from "react-icons/md";
import { BiBuoy } from 'react-icons/bi';
import { BsGearFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BASEPATH = import.meta.env.MODE === 'development' ? '' : 'frontgt/'

export default function MiSidebar(){
    return(
        <Sidebar className='border-b-[1px] border-r-[1px] font-regular lg:block hidden' aria-label="Sidebar">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item as={Link} to={`${BASEPATH}dashboard`} className='' icon={MdSpaceDashboard}>
                        Dashboard
                    </Sidebar.Item>
                            {/*<Sidebar.Collapse icon={HiShoppingBag} label="Agendamiento">
                                <Sidebar.Item href="#">Products</Sidebar.Item>
                                <Sidebar.Item href="#">Sales</Sidebar.Item>
                                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                                <Sidebar.Item href="#">Shipping</Sidebar.Item>
                            </Sidebar.Collapse>*/}
                    <Sidebar.Item as={Link} to={`${BASEPATH}calendar`} icon={FaCalendarAlt}>
                        <div className='flex justify-between'>
                            Agenda<Badge className='rounded-full font-[500]' color="failure" size="sm">5</Badge>
                        </div>
                    </Sidebar.Item>
                    <Sidebar.Item as={Link} to={`${BASEPATH}users`} icon={HiUser}>
                        Usuarios
                    </Sidebar.Item>
                    <Sidebar.Item as={Link} to={'#'} icon={MdOutlinePets }>
                        Pacientes
                     </Sidebar.Item>
                     <Sidebar.Item as={Link} to={'#'} icon={BsGearFill}>
                         Configuración
                      </Sidebar.Item>
                      {/*<Sidebar.Item href="#" icon={HiTable}>
                                Sign Up
                            </Sidebar.Item>*/}
                      </Sidebar.ItemGroup>
                      <Sidebar.ItemGroup>
                      <Sidebar.Item as={Link} to={'#'} icon={HiChartPie}>
                                Cambiar Plan
                     </Sidebar.Item>
                          <Sidebar.Item as={Link} to={'#'} icon={HiViewBoards}>
                                Documentación
                      </Sidebar.Item>
                      <Sidebar.Item as={Link} to={'#'} icon={BiBuoy}>
                                Ayuda
                      </Sidebar.Item>
                      </Sidebar.ItemGroup>              
            </Sidebar.Items>
            {/*<div className=''>hola</div>*/}
        </Sidebar>
    )
}