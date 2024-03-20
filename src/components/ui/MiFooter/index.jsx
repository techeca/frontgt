import { Footer } from "flowbite-react"

export default function MiFooter(){

    return(
        <div>
            <Footer container className='mt-4 font-regular'>
                <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.LinkGroup className='text-black font-[500]'>
                            <Footer.Link href="#">Sobre Nosotros</Footer.Link>
                            <Footer.Link href="#">Políticas</Footer.Link>
                            <Footer.Link href="#">Licencia</Footer.Link>
                            <Footer.Link href="#">Contacto</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Copyright className='mt-2' href="#" by="GatoCósmico" year={2024} />
                </div>
            </Footer>
        </div>
    )
}