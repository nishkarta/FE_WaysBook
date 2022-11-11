import * as React from 'react';
import { Button, Container, Image, Navbar, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import LoginEl from '../auth/LoginEl';
import RegisterEl from '../auth/RegisterEl';

import { UserContext } from '../context/userContext';
import { API } from '../../config/api';

function NavbarEl() {
    const navigate = useNavigate()
    const [showLog, setShowLog] = React.useState(false)
    const [showReg, setShowReg] = React.useState(false)

    const [state, dispatch] = React.useContext(UserContext)
    console.log(state)


    const [user, setUser] = React.useState(null)
    const getUser = async () => {
        const response = await API.get(`/user/${state.user.id}`)
        setUser(response.data.data)
    }

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        })
        navigate("/")
    }

    React.useEffect(() => {
        if (state.user) {
            getUser()
        }
    }, [state])

    return (
        <Container px="3">
            <Navbar bg="none" expand="lg" >

                <Container fluid >
                    <Navbar.Brand onClick={() => navigate('/')}><Image src="https://res.cloudinary.com/dm8xxyjfx/image/upload/v1667894655/WaysBook/Frame_1_rpfgpc.png" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='justify-content-end' id="navbarScroll">

                        {!state.isLogin ? <><Button className="bg-none btn-auth-top px-4 me-2 fw-bold" variant="outline-dark" onClick={() => {
                            setShowReg(false)
                            setShowLog(true)
                        }}>Login</Button>
                            <Button className='btn-auth-top px-3 fw-bold' variant="dark" onClick={() => {
                                setShowLog(false)
                                setShowReg(true)
                            }}>Register</Button>
                        </> : state.user.role === 'cust' ? (<div>
                            <Dropdown className='d-flex align-items-center'>
                                <span onClick={() => navigate("/cart")} >
                                    <i className="fa-solid fa-cart-shopping fs-1"></i>

                                </span>

                                <Dropdown.Toggle variant="bg-0" id="dropdown-basic">
                                    <img src={user?.image ? user.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZt50gh1uEkLw2lX99k9bWVzxDiKZ4O9rmqxk98XhfOg&s"} style={{ width: '60px', height: '60px', borderRadius: '50%' }} alt='' />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => navigate("/profile")}><i className="fa-solid fa-user fa-xl me-3"></i>
                                        Profile
                                    </Dropdown.Item>
                                    <Dropdown.Divider />

                                    <Dropdown.Item onClick={handleLogout}><i className="fa-solid fa-right-from-bracket fa-xl me-3"></i>Logout</Dropdown.Item>


                                </Dropdown.Menu>
                            </Dropdown>
                        </div>) : (<Dropdown>

                            <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                                <img src={user?.image ? user.image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw1z2hV7RKTHxWFLWCLiM5dT&ust=1668152679236000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDG7JCPo_sCFQAAAAAdAAAAABAE"} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} alt='' />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => navigate("/profile")}><i className="fa-solid fa-user fa-xl me-3"></i>
                                    Profile
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => navigate("/uploaded")}><i className="fa-solid fa-book fa-xl me-3"></i>Uploaded Books</Dropdown.Item>
                                <Dropdown.Divider />

                                <Dropdown.Item onClick={handleLogout}><i className="fa-solid fa-right-from-bracket fa-xl me-3"></i>Logout</Dropdown.Item>


                            </Dropdown.Menu>
                        </Dropdown>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginEl showLog={showLog} setShowLog={setShowLog} setShowReg={setShowReg} />
            <RegisterEl showReg={showReg} setShowReg={setShowReg} setShowLog={setShowLog} />
        </Container>
    );
}

export default NavbarEl;