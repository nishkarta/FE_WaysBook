import { Row, Col } from "react-bootstrap"
import convertRupiah from "rupiah-format"

export default function DetailHead(props) {
    return (
        <>
            <Row className='d-flex mb-5'>
                <Col className='col-12 col-lg-6 text-center text-lg-end px-5 mb-3'>
                    <img className='bg-warning' src={props.book?.cover} alt="cover" style={{ width: '25rem', height: '35rem', objectFit: 'cover', borderRadius: '8px' }} />
                </Col>
                <Col className='col-12 col-lg-6 text-center text-lg-start'>
                    <h1 className='fs-48 ff-tns fw-bold'>{props.book?.title}</h1>
                    <p className="ff-avn fs-24 fst-italic text-grey mb-5" style={{ color: '#929292' }}>By {props.book?.author}</p>
                    <h3 className="ff-avn fs-24 fw-bold">Publication date</h3>
                    <p className="ff-avn fs-18 " style={{ color: '#929292' }}>{props.book?.publication_date}</p>
                    <h3 className="ff-avn fs-24 fw-bold">Pages</h3>
                    <p className="ff-avn fs-18" style={{ color: '#929292' }}>{props.book?.pages}</p>
                    <h3 className="ff-avn fs-24 fw-bold text-danger">ISBN</h3>
                    <p className="ff-avn fs-18" style={{ color: '#929292' }}>{props.book?.isbn}</p>
                    <h3>Price</h3>
                    <p className="ff-avn fs-18 fw-bold" style={{ color: '#44B200' }}>{convertRupiah.convert(props.book?.price)}</p>
                </Col>
            </Row>
        </>
    )
}