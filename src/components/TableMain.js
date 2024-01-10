import React from 'react'
import { Container } from 'react-bootstrap'
import './styles/TableMain.css'

const TableMain = () => {
    return (
        <div className='box-table'>
            <Container>
                <table className='table-custom'>
                    <thead className='table-head'>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>Produto</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td></td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>

            </Container>
        </div>
    )
}

export default TableMain;