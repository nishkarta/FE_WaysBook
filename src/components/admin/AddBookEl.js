import { Container, Form, Button, FloatingLabel, Row, Col } from "react-bootstrap"

export default function AddBookEl() {
    return (
        <Container className="px-5">
            <Container className="p-5">
                <h3 className="ff-tns fs-36 fw-bold text-center text-lg-start mb-5">Add Book</h3>

                <Form className="mb-3">
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Title' controlId="floatingInput">
                            <Form.Control name="title" type="title" placeholder="Title" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Publication Date' controlId="floatingInput">
                            <Form.Control name="date" type="date" placeholder="Publication Date" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Pages' controlId="floatingInput">
                            <Form.Control name="pages" type="number" placeholder="Pages" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='ISBN' controlId="floatingInput">
                            <Form.Control name="isbn" type="text" placeholder="ISBN" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Price' controlId="floatingInput">
                            <Form.Control name="price" type="num" placeholder="Price" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <FloatingLabel controlId="floatingTextarea2" label="About This Book">
                            <Form.Control
                                as="textarea"
                                placeholder="About This Book"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Row>
                        <Col className="input-group mb-3 col-6 w-50">
                            <input type="file" class="form-control" placeholder="Attach Book File" aria-label="Attach Book File" aria-describedby="basic-addon2" />
                            <span class="input-group-text" id="basic-addon2">.pdf</span>
                        </Col>
                        <Col className="input-group mb-3 w-50">
                            <>

                                <input type="file" class="form-control" placeholder="Attach Book Cover" aria-label="Attach Book Cover" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2">.png</span>
                            </>
                        </Col>
                    </Row>

                    <Button style={{ backgroundColor: '#393939' }} className="rounded-0 border-0 p-3 float-end">Add Book <i class="fa-solid fa-book"></i></Button>
                </Form>
            </Container>
        </Container>

    )
}