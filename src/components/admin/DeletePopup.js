import * as React from "react"
import { Modal, Row, Col, Button } from "react-bootstrap"
import { useQuery } from "react-query"
import { API } from "../../config/api"

export default function ConfirmDelete(props) {
    const [showNotification, setShowNotification] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    let { data: books } = useQuery('uploadedBooksCache', async () => {
        const response = await API.get('/books-latest')
        return response.data.data
    })
    // React.useEffect(() => {
    //     refetch()
    // }, [])
    return (
        <>
            <Modal size="md" centered show={props.showConfirmDelete} onHide={() => props.setShowConfirmDelete(false)}>

                <Modal.Body className="px-5">
                    <h3 className='ff-avn fs-24 mb-3' >Are you sure to delete the book?</h3>
                    <i className="fa-solid fa-circle-exclamation text-warning mb-3 w-100 text-center" style={{ fontSize: '5rem' }}></i>
                    <Row>
                        <Col><Button variant="dark" className="w-100 fw-bold" onClick={() => props.setShowConfirmDelete(false)}>No</Button></Col>
                        <Col><Button variant="danger" className="w-100 fw-bold" onClick={async () => {
                            setIsLoading(true);
                            const response = await API.delete(`/book/${props.idDelete}`);
                            props.setShowConfirmDelete(false);
                            setShowNotification(true)
                        }}>{isLoading ? "Deleting book..." : "Yes"}</Button></Col>
                    </Row>
                </Modal.Body>
            </Modal>


            <Modal size="md" centered show={showNotification} onHide={() => setShowNotification(false)}>

                <Modal.Body className="py-3">
                    <h3 className='ff-avn fs-24 text-center mb-3' >Item successfully deleted!</h3>
                    <p className="text-center fw-bold mb-1" onClick={() => setShowNotification(false)} style={{ cursor: 'pointer' }}>back to list</p>
                </Modal.Body>
            </Modal>
        </>

    )
}