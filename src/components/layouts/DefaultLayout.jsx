import MiNavbar from '../ui/MiNavbar';
import MiSidebar from '../ui/MiSidebar';
import MiFooter from '../ui/MiFooter'

export default function DefaultLayout({children}){

    return(
        <div className='h-screen static'>
            <div className='bg-black w-full h-screen absolute z-[-1] opacity-5'>black</div>
            <MiNavbar />
            <div className='flex h-full pt-[62px]'>
            <MiSidebar />
                <div className='w-full text-center p-4 overflow-y-scroll'>
                    {children}
                    <MiFooter />
                </div>
            </div>
        </div>
    )
}