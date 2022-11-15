import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import DetailHead from "../components/detail/DetailHead"
import DetailAbout from '../components/detail/DetailAbout'
import { Button } from 'react-bootstrap'
import AddOrderPopup from '../components/cart_orders/AddOrderPopup'
import { useQuery } from 'react-query'
import { API } from '../config/api'
import { UserContext } from '../components/context/userContext'

export default function Detail({ item }) {
    const [showAddOrderPopup, setShowAddOrderPopup] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [state, dispatch] = React.useContext(UserContext)

    const params = useParams()
    const navigate = useNavigate()

    let { data: book } = useQuery("detailCache", async () => {
        setIsLoading(true)
        const response = await API.get(`book/${params.id}`)
        setIsLoading(false)
        return response.data.data
    })


    // setTimeout(() => {
    //     setIsLoading(false)

    // }, 500);


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

            {isLoading ?
                <div className='d-flex align-items-center justify-content-center h-60'>
                    <p className="fs-36 ff-avn">Loading page...</p>
                </div> : (
                    <>

                        <DetailHead book={book} />
                        <DetailAbout book={book} />
                        {state?.user.role === "cust" && <Button variant='dark' className="float-end mx-5" onClick={() => addToCartHandler(params.id)}>Add to Cart<i className="fa-solid fa-cart-shopping"></i></Button>}

                    </>
                )}


            <AddOrderPopup showAddOrderPopup={showAddOrderPopup} setShowAddOrderPopup={setShowAddOrderPopup} />
        </>
    )
}