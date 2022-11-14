import * as React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import convertRupiah from 'rupiah-format'
import { API } from '../../config/api'
// import { orders } from "../dummies/orders"
import FixOrderPopup from './FixOrderPopup'

export default function CartEl() {
    const [showFixOrderPopup, setShowFixOrderPopup] = React.useState(false)
    const navigate = useNavigate()


    const { data: cartData, refetch } = useQuery('cartCache', async () => {
        try {
            const response = await API.get('/current-carts')
            return response.data.data
        } catch (err) {
            console.log(err)
        }
    })

    const cart = cartData?.map((item) => item.book_id)
    console.log(cartData, "cartData")
    // console.log(AllBookID, "allbooks")
    console.log("ini cart", cart)
    const handleCheckout = async () => {
        try {

            const data = {
                total: subTotal,
                book_id: cart
            }
            const response = await API.post("/transaction", data);
            // const cart = response.data.data.map(item => item.book_id)
            console.log(response, "ini response")

            const token = response.data.data.token;

            window.snap.pay(token, {
                onSuccess: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/profile");
                },
                onPending: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/profile");
                },
                onError: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                },
                onClose: function () {
                    /* You may add your own implementation here */
                    alert("you closed the popup without finishing the payment");
                },
            });

            // setShowFixOrderPopup(true)
        } catch (err) {
            console.log(err)
        }
    }


    React.useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
        const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        //change this according to your client-key
        const myMidtransClientKey = "SB-Mid-client-XuvTZnVxV9tn-tIZ";

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);



    React.useEffect(() => {
        refetch()
    }, [])

    const subTotal = cartData?.map((item) => item.book.price).reduce((a, b) => a + b, 0);

    return (
        <Container className='px-5'>
            <Container className="p-5">

                <h3 className="ff-tns fs-24 fw-bold text-center text-lg-start">My Cart</h3>

                {cartData?.length !== 0 ? (<Row>
                    <Col className="col-12 col-lg-7" >
                        <hr />
                        <div style={{ height: '380px', overflowY: 'scroll', overflowX: 'hidden' }}>
                            {cartData?.map((order) => (
                                <Row key={order.id} className="mb-3 justify-content-between">

                                    <Col className="col-9">
                                        <Row>
                                            <Col className="col-5  text-end">
                                                <Image src={order.book.cover} alt="cover" style={{ width: '130px', height: '175px', objectFit: 'cover' }} />
                                            </Col>
                                            <Col className='col-7 text-start mt-1'>
                                                <h6 className="ff-tns fs-18 fw-bold">{order.book.title}</h6>
                                                <p className="ff-avn fs-14 fst-italic" style={{ color: '#929292' }}>By {order.book.author}</p>
                                                <p className="ff-avn fs-14 fw-bold" style={{ color: '#44B200' }}>{convertRupiah.convert(order.book.price)}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className="col-3 text-end pe-3"><i onClick={async () => {
                                        try {
                                            const response = await API.delete(
                                                `/cart/delete/${order.id}`
                                            );
                                            refetch();
                                        } catch (err) {
                                            console.log(err)
                                        }


                                    }} style={{ cursor: 'pointer' }} className="fa-solid fa-trash"></i></Col>

                                </Row>
                            ))}

                        </div>
                        <hr />
                    </Col>
                    <Col className="col-12 col-lg-5 ff-avn fs-14">
                        <hr />
                        <Row  >
                            <Col className="text-start">Subtotal</Col>
                            <Col className="text-end">{convertRupiah.convert(subTotal)}</Col>
                        </Row>
                        <Row >
                            <Col className="text-start">Qty</Col>
                            <Col className="text-end">{cartData?.length}</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col style={{ color: '#44B200' }} className="text-start fw-bold">Total</Col>
                            <Col style={{ color: '#44B200' }} className="text-end fw-bold">{convertRupiah.convert(subTotal)}</Col>
                        </Row>
                        <Button onClick={handleCheckout} className="float-end fs-18 fw-bold mt-5" variant='dark' style={{ width: '70%' }}>Pay</Button>
                    </Col>
                </Row >
                ) : <div className=' d-flex flex-column align-items-center justify-content-center fs-tns' style={{ height: '45vh' }}>
                    <div>Looks like you haven't ordered anything 🤔</div>
                    <div onClick={() => navigate("/")} className='fw-bold' style={{ cursor: 'pointer' }}>back to home</div>
                </div>}
                <FixOrderPopup showFixOrderPopup={showFixOrderPopup} setShowFixOrderPopup={setShowFixOrderPopup} />
            </Container >

        </Container>
    )
}