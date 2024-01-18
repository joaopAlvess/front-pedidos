
import NavBar from '../components/NavBar'
import { Button } from 'react-bootstrap'


const Produtos = () => {


  return (
    <>
      <NavBar />
      <div className='bt-one'>
        <Button variant="success" onClick={() => console.log('Clicando')}>Cadastro Produto</Button>
        <Button variant="warning">Desabilitar Produto</Button>
      </div>
      
    

    </>
  )
}

export default Produtos