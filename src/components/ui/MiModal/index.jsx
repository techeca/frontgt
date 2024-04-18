import { Modal, Button} from 'flowbite-react';

export default function MiModal({children, openModal, setOpenModal, label, btnLabel}){

    return(
            <Modal className='font-regular animate-fade-up animate-ease-in-out transition-opacity animate-duration-500 bg-opacity-10' size={'4xl'} show={openModal} onClose={() => setOpenModal('')}>
                <div className=''>
                    <Modal.Header>{label}</Modal.Header>
                    <Modal.Body className=''>
                    {children}
                    </Modal.Body>
                    <Modal.Footer className='bg-white mb-6'>
                        <div className='flex w-full gap-6'>
                            <Button type='submit' className='w-full bg-cyan-600'>{btnLabel}</Button>
                            <Button className='w-full' color={'gray'} onClick={() => setOpenModal('')}>Cerrar</Button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>
    )
}