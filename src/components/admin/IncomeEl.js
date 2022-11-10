import { Container, Table } from "react-bootstrap"
import convertRupiah from 'rupiah-format'

export default function IncomeEl() {
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
                        <tr>
                            <td>1</td>
                            <td>Radif Ganteng</td>
                            <td>bca.png</td>
                            <td>Book1</td>
                            <td>{convertRupiah.convert(20000)}</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Radif Ganteng</td>
                            <td>bca.png</td>
                            <td>Book1</td>
                            <td>{convertRupiah.convert(20000)}</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Radif Ganteng</td>
                            <td>bca.png</td>
                            <td>Book1</td>
                            <td>{convertRupiah.convert(20000)}</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Radif Ganteng</td>
                            <td>bca.png</td>
                            <td>Book1</td>
                            <td>{convertRupiah.convert(20000)}</td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Radif Ganteng</td>
                            <td>bca.png</td>
                            <td>Book1</td>
                            <td>{convertRupiah.convert(20000)}</td>
                            <td>Approved</td>
                        </tr>
                    </tbody>
                </Table>

            </Container>

        </Container>
    )
}