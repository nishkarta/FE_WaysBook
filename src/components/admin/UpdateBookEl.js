import * as React from "react"
import { Container, Form, Button, FloatingLabel, Row, Col } from "react-bootstrap"

import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { API } from "../../config/api"

export default function UpdateBookEl() {
    const navigate = useNavigate()
    // const [state, dispatch] = React.useContext()


    const [form, setForm] = React.useState({
        title: "",
        publication_date: "",
        pages: "",
        isbn: "",
        price: "",
        about: "",
        file: "",
        cover: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value
        })
        // if (e.target.type === "file") {
        //     let url = URL.createObjectURL(e.target.files[0])
        //     setPreview(url)
        // }

    }

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()

            const formData = new FormData()
            formData.set("title", form.title)
            formData.set("publication_date", form.publication_date)
            formData.set("pages", form.pages)
            formData.set("isbn", form.isbn)
            formData.set("price", form.price)
            formData.set("about", form.about)
            formData.set("file", form.file[0], form.file[0].name)
            formData.set("cover", form.cover[0], form.cover[0].name)

            const data = await API.post("/book", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            navigate("/uploaded")

        } catch (err) {
            console.log(err)
        }
    })

    return (
        <Container className="px-5">
            <Container className="p-5">
                <h3 className="ff-tns fs-36 fw-bold text-center text-lg-start mb-5">Update Book</h3>

                <Form onSubmit={(e) => handleSubmit.mutate(e)} className="mb-3">
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Title' controlId="floatingInput">
                            <Form.Control onChange={handleChange} name="title" type="title" placeholder="Title" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Publication Date' controlId="floatingInput">
                            <Form.Control name="publication_date" type="date" placeholder="Publication Date" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Pages' controlId="floatingInput">
                            <Form.Control onChange={handleChange} name="pages" type="number" placeholder="Pages" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='ISBN' controlId="floatingInput">
                            <Form.Control onChange={handleChange} name="isbn" type="text" placeholder="ISBN" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Price' controlId="floatingInput">
                            <Form.Control onChange={handleChange} name="price" type="num" placeholder="Price" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <FloatingLabel controlId="floatingTextarea2" label="About This Book">
                            <Form.Control
                                as="textarea" name="about" onChange={handleChange}
                                placeholder="About This Book"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Row>
                        <Col className="input-group mb-3 col-6 w-50">
                            <input type="file" name="file" onChange={handleChange} className="form-control" placeholder="Attach Book File" aria-label="Attach Book File" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2">.pdf</span>
                        </Col>
                        <Col className="input-group mb-3 w-50">
                            <>

                                <input type="file" name="cover" onChange={handleChange} className="form-control" placeholder="Attach Book Cover" aria-label="Attach Book Cover" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">.png</span>
                            </>
                        </Col>
                    </Row>

                    <Button type="submit" style={{ backgroundColor: '#393939' }} className="rounded-0 border-0 p-3 float-end">Update Book <i className="fa-solid fa-book"></i></Button>
                </Form>
            </Container>
        </Container>

    )
}