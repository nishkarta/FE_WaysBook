import { useNavigate } from "react-router-dom";

import { Button, Card, Col, Row } from "react-bootstrap";
import Slider from 'react-slick';
import convertRupiah from 'rupiah-format';

import { useQuery } from "react-query";
import { API } from "../../config/api";
export default function BookRoll() {
    const navigate = useNavigate()


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 8000,
        pauseOnHover: true
    };

    let { data: books } = useQuery('latestBooksCache', async () => {
        const response = await API.get('books-latest')
        return response.data.data
    })

    return (
        <div className="linear-grey py-5 py-lg-0 px-5">

            <h1 className="ff-tns fs-36 fw-bold mb-5">Latest Uploads</h1>

            <Slider {...settings}>
                {
                    books?.slice(0, 5).map((item, index) => (
                        <div onClick={() => navigate(`/detail/${item?.id}`)} className="text-start" style={{ width: '26rem', border: 'none', borderRadius: 0 }} key={index}>
                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <Card.Img className="mx-0 px-0" style={{ width: '13rem', height: '18rem', objectFit: "cover", borderRadius: 0 }} alt="book-image" src={item?.cover} />
                                </Col>

                                <Col className="px-0 mx-0 d-flex align-items-center">
                                    <Card.Body className="bg-white me-3 px-3" style={{ borderRadius: 0, height: '14rem' }}>
                                        <Card.Title className="ff-tns fs-24 fw-bold">{item?.title}</Card.Title>
                                        <Card.Text style={{ lineHeight: '2', marginBottom: '40px' }}>
                                            <span className="ff-avn fs-14" style={{ color: '#929292', fontStyle: 'italic' }}>{item?.author}</span>
                                            <br />
                                            <span className="ff-avn fs-14">{item?.about}</span>
                                            <br />
                                            <span className="ff-avn fs-18" style={{ color: '#44B200' }}>{convertRupiah.convert(item?.price)}</span>
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



        </div >
    )
}