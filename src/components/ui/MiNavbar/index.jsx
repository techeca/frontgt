import { Dropdown, Navbar, TextInput } from 'flowbite-react';
import { LuSearch } from "react-icons/lu";
import { MdNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

export default function MiNavbar(){
    return(
        <Navbar fluid rounded className='border-[1px] absolute w-full'>
                    <div className='flex gap-6'>
                        <Navbar.Brand href="#">
                            {/*<img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />*/}
                            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">GatoCósmico</span>
                        </Navbar.Brand>
                        <TextInput id="search" type="text" placeholder="Buscar" icon={LuSearch} className='w-420px hidden sm:block' required />
                    </div>
                    <div className="flex md:order-2 gap-4">
                        <MdNotifications className='w-6 h-6 self-center hover:cursor-pointer hover:opacity-80 rounded-full' />
                        <Dropdown arrowIcon={false}
                        inline label={<FaUserCircle className='w-8 h-8 hover:opacity-80' />}>
                        {/*<Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>*/}
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