import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Button } from 'react-bootstrap'
import CadastroModal from '../components/CadastroModal'
import apiPedidos from '../services/apiPedidos'
import {
    BiSolidCopyAlt, BiSolidZoomOut, BiNotepad,
    BiSolidXSquare, BiSolidUser,
} from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";

import '../components/styles/Home.css'




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
                <a href='/'>
                    <BiSolidUser style={{ marginBottom: '5px', fontSize: '40px'}}/> Clientes</a>
                <a href='/produtos'>
                    <FaShoppingBag style={{ marginBottom: '5px', fontSize: '40px'}}/> Produtos</a>
            </div>

            <div className='container'>

                <div className='box-buttons'>
                    <div className='bt-one'>
                        <button style={{ borderRadius: '5px', borderColor: '#547a32', color: '#547a32', padding: '20px', fontSize: '17px', fontWeight: 'bold' }}>
                            <BiSolidCopyAlt style={{ marginRight: '5px', fontSize: '40px'}}/> Cadastro Cliente
                        </button>
                        <button style={{ borderRadius: '5px', borderColor: '#f7cc0a', color: '#f7cc0a', padding: '20px', fontSize: '17px', fontWeight: 'bold' }}>
                            <BiSolidZoomOut style={{ marginRight: '5px', fontSize: '40px'}}/> Desabilitar Cliente
                        </button>
                        <button style={{ borderRadius: '5px', borderColor: '#2776f5', color: '#2776f5', padding: '20px', fontSize: '17px', fontWeight: 'bold' }}>
                            <BiNotepad style={{ marginRight: '5px', fontSize: '40px'}}/> Imprimir Relatório
                        </button>
                        <button style={{ borderRadius: '5px', borderColor: '#eb141', color: '#eb1410', padding: '20px', fontSize: '17px', fontWeight: 'bold' }}>
                            <BiSolidXSquare style={{ marginRight: '5px', fontSize: '40px'}}/> Excluir Registros
                        </button>

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

