import React from 'react'
import { Container, Table } from 'react-bootstrap'
import './styles/TableMain.css'

const TableMain = () => {
    return (
        <div className='box-table'>
            <Container>
                <table>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>Produto</th>
                        <th>Total</th>
                    </tr>
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