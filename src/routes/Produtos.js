
import NavBar from '../components/NavBar'
import TableMain from '../components/TableMain'
import ButtonsTwo from '../components/ButtonsTwo'
import { Button } from 'react-bootstrap'


const Produtos = () => {
  const headers = ['ID', 'Nome Produto', 'Valor']
  const data = ['1', 'Mark', '72.5'];

  return (
    <>
      <NavBar />
      <div className='bt-one'>
        <Button variant="success" onClick={() => console.log('Clicando')}>Cadastro Produto</Button>
        <Button variant="warning">Desabilitar Produto</Button>
      </div>
      < TableMain headers={headers} data={data} />
      <ButtonsTwo />

    </>
  )
}

export default Produtos