import * as React from 'react'

import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { API } from '../../config/api'
import { UserContext } from "../context/userContext"

export default function ProfileEl() {
    const [state, dispatch] = React.useContext(UserContext)
    const navigate = useNavigate()

    const [user, setUser] = React.useState(null)

    const getUser = async () => {
        const response = await API.get(`/user/${state.user.id}`)
        setUser(response.data.data)
    }

    React.useEffect(() => {
        if (state.user) {
            getUser()
        }
    }, [state])

    return (
        <Container className="px-5">
            <Container className='p-5'>
                <h3 className="ff-tns fs-36 fw-bold text-center text-lg-start mb-5">Profile</h3>
                <Row style={{ backgroundColor: '#FFD9D9', borderRadius: '8px', padding: '25px', margin: '10px' }}>
                    <Col>
                        <Row className="text-start d-flex align-items-center mb-2">
                            <Col className="col-1"> <p><i className="fa-solid fa-envelope" style={{ color: '#8A8C90', fontSize: '2rem' }}></i></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">{user?.email ? user?.email : "No Email Has Been Registered"}</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Email</p>

                            </Col>
                        </Row>
                        <Row className="text-start d-flex align-items-center mb-2">
                            <Col className="col-1"> <p><i className="fa-solid fa-venus-mars" style={{ color: '#8A8C90', fontSize: '2rem' }}></i></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">{user?.gender ? user?.gender : "unknown"}</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Gender</p>

                            </Col>
                        </Row>
                        <Row className="text-start d-flex align-items-center mb-2">
                            <Col className="col-1"> <p><i className="fa-solid fa-phone" style={{ color: '#8A8C90', fontSize: '2rem' }}></i></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">{user?.phone ? user?.phone : "No Phone Number Has Been Registered"}</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Mobile phone</p>

                            </Col>
                        </Row>
                        <Row className="text-start d-flex align-items-center mb-2">
                            <Col className="col-1"> <p><i className="fa-solid fa-location-dot" style={{ color: '#8A8C90', fontSize: '2rem' }}></i></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">{user?.address ? user?.address : "No Address Has Been Submitted"}</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Adress</p>

                            </Col>
                        </Row>



                    </Col>
                    <Col className="col-12 col-lg-4">
                        <Image className="mb-3 rounded" src={user?.image ? user?.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZt50gh1uEkLw2lX99k9bWVzxDiKZ4O9rmqxk98XhfOg&s"} style={{ width: '227px', height: '202px', objectFit: 'cover' }} />
                        <Button onClick={() => navigate("/edit-profile")} className="fw-bold ff-avn fs-18" style={{ width: '227px' }} variant="danger">Edit Profile</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="p-5">
                <h3 className="ff-tns fs-36 fw-bold text-center text-lg-start">My Books</h3>
            </Container>
        </Container>
    )
}