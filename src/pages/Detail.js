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
    console.log(params)

    let { data: book, refetch } = useQuery("detailCache", async () => {
        const response = await API.get(`book/${params.id}`)
        // console.log(item.id)
        console.log(response.data.data)
        return response.data.data
    })
    return (
        <>
            <>
                <DetailHead book={book} />
                <DetailAbout book={book} />
                <Button variant='dark' className="float-end mx-5" onClick={() => setShowAddOrderPopup(true)}>Add to Cart<i className="fa-solid fa-cart-shopping"></i></Button>
            </>

            <AddOrderPopup showAddOrderPopup={showAddOrderPopup} setShowAddOrderPopup={setShowAddOrderPopup} />
        </>
    )
}