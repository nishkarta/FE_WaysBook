import * as React from "react"
import { Container, Form, Button, FloatingLabel, Row, Col } from "react-bootstrap"

import { useMutation } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { API } from "../../config/api"
import { useQuery } from "react-query"
import { UserContext } from "../context/userContext"

export default function EditProfileEl() {
    const [isLoading, setIsLoading] = React.useState(false);

    const params = useParams()
    const navigate = useNavigate()
    const [state, dispatch] = React.useContext(UserContext)
    const [preview, setPreview] = React.useState(null)

    const [form, setForm] = React.useState({
        fullName: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        adress: "",
        image: "",
    })

    let { data: user, refetch } = useQuery("editProfileCache", async () => {
        const response = await API.get(`/user/${state.user.id}`);
        return response.data.data;
    });

    React.useEffect(() => {
        if (user) {
            setPreview(user.image);
            setForm({
                ...form,
                fullName: user.fullName,
                email: user.email,
                password: user.password,
                gender: user.gender,
                phone: user.phone,
                address: user.address,
            })
        }
        refetch()
    }, [user])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value
        })
        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0])
            setPreview(url)
        }
    }

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true)

            const formData = new FormData()
            formData.set("fullName", form.fullName)
            formData.set("email", form.email)
            formData.set("password", form.password)
            formData.set("gender", form.gender)
            formData.set("phone", form.phone)
            formData.set("address", form.address)

            formData.set("image", form.image[0], form.image[0].name)

            const response = await API.patch(`/user/${user.id}`, formData, {
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
                            <Form.Control value={form?.fullName} onChange={handleChange} name="fullName" type="text" placeholder="Full Name" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Email' controlId="floatingInput">
                            <Form.Control value={form?.email} onChange={handleChange} name="email" type="email" placeholder="Email" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Password' controlId="floatingInput">
                            <Form.Control value={form?.password} onChange={handleChange} name="password" type="password" placeholder="Password" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Gender' controlId="floatingInput">
                            <Form.Select required onChange={handleChange} name="gender" value={form?.gender} aria-label="Default select example" className='bg-grey2 text-grey2 border-grey2'>
                                <option hidden value="default">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unknown">I'd like not to talk about it</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Phone' controlId="floatingInput">
                            <Form.Control value={form?.phone} onChange={handleChange} name="phone" type="tel" placeholder="Phone" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <FloatingLabel label='Address' controlId="floatingInput">
                            <Form.Control value={form?.address} onChange={handleChange} name="address" type="text" placeholder="Address" />
                        </FloatingLabel>
                    </Form.Group>
                    <Row>

                        <Col className="input-group mb-3 w-50">
                            <>

                                <input type="file" name="image" onChange={handleChange} className="form-control" placeholder="Attach Book Cover" aria-label="Attach Book Cover" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">.png</span>
                            </>
                        </Col>
                    </Row>
                    {preview && (
                        <div className="float-start">
                            <img
                                src={preview}
                                style={{
                                    maxWidth: "150px",
                                    maxHeight: "150px",
                                    objectFit: "cover",
                                }}
                                alt={preview}
                            />
                        </div>
                    )}

                    <Button type="submit" style={{ backgroundColor: '#393939' }} className="rounded-0 border-0 p-3 float-end">{isLoading ? "Saving Changes..." : "Save Changes"}</Button>
                </Form>
            </Container>
        </Container>

    )
}