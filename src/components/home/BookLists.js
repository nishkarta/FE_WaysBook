import * as React from 'react'

import { Container, Row, Col } from "react-bootstrap"

import convertRupiah from 'rupiah-format'
import { useNavigate } from "react-router-dom"
import { API } from "../../config/api"
import { useQuery } from "react-query"
import { UserContext } from "../context/userContext"
import LoginEl from '../auth/LoginEl'
import RegisterEl from '../auth/RegisterEl'

export default function BookLists() {
    const navigate = useNavigate()
    const [state, dispatch] = React.useContext(UserContext)
    const [showLog, setShowLog] = React.useState(false)
    const [showReg, setShowReg] = React.useState(false)

    let { data: books } = useQuery('listBooksCache', async () => {
        const response = await API.get('books')
        return response.data.data
    })

    return (
        <div className="container-grey py-5 text-center text-lg-start">
            <Container>

                <h1 className="ff-tns fs-36 fw-bold mb-3">Book Lists</h1>
                <Row className=" d-flex justify-content-start mx-auto">

                    {books?.map((item, index) => (
                        <Col style={{ width: '205px' }} className="text-start col-12 col-md-6 col-lg-3 text-center me-3 mb-3" key={index} onClick={state.isLogin ? (() => navigate(`/detail/${item?.id}`)) : (() => setShowLog(true))}>
                            <div className="">
                                <img className="mb-3 w-full" src={item?.cover} alt="book" style={{ height: '255px', objectFit: 'cover' }} />
                                <div className="w-full">
                                    <h4 className="ff-tns fw-bold text-start mb-1">{item?.title}</h4>
                                    <p className="text-start fst-italic fs-14 ff-avn text-grey mb-1" style={{ color: '#929292' }}>By {item?.author}</p>
                                    <p className="ff-avn fs-18 text-start fw-bold" style={{ color: '#44B200' }}>{convertRupiah.convert(item?.price)}</p>
                                </div>

                            </div>

                        </Col>
                    ))}
                </Row>
            </Container>
            <LoginEl showLog={showLog} setShowLog={setShowLog} setShowReg={setShowReg} />

            <RegisterEl showReg={showReg} setShowReg={setShowReg} setShowLog={setShowLog} />
        </div>
    )
}