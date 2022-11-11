import * as React from "react"
import { Container, Form, Button, FloatingLabel, Row, Col } from "react-bootstrap"

import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { API } from "../../config/api"

export default function EditProfileEl() {
    const navigate = useNavigate()
    // const [state, dispatch] = React.useContext()


    const [form, setForm] = React.useState({
        fullName: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        address: "",
        image: "",
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
            formData.set("fullName", form.fullName)
            formData.set("email", form.email)
            formData.set("password", form.password)
            formData.set("gender", form.gender)
            formData.set("phone", form.phone)
            formData.set("role", form.role)
            formData.set("image", form.image[0], form.image[0].name)

            const data = await API.post("/book", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            navigate("/profile")

        } catch (err) {
            console.log(err)
        }
    })

    return (
        <Container className="px-5">
            <Container className="p-5">
                <h3 className="ff-tns fs-36 fw-bold text-center text-lg-start mb-5">Edit Profile</h3>

                <Form onSubmit={(e) => handleSubmit.mutate(e)} className="mb-3">
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Full Name' controlId="floatingInput">
                            <Form.Control name="fullName" type="fullName" placeholder="Full Name" />
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
                            <input type="file" className="form-control" placeholder="Attach Book File" aria-label="Attach Book File" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2">.pdf</span>
                        </Col>
                        <Col className="input-group mb-3 w-50">
                            <>

                                <input type="file" className="form-control" placeholder="Attach Book Cover" aria-label="Attach Book Cover" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">.png</span>
                            </>
                        </Col>
                    </Row>

                    <Button style={{ backgroundColor: '#393939' }} className="rounded-0 border-0 p-3 float-end">Add Book <i className="fa-solid fa-book"></i></Button>
                </Form>
            </Container>
        </Container>

    )
}