import * as React from 'react'
import { useParams } from 'react-router-dom'


import DetailHead from "../components/detail/DetailHead"
import DetailAbout from '../components/detail/DetailAbout'
import { Button } from 'react-bootstrap'
import AddOrderPopup from '../components/cart_orders/AddOrderPopup'

export default function Detail(props) {
    const [showAddOrderPopup, setShowAddOrderPopup] = React.useState(false)
    const params = useParams()
    console.log('props di detail', props)
    return (
        <>
            <>
                <DetailHead params={params} />
                <DetailAbout params={params} />
                <Button variant='dark' className="float-end mx-5" onClick={() => setShowAddOrderPopup(true)}>Add to Cart<i class="fa-solid fa-cart-shopping"></i></Button>
            </>

            <AddOrderPopup showAddOrderPopup={showAddOrderPopup} setShowAddOrderPopup={setShowAddOrderPopup} />
        </>
    )
}