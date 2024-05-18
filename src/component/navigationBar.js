import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from "./../img/logo.png"



const NavigationBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-dark sticky-top" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo} alt="" width={100} height={50} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Link to="/" className='fw-bold text-white' style={{textDecoration: "none"}}>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="about" className='fw-bold text-white' style={{textDecoration: "none"}}>About Us</Link>
                            </Nav.Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavigationBar;