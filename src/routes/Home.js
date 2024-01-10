import React from 'react'
import { Button } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import ButtonsOne from '../components/ButtonsOne'
import TableMain from '../components/TableMain'

const Home = () => {
    return (
        <>
            <NavBar/>
            <ButtonsOne />
            <TableMain />
        </>
    )
}

export default Home