import { Row, Col } from "react-bootstrap"
import { books } from "../dummies/books"
import convertRupiah from "rupiah-format"
import { useParams } from "react-router-dom"

export default function DetailHead() {
    const params = useParams()
    return (
        <>
            <Row className='d-flex mb-5'>
                <Col className='col-12 col-lg-6 text-center text-lg-end px-5 mb-3'>
                    <img className='bg-warning' src={books[params.bookId].cover} alt="cover" style={{ width: '25rem', height: '35rem', objectFit: 'cover', borderRadius: '8px' }} />
                </Col>
                <Col className='col-12 col-lg-6 text-center text-lg-start'>
                    <h1 className='fs-48 ff-tns fw-bold'>{books[params.bookId].title}</h1>
                    <p className="ff-avn fs-24 fst-italic text-grey mb-5" style={{ color: '#929292' }}>{books[params.bookId].author}</p>
                    <h3 className="ff-avn fs-24 fw-bold">Publication date</h3>
                    <p className="ff-avn fs-18 " style={{ color: '#929292' }}>{books[params.bookId].date}</p>
                    <h3 className="ff-avn fs-24 fw-bold">Pages</h3>
                    <p className="ff-avn fs-18" style={{ color: '#929292' }}>{books[params.bookId].pages}</p>
                    <h3 className="ff-avn fs-24 fw-bold text-danger">ISBN</h3>
                    <p className="ff-avn fs-18" style={{ color: '#929292' }}>{books[params.bookId].isbn}</p>
                    <h3>Price</h3>
                    <p className="ff-avn fs-18 fw-bold" style={{ color: '#44B200' }}>{convertRupiah.convert(books[params.bookId].price)}</p>
                </Col>
            </Row>
        </>
    )
}