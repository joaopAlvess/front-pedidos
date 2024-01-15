import React from 'react'
import { Container } from 'react-bootstrap'
import './styles/TableMain.css'

const TableMain = ({ headers, data }) => {
    return (
        <div className='box-table'>
            <Container>
                <table className='table-custom'>
                    <thead className='table-head'>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                               {data.map((item, index)=> (
                                <td key={index}>{item}</td>
                               ))}
                        </tr>
                    </tbody>
                </table>

            </Container>
        </div>
    )
}

export default TableMain;