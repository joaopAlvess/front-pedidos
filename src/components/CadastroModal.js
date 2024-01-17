import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const CadastroModal = ({show, handleClose, title}) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome: </Form.Label>
                            <Form.Control type="text" placeholder="Name Example" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default CadastroModal