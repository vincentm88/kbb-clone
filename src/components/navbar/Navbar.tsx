import { useState } from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import companyLogo from '/logo.svg'
import Strings from '../constants/strings'
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'


export const Navigationbar = () => {
    const [hoverDropDown1, sethoverDropDown1] = useState(false);
    const [hoverDropDown2, sethoverDropDown2] = useState(false);
    const [open, setOpen] = useState(false);
    const expand = 'xl';
    const companyName = Strings.companyName;
    const companyTag = Strings.companyTag;
    return (
        <>
            <Navbar key={expand} expand={expand} className="py-0">
                <Container fluid={`${expand}`}>
                    <Navbar.Brand href="#home" className='d-flex align-items-center pt-0 mx-0'>
                        <div className='navimagediv'>
                            <img
                                alt=""
                                src={companyLogo}
                                width="57"
                                height="80"
                                className="position-absolute top-0"
                            />
                        </div>
                        <Stack className='py-0 px-2'>
                            <div className="companyName">{companyName}</div>
                            <div className="companyTag">{companyTag}</div>
                        </Stack>
                    </Navbar.Brand>
                    <Navbar.Toggle className={`d-flex d-${expand}-none`} aria-controls={`offcanvasNavbar-expand-${expand}`} aria-expanded={open} onClick={() => setOpen(!open)}>
                        <Nav.Link className='mx-3 navlogin' href="/login"><FontAwesomeIcon icon={faCircleUser} /></Nav.Link>
                        <FontAwesomeIcon className='ps-3'  icon={open ? faX : faBarsStaggered} />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        className={`pt-${expand}-0 pt-5`}
                    >
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 py-0">
                                <NavDropdown title="Car Values"
                                             className='navdropdown h-100'
                                             id={`navbarScrollingDropdown`}
                                             show={hoverDropDown1}
                                             onMouseOver={() => sethoverDropDown1(true)} 
                                             onMouseLeave={() => sethoverDropDown1(false)}
                                             onClick={() => sethoverDropDown1(!hoverDropDown1)}
                                             >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>                                
                                <NavDropdown title="Car For Sale" 
                                             id={`navbarScrollingDropdown`}
                                             className='navdropdown h-100'
                                             show={hoverDropDown2}
                                             onMouseOver={() => sethoverDropDown2(true)} 
                                             onMouseLeave={() => sethoverDropDown2(false)}
                                             onClick={() => sethoverDropDown2(!hoverDropDown2)}
                                             >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link className="navlink h-100" href="/dashboard">Cars For Sale</Nav.Link>
                                <Nav.Link className={`mx-3 navlogin d-none d-${expand}-flex`} href="/login"><FontAwesomeIcon icon={faCircleUser} /></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}