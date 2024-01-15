import React from 'react'
import NavBar from '../components/NavBar'
import TableMain from '../components/TableMain'
import ButtonsTwo from '../components/ButtonsTwo'
import { Button } from 'react-bootstrap'

const Home = () => {
    const headers = ["ID", "Nome", "Telefone", "Endereço", "Produto", "Total"]
    const data = ['1', 'Mark', '', '@mdo', '@mdo', '', ''];


    return (
        <>
            <NavBar />
            <div className='bt-one'>
                <Button variant="success" onClick={() => console.log('Clicando')}>Cadastro Cliente</Button>
                <Button variant="warning">Desabilitar Cliente</Button>
            </div>
            <TableMain headers={headers} data={data} />
            <ButtonsTwo />
        </>
    )
}

export default Home