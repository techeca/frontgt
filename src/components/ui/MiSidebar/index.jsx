import { Sidebar} from 'flowbite-react';
import { HiChartPie, HiUser, HiViewBoards  } from 'react-icons/hi';
import { MdSpaceDashboard, MdOutlinePets } from "react-icons/md";
import { BiBuoy } from 'react-icons/bi';
import { BsGearFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";

export default function MiSidebar(){
    return(
        <Sidebar className='border-b-[1px] border-r-[1px] font-regular lg:block hidden' aria-label="Sidebar">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" className='' icon={MdSpaceDashboard}>
                        Dashboard
                    </Sidebar.Item>
                            {/*<Sidebar.Collapse icon={HiShoppingBag} label="Agendamiento">
                                <Sidebar.Item href="#">Products</Sidebar.Item>
                                <Sidebar.Item href="#">Sales</Sidebar.Item>
                                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                                <Sidebar.Item href="#">Shipping</Sidebar.Item>
                            </Sidebar.Collapse>*/}
                    <Sidebar.Item href="#" icon={FaCalendarAlt}>
                        Agenda
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Usuarios
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={MdOutlinePets }>
                        Pacientes
                     </Sidebar.Item>
                     <Sidebar.Item href="#" icon={BsGearFill}>
                         Configuración
                      </Sidebar.Item>
                      {/*<Sidebar.Item href="#" icon={HiTable}>
                                Sign Up
                            </Sidebar.Item>*/}
                      </Sidebar.ItemGroup>
                      <Sidebar.ItemGroup>
                      <Sidebar.Item href="#" icon={HiChartPie}>
                                Cambiar Plan
                     </Sidebar.Item>
                          <Sidebar.Item href="#" icon={HiViewBoards}>
                                Documentación
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={BiBuoy}>
                                Ayuda
                      </Sidebar.Item>
                      </Sidebar.ItemGroup>              
            </Sidebar.Items>
            {/*<div className=''>hola</div>*/}
        </Sidebar>
    )
}