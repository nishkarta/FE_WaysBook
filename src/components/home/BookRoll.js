import { useNavigate } from "react-router-dom";

import { Button, Card, Col, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import Slider from 'react-slick'
import 'react-multi-carousel/lib/styles.css';
import convertRupiah from 'rupiah-format';

import { books } from "../dummies/books";
export default function BookRoll() {
    const navigate = useNavigate()


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true
    };
    return (
        <div className="linear-grey py-5 py-lg-0 px-3">
            {/* <Carousel responsive={responsive}> */}
            <Slider {...settings}>
                {
                    books.slice(0, 5).map((book) => (
                        <div onClick={() => navigate(`/detail/${book.id}`)} className="text-start" style={{ width: '26rem', border: 'none', borderRadius: 0 }} key={book.id}>
                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <Card.Img className="mx-0 px-0" style={{ width: '13rem', height: '18rem', objectFit: "cover", borderRadius: 0 }} alt="book-image" src={book.cover} />
                                </Col>

                                <Col className="px-0 mx-0 d-flex align-items-center">
                                    <Card.Body className="bg-white me-3 px-3" style={{ borderRadius: 0, height: '14rem' }}>
                                        <Card.Title className="ff-tns fs-24 fw-bold">{book.title}</Card.Title>
                                        <Card.Text style={{ lineHeight: '2', marginBottom: '40px' }}>
                                            <span className="ff-avn fs-14" style={{ color: '#929292', fontStyle: 'italic' }}>{book.author}</span>
                                            <br />
                                            <span className="ff-avn fs-14">{book.desc}</span>
                                            <br />
                                            <span className="ff-avn fs-18" style={{ color: '#44B200' }}>{convertRupiah.convert(book.price)}</span>
                                            <br />
                                        </Card.Text>
                                        <Button style={{ borderRadius: 0 }} variant="dark w-100">Add Cart</Button>
                                    </Card.Body>
                                </Col>



                            </Row>
                        </div>
                    ))
                }
            </Slider>


            {/* </Carousel> */}



        </div >
    )
}