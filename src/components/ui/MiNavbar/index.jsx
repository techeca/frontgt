import { Dropdown, Navbar, TextInput } from 'flowbite-react';
import { LuSearch } from "react-icons/lu";
import { MdNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import {userService} from "../../../services/user.service"
import useNavigeishon from '../../../hooks/useNavigeishon';
import { Link } from 'react-router-dom';

const BASEPATH = import.meta.env.MODE === 'development' ? '' : 'frontgt/'

export default function MiNavbar(){
    const navigeishon = useNavigeishon()
    const userData = JSON.parse(navigeishon.userService.usuario) 

    function desconectar(){
        userService.logout()
        navigeishon.checkPage('/login')
    }

    return(
        <Navbar fluid rounded className='border-[1px] absolute w-full'>
                    <div className='flex gap-6'>
                        <Navbar.Brand href="/dashboard">
                            {/*<img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />*/}
                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">GatoCósmico</span>
                        </Navbar.Brand>
                        <TextInput id="search" type="text" placeholder="Buscar" icon={LuSearch} className='w-420px hidden sm:block' disabled />
                    </div>
                    <div className="flex md:order-2 gap-4">
                        <MdNotifications className='w-6 h-6 self-center  rounded-full cursor-not-allowed text-gray-400' />
                        <Dropdown arrowIcon={false} inline label={<FaUserCircle className='w-8 h-8 hover:opacity-80' />}>
                        <Dropdown.Header className='hover:bg-slate-300/20 cursor-pointer'>
                            <Link to={`${BASEPATH}profile`}>
                                <span className="block text-sm">{userData.nombre}</span>
                                <span className="block truncate text-sm font-medium">{userData.correo}</span>
                            </Link>
                        </Dropdown.Header>
                        {/*<Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />*/}
                        <Dropdown.Item onClick={desconectar} className='text-red-600 rounded-md flex items-center'>Desconectar <FaSignOutAlt className='mt-[3px] ml-2' /></Dropdown.Item>
                        </Dropdown>
                        {/*<Navbar.Toggle />*/}
                    
                    </div>
                    {/*<Navbar.Collapse>
                        <Navbar.Link href="#" active>
                        Home
                        </Navbar.Link>
                        <Navbar.Link href="#">About</Navbar.Link>
                        <Navbar.Link href="#">Services</Navbar.Link>
                        <Navbar.Link href="#">Pricing</Navbar.Link>
                        <Navbar.Link href="#">Contact</Navbar.Link>
                    </Navbar.Collapse>*/}
            </Navbar>
    )
}