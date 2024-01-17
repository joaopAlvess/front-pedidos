import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import TableMain from '../components/TableMain'
import ButtonsTwo from '../components/ButtonsTwo'
import { Button } from 'react-bootstrap'
import CadastroModal from '../components/CadastroModal'

const Home = () => {
    const headers = ["ID", "Nome", "Telefone", "Endereço", "Produto", "Total"]
    const data = ['1', 'Mark', '', '@mdo', '@mdo', '', ''];

    const [open, setOpen] = useState(false);

    const handleShow = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    return (
        <>
            <NavBar />
            <div className='bt-one'>
                <Button variant="success" onClick={handleShow}>Cadastro Cliente</Button>
                <Button variant="warning">Desabilitar Cliente</Button>
            </div>
            <TableMain headers={headers} data={data} />
            <ButtonsTwo />
            <CadastroModal 
            show={open}
            handleClose={handleClose}
            title="Cadestre o Cliente"
            />
        </>
    )
}

export default Home