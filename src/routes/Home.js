import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Button } from 'react-bootstrap'
import CadastroModal from '../components/CadastroModal'
import apiPedidos from '../services/apiPedidos'

import '../components/styles/Home.css'
import '../components/styles/ButtonsOne.css'



const Home = () => {

    const [clientes, setClientes] = useState([])
    const [open, setOpen] = useState(false);

    const handleShow = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        apiPedidos.get('/clientes').then(resultado => {
            setClientes(resultado.data.content)
        }).catch(error => {
            console.error("Erro na requisição: ", error)
        });

    }, []);

    return (
        <>
            <NavBar />
            <div className='menu-lateral'>
                <a href='/'>Clientes</a>
                <a href='/produtos'>Produtos</a>
            </div>

            <div className='box-buttons'>
                <div className='bt-one'>
                    <Button variant="success" onClick={handleShow}>Cadastro Cliente</Button>
                    <Button variant="warning">Desabilitar Cliente</Button>
                </div>
                <div className='bt-two'>
                    <Button variant="info">Imprimir Relatórios</Button>
                    <Button variant="danger">Excluir Registros</Button>
                </div>
            </div>

            <div className='box-table'>

                <table className='table-custom'>
                    <thead className='table-head'>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.telefone}</td>
                                <td>{item.endereco}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CadastroModal
                show={open}
                handleClose={handleClose}
                title="Cadestre o Cliente"
            />
        </>
    )
}

export default Home