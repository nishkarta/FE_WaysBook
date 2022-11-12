import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import DetailHead from "../components/detail/DetailHead"
import DetailAbout from '../components/detail/DetailAbout'
import { Button } from 'react-bootstrap'
import AddOrderPopup from '../components/cart_orders/AddOrderPopup'
import { useQuery } from 'react-query'
import { API } from '../config/api'

export default function Detail({ item }) {
    const [showAddOrderPopup, setShowAddOrderPopup] = React.useState(false)

    const params = useParams()
    const navigate = useNavigate()

    let { data: book } = useQuery("detailCache", async () => {
        const response = await API.get(`book/${params.id}`)
        return response.data.data
    })

    const addToCartHandler = async (bookId) => {
        try {
            const response = await API.post(`cart/add/${bookId}`)

            setShowAddOrderPopup(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <>
                <DetailHead book={book} />
                <DetailAbout book={book} />
                <Button variant='dark' className="float-end mx-5" onClick={() => addToCartHandler(params.id)}>Add to Cart<i className="fa-solid fa-cart-shopping"></i></Button>
            </>

            <AddOrderPopup showAddOrderPopup={showAddOrderPopup} setShowAddOrderPopup={setShowAddOrderPopup} />
        </>
    )
}