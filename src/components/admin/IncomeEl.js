import * as React from 'react'
import { Container, Table } from "react-bootstrap"
import convertRupiah from 'rupiah-format'
import { API } from "../../config/api"
import { useQuery } from "react-query"

export default function IncomeEl() {

    let { data: transactionData, refetch } = useQuery('transactonCache', async () => {
        const response = await API.get('/transactions')
        console.log(response.data.data)
        return response.data.data
    })

    React.useEffect(() => {
        refetch()
    }, [])

    return (
        <Container className="px-5">
            <Container className="p-5">
                <h3 className="ff-tns fs-36 fw-bold text-center text-lg-start mb-5">Incoming Transaction</h3>
                <Table striped>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Users</th>
                            <th>Evidence of Transfer</th>
                            <th>Product Purchased</th>
                            <th>Total Payment</th>
                            <th>Status Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionData?.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.buyer.fullName}</td>
                                <td>bca.png</td>
                                <td>{[...item.book].map((book) => book.title).join(",")}</td>
                                <td>{convertRupiah.convert(item?.total)}</td>
                                <td>{item?.status}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>

            </Container>

        </Container>
    )
}