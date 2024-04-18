import { Modal, Button} from 'flowbite-react';
import { GoPlus } from "react-icons/go";
import NewProductForm from '../forms/NewProductForm';
import PropTypes from 'prop-types'

export default function NewProduct({openModal, setOpenModal}){

    return(
        <Modal className='font-regular animate-fade-up animate-ease-in-out transition-opacity animate-duration-500 bg-opacity-10' size={'4xl'} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Agregar Producto</Modal.Header>
        <Modal.Body className=''>
        <NewProductForm />
        </Modal.Body>
        <Modal.Footer className=''>
            <div className='flex w-full gap-6'>
                <Button type='submit' className='w-full bg-cyan-600'><GoPlus className='w-5 h-5 mr-2' />Agregar producto</Button>
                <Button className='w-full' color={'gray'} onClick={() => setOpenModal(false)}>Cerrar</Button>
            </div>
        </Modal.Footer>
      </Modal>
    )
}

NewProduct.PropTypes = {
    openModal: PropTypes.string,
    setOpenModal: PropTypes.func
}