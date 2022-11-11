import { Container, Table, Image, Button } from "react-bootstrap"
import { useQuery } from "react-query"
import { API } from "../../config/api"
import convertRupiah from 'rupiah-format'
import { useNavigate } from "react-router-dom"

export default function UploadedBooksEl() {
    const navigate = useNavigate()
    let { data: books } = useQuery('uploadedBooksCache', async () => {
        const response = await API.get('/books-latest')
        return response.data.data
    })

    return (
        <Container className="p-5">
            <h3 className="ff-tns fs-36 fw-bold text-center text-lg-start mb-3">Uploaded Books</h3>
            <Button variant="success float-end mb-5 ff-tns fw-bold" onClick={() => navigate("/add-book")}>+ Add New Book</Button>
            <Table striped className="mb-5">
                <thead className="fs-18 ff-tns">
                    <tr>
                        <th>No</th>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books?.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item?.id}</td>
                            <td><Image style={{ height: '100px', objectFit: 'cover' }} src={item?.cover} alt="book" /></td>
                            <td>{item?.title}</td>
                            <td>{convertRupiah.convert(item?.price)}</td>
                            <td>{item?.about}</td>
                            <td>
                                <Button onClick={() => navigate(`/update-book/${item.id}`)} variant="dark" className="fw-bold me-2">Update</Button>
                                <Button variant="danger" className="fw-bold">Delete</Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Container>
    )
}