import { Modal } from "react-bootstrap"

export default function FixOrderPopup(props) {
    return (
        <Modal size="lg" centered show={props.showFixOrderPopup} onHide={() => props.setShowFixOrderPopup(false)}>

            <Modal.Body className="px-5">
                <p className='ff-avn fs-24' style={{ color: '#469F74' }} >Thank you for ordering in us, please wait 1 x 24 hours to verify you order</p>

            </Modal.Body>
        </Modal>
    )
}