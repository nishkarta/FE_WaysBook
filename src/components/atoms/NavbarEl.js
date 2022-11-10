import * as React from 'react';
import { Button, Container, Image, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import LoginEl from '../auth/LoginEl';
import RegisterEl from '../auth/RegisterEl';

function NavbarEl() {
    const navigate = useNavigate()
    const [showLog, setShowLog] = React.useState(false)
    const [showReg, setShowReg] = React.useState(false)


    return (
        <Container px="3">
            <Navbar bg="none" expand="lg" >
                <Container fluid >
                    <Navbar.Brand onClick={() => navigate('/')}><Image src="https://res.cloudinary.com/dm8xxyjfx/image/upload/v1667894655/WaysBook/Frame_1_rpfgpc.png" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='justify-content-end' id="navbarScroll">


                        <Button className="bg-none btn-auth-top px-4 me-2 fw-bold" variant="outline-dark" onClick={() => {
                            setShowReg(false)
                            setShowLog(true)
                        }}>Login</Button>
                        <Button className='btn-auth-top px-3 fw-bold' variant="dark" onClick={() => {
                            setShowLog(false)
                            setShowReg(true)
                        }}>Register</Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginEl showLog={showLog} setShowLog={setShowLog} setShowReg={setShowReg} />
            <RegisterEl showReg={showReg} setShowReg={setShowReg} setShowLog={setShowLog} />
        </Container>
    );
}

export default NavbarEl;