import { Modal } from "react-bootstrap"

export default function AddOrderPopup(props) {
    return (
        <Modal size="lg" centered show={props.showAddOrderPopup} onHide={() => props.setShowAddOrderPopup(false)}>

            <Modal.Body className="px-5">
                <p className='ff-avn fs-24' style={{ color: '#469F74' }} >The product is successfully added to the cart</p>

            </Modal.Body>
        </Modal>
    )
}