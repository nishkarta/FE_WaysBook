import { Container, Row, Col, Image, Button } from "react-bootstrap"

export default function ProfileEl() {
    return (
        <Container className="px-5">
            <Container className='p-5'>
                <h3 className="ff-tns fs-36 fw-bold text-center text-lg-start mb-5">Profile</h3>
                <Row style={{ backgroundColor: '#FFD9D9', borderRadius: '8px', padding: '25px', margin: '10px' }}>
                    <Col>
                        <Row className="text-start d-flex align-items-center mb-2">
                            <Col className="col-1"> <p><i class="fa-solid fa-envelope" style={{ color: '#8A8C90', fontSize: '2rem' }}></i></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">ellen@gmail.com</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Email</p>

                            </Col>
                        </Row>
                        <Row className="text-start d-flex align-items-center mb-2">
                            <Col className="col-1"> <p><i class="fa-solid fa-venus-mars" style={{ color: '#8A8C90', fontSize: '2rem' }}></i></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">Female</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Gender</p>

                            </Col>
                        </Row>
                        <Row className="text-start d-flex align-items-center mb-2">
                            <Col className="col-1"> <p><i class="fa-solid fa-phone" style={{ color: '#8A8C90', fontSize: '2rem' }}></i></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">0812-8623-8911</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Mobile phone</p>

                            </Col>
                        </Row>
                        <Row className="text-start d-flex align-items-center mb-2">
                            <Col className="col-1"> <p><i class="fa-solid fa-location-dot" style={{ color: '#8A8C90', fontSize: '2rem' }}></i></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">Perumahan Permata Bintaro Residence C-3</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Adress</p>

                            </Col>
                        </Row>



                    </Col>
                    <Col className="col-12 col-lg-4">
                        <Image className="mb-3 rounded" src="https://img.freepik.com/free-photo/half-profile-image-beautiful-young-woman-with-bob-hairdo-posing-gazing-with-eyes-full-reproach-suspicion-human-facial-expressions-emotions-reaction-feelings_343059-4660.jpg?w=2000" style={{ width: '227px', height: '202px', objectFit: 'cover' }} />
                        <Button className="fw-bold ff-avn fs-18" style={{ width: '227px' }} variant="danger">Edit Profile</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="p-5">
                <h3 className="ff-tns fs-36 fw-bold text-center text-lg-start">My Books</h3>
            </Container>
        </Container>
    )
}