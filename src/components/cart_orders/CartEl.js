import * as React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import convertRupiah from 'rupiah-format'
import { orders } from "../dummies/orders"
import FixOrderPopup from './FixOrderPopup'

export default function CartEl() {
    const [showFixOrderPopup, setShowFixOrderPopup] = React.useState(false)
    return (
        <Container className='px-5'>
            <Container className="p-5">

                <h3 className="ff-tns fs-24 fw-bold text-center text-lg-start">My Cart</h3>

                <Row>
                    <Col className="col-12 col-lg-7" >
                        <hr />
                        <div style={{ height: '380px', overflowY: 'scroll', overflowX: 'hidden' }}>
                            {orders.map((order) => (
                                <Row key={order.id} className="mb-3 justify-content-between">

                                    <Col className="col-9">
                                        <Row>
                                            <Col className="col-5  text-end">
                                                <Image src={order.cover} alt="cover" style={{ width: '130px', height: '175px', objectFit: 'cover' }} />
                                            </Col>
                                            <Col className='col-7 text-start mt-1'>
                                                <h6 className="ff-tns fs-18 fw-bold">{order.title}</h6>
                                                <p className="ff-avn fs-14 fst-italic" style={{ color: '#929292' }}>By {order.author}</p>
                                                <p className="ff-avn fs-14 fw-bold" style={{ color: '#44B200' }}>{convertRupiah.convert(order.price)}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="col-3 text-end pe-3"><i class="fa-solid fa-trash"></i></Col>

                                </Row>
                            ))}

                        </div>
                        <hr />
                    </Col>
                    <Col className="col-12 col-lg-5 ff-avn fs-14">
                        <hr />
                        <Row  >
                            <Col className="text-start">Subtotal</Col>
                            <Col className="text-end">{convertRupiah.convert(50000)}</Col>
                        </Row>
                        <Row >
                            <Col className="text-start">Qty</Col>
                            <Col className="text-end">3</Col>
                        </Row>
                        <hr />
                        <Row >
                            <Col style={{ color: '#44B200' }} className="text-start fw-bold">Total</Col>
                            <Col style={{ color: '#44B200' }} className="text-end fw-bold">{convertRupiah.convert(50000)}</Col>
                        </Row>
                        <input type="file" className="my-5" />
                        <Button onClick={() => setShowFixOrderPopup(true)} className="float-end fs-18 fw-bold" variant='dark' style={{ width: '70%' }}>Pay</Button>
                    </Col>
                </Row >
                <FixOrderPopup showFixOrderPopup={showFixOrderPopup} setShowFixOrderPopup={setShowFixOrderPopup} />
            </Container >

        </Container>
    )
}