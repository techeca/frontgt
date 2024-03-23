import MiNavbar from '../ui/MiNavbar';
import MiSidebar from '../ui/MiSidebar';
import MiFooter from '../ui/MiFooter'
import useNavigeishon from '../../hooks/useNavigeishon';

export default function DefaultLayout({children}){
    const navigeishon = useNavigeishon()

    return(
        <div className='h-screen static'>
            <div className='bg-black w-full h-screen absolute z-[-1] opacity-5'>black</div>
            {navigeishon.userService.usuario ? <MiNavbar /> : <></>}
            <div className='flex h-full pt-[62px]'>
            {navigeishon.userService.usuario ? <MiSidebar /> : <></>}
                <div className='w-full text-center p-4 overflow-y-scroll'>
                    {children}
                    {navigeishon.userService.usuario ? <MiFooter /> : <></>}
                </div>
            </div>
        </div>
    )
}