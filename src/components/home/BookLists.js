import { Container, Row, Col } from "react-bootstrap"

import { books } from "../dummies/books"
import convertRupiah from 'rupiah-format'
import { useNavigate } from "react-router-dom"

export default function BookLists() {
    const navigate = useNavigate()
    return (
        <div className="container-grey py-5 text-center text-lg-start">
            <Container>

                <h1 className="ff-tns fs-36 fw-bold mb-3">Book Lists</h1>
                <Row className=" d-flex justify-content-start mx-auto">

                    {books.map((book) => (
                        <Col style={{ width: '205px' }} className="text-start col-12 col-md-6 col-lg-3 text-center me-3 mb-3" key={book.id} onClick={() => navigate(`/detail/${book.id}`, { book })}>
                            <div className="">
                                <img className="mb-3 w-full" src={book.cover} alt="book" style={{ height: '255px', objectFit: 'cover' }} />
                                <div className="w-full">
                                    <h4 className="ff-tns fw-bold text-start mb-1">{book.title}</h4>
                                    <p className="text-start fst-italic fs-14 ff-avn text-grey mb-1" style={{ color: '#929292' }}>By {book.author}</p>
                                    <p className="ff-avn fs-18 text-start fw-bold" style={{ color: '#44B200' }}>{convertRupiah.convert(book.price)}</p>
                                </div>

                            </div>

                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}