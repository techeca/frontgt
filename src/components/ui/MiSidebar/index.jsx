import { Sidebar} from 'flowbite-react';
import { HiChartPie, HiUser, HiViewBoards  } from 'react-icons/hi';
import { MdSpaceDashboard, MdOutlinePets } from "react-icons/md";
import { BiBuoy } from 'react-icons/bi';
import { BsGearFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdInventory } from "react-icons/md";
import { FaIdCard } from "react-icons/fa6";
import { TbArrowBarLeft, TbArrowBarRight } from "react-icons/tb";
import { useState } from 'react';
import './MiSidebar.css'

export default function MiSidebar(){
    const [isHidden, setIsHidden] = useState(false)

    const userpaths = [
        {path: 'dashboard',
        name: 'Dashboard',
        icon: MdSpaceDashboard},
        {path: 'users',
        name: 'Usuarios',
        icon: HiUser},
        {path: 'calendar',
        name: 'Agenda',
        icon: FaCalendarAlt},
        {path: 'clients',
        name: 'Clientes',
        icon: FaIdCard},
        {path: 'patients',
        name: 'Pacientes',
        icon: MdOutlinePets},
        {path: 'inventory',
        name: 'Inventario',
        icon: MdInventory},
        {path: '#',
        name: 'Configuración',
        icon: BsGearFill}
    ]

    const sistempaths = [
        {
            path: '#',
            name: 'Cambiar Plan',
            icon: HiChartPie
        },
        {
            path: '#',
            name: 'Documentación',
            icon: HiViewBoards
        },
        {
            path: '#',
            name: 'Ayuda',
            icon: BiBuoy
        }
    ]
//f28779
//2DB64B
    return(
        <Sidebar className={`border-b-[1px] border-r-[1px] font-regular lg:block hidden  ${isHidden ? 'w-[64px]' : ''} transition-width duration-[400ms] ease-out`} aria-label="Sidebar">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {userpaths.map(r => 
                        <Sidebar.Item key={r.name} as={Link} to={r.path} className={`${isHidden ? '' : ''} hover:bg-gray-200`}>
                            <div className='flex p-0'> 
                                <r.icon className={`${isHidden ? '' : 'ml-[-12px]'} w-6 h-6 text-gray-500 transition-margin duration-500 ease-in-out`} />
                                <p className={`${isHidden ? 'opacity-0 w-0' : 'opacity-100 ml-3'} transition-opacity duration-500 ease-in-out`}>{r.name}</p>
                            </div>
                        </Sidebar.Item>
                    )}
                            {/*<Sidebar.Collapse icon={HiShoppingBag} label="Agendamiento">
                                <Sidebar.Item href="#">Products</Sidebar.Item>
                                <Sidebar.Item href="#">Sales</Sidebar.Item>
                                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                                <Sidebar.Item href="#">Shipping</Sidebar.Item>
                            </Sidebar.Collapse>*/}
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    {sistempaths.map(r => 
                        <Sidebar.Item key={r.name} as={Link} to={`dashboard`} className={`${isHidden ? '' : ''} hover:bg-gray-200`}>
                            <div className='flex'> 
                                <r.icon className={`${isHidden ? '' : 'ml-[-12px]'} w-6 h-6 text-gray-500 transition-all duration-500 ease-in-out`} />
                                <p className={`${isHidden ? 'opacity-0 w-0' : 'opacity-100 ml-3'} transition-all duration-500 ease-in-out`}>{r.name}</p>
                            </div>
                        </Sidebar.Item>
                    )}
                </Sidebar.ItemGroup>
                    <div onClick={() => setIsHidden(!isHidden)} className='absolute bg-red-500 bottom-3 left-0 ml-2.5 p-2 rounded-md cursor-pointer hover:bg-red-600'>
                        <div>
                            {isHidden ? 
                                <TbArrowBarRight className={`text-white w-6 h-6`} />
                            :
                                <TbArrowBarLeft className={`text-white w-6 h-6`} />
                            }
                        </div>
                    </div>    
            </Sidebar.Items>
        </Sidebar>
    )
}