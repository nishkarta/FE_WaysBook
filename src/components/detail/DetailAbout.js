import * as React from 'react'
import { useParams } from 'react-router-dom'
import { books } from "../dummies/books"
export default function DetailAbout() {
    const params = useParams()
    return (
        <div className="text-start px-5 mx-5">
            <h1 className="ff-tns fs-36 fw-bold mb-3 ">About This Book</h1>


            <p style={{ color: '#929292', textAlign: 'justify' }} className="ff-avn fs-18">{books[params.bookId].desc}</p>
        </div>
    )
}