import React, { Component } from 'react';
import { Col, Button, Navbar, Image, Nav, MenuItem, NavDropdown, NavItem } from "react-bootstrap"
import "./index.css"
import Logo from "./../../assets/logo.png"
import Doctor from "../../assets/happydoctor.jpg"
import Arrow from "../../assets/left-arrow.png"
import ClinicLogo from "../../assets/clinic-log.png"

class Clinic extends Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div className="Clinic-detail-component">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">
                                <Image src={Logo} width="45px" />
                                KANON HEALTH</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Nav>
                        <h3 className="navbar-head">Commercial Text Here</h3>
                    </Nav>


                    <Navbar.Collapse>
                        <NavItem eventKey={1} href="#">
                            Link
      </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
      </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={1} href="#">
                            Link Right
      </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
      </NavItem>
                    </Navbar.Collapse>
                </Navbar>

                <Col md={12}>
                    <Col md={1} />
                    <Col md={10}>
                        <h3>Home >> City >> Clinic Name</h3>
                    </Col>
                    <Col md={1} />
                </Col>

                <Col md={12}>
                    <Col md={1} />

                    <Col md={9}>
                        <div className="first-div">
                            <h2 className="first-div-head">
                                Dr. Michael Smith
                            </h2>
                            <Col md={4} sm={4} xs={4}>
                                <Col md={12}>
                                    <Image src={Doctor} width="100%" style={{ maxHeight: "210px" }} />
                                </Col>

                                <Col md={12} className="flex-and-center">
                                    <Button className="contact-doctor-btn">
                                        Contact Doctor
                                    </Button>
                                    <p className="free-consulation-para">Paid consultation</p>
                                </Col>


                                <Col md={12}>
                                    <h5>
                                        Opening Hours:
                                    </h5>
                                </Col>


                                <Col md={12}>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            Monday:
                                        </h5>
                                    </Col>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            9:00 - 18:00
                                        </h5>
                                    </Col>
                                </Col>

                                <Col md={12}>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            Tuesday:
                                        </h5>
                                    </Col>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            9:00 - 18:00
                                        </h5>
                                    </Col>
                                </Col>

                                <Col md={12}>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            Wednesday:
                                        </h5>
                                    </Col>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            9:00 - 18:00
                                        </h5>
                                    </Col>
                                </Col>

                                <Col md={12}>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            Thursday:
                                        </h5>
                                    </Col>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            9:00 - 18:00
                                        </h5>
                                    </Col>
                                </Col>


                                <Col md={12}>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            Friday:
                                        </h5>
                                    </Col>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            9:00 - 18:00
                                        </h5>
                                    </Col>
                                </Col>


                                <Col md={12}>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            Saturday:
                                        </h5>
                                    </Col>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            9:00 - 18:00
                                        </h5>
                                    </Col>
                                </Col>


                                <Col md={12}>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            Sunday:
                                        </h5>
                                    </Col>
                                    <Col md={6} className="noPadding">
                                        <h5>
                                            9:00 - 18:00
                                        </h5>
                                    </Col>
                                </Col>



                            </Col>

                            <Col md={8}>
                                <Col md={4}>
                                    <h4>1st Speciality:</h4>
                                </Col>
                                <Col md={8}>
                                    <h4>Ophthalmology</h4>
                                </Col>

                                <Col md={4}>
                                    <h4>2nd Speciality:</h4>
                                </Col>
                                <Col md={8}>
                                    <h4>Sub-Speciality here (1st)</h4>
                                    <h4>Sub-Speciality here (2nd)</h4>
                                </Col>

                                <Col md={4}>
                                    <h4>Location:</h4>
                                </Col>
                                <Col md={8}>
                                    <h4>Germany</h4>
                                </Col>

                                <Col md={4}>
                                    <h4>Language:</h4>
                                </Col>
                                <Col md={8}>
                                    <h4>German, English, Spanish</h4>
                                </Col>

                                <Col md={4}>
                                    <h4>Rating:</h4>
                                </Col>
                                <Col md={8}>
                                    <h4>4, 5(2,0 reviews)</h4>
                                </Col>

                                <Col md={12} className="satisfied-main-div">
                                    <Col md={1}>
                                        <Image src={Arrow} height="15px" />
                                    </Col>

                                    <Col md={10}>
                                        <h4>I was very satisfied and will come back again! Thanks a lot..</h4>
                                    </Col>

                                    <Col md={1}>
                                        <Image src={Arrow} className="arrow-forward" height="15px" />
                                    </Col>
                                </Col>

                                <Col md={12}>
                                    <h4>Member:</h4>
                                </Col>

                                <Col md={12}>
                                    <Col md={6} xs={6} sm={6} className="clinic-logo-image-div">
                                        <Col md={3} xs={5} sm={3} className="clinic-logo-image-div">
                                            <Image src={ClinicLogo} className="arrow-forward" height="50px" />
                                        </Col>
                                        <Col md={9} xs={9} sm={9}>
                                            <h4 className="clinic-Name">Clinic Name here Speciality</h4>
                                        </Col>
                                    </Col>
                                    <Col md={1} xs={1} sm={1} />
                                    <Col md={5} xs={5} sm={5} className="flex-and-center">
                                        <Button className="contact-btn">
                                            Contact Practice
                                    </Button>
                                        <p className="free-consulation-para">Free consultation</p>
                                    </Col>
                                </Col>


                                <Col md={12}>
                                    <Col md={6} xs={6} sm={6} className="clinic-logo-image-div">
                                        <Col md={3} xs={5} sm={3} className="clinic-logo-image-div">
                                            <Image src={ClinicLogo} className="arrow-forward" height="50px" />
                                        </Col>
                                        <Col md={9} xs={9} sm={9}>
                                            <h4 className="clinic-Name">Clinic Name here Speciality</h4>
                                        </Col>
                                    </Col>
                                    <Col md={1} xs={1} sm={1} />
                                    <Col md={5} xs={5} sm={5} className="flex-and-center">
                                        <Button className="contact-btn">
                                            Contact Practice
                                    </Button>
                                        <p className="free-consulation-para">Free consultation</p>
                                    </Col>
                                </Col>

                            </Col>
                        </div>


                        <div className="third-div">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14481.700219875074!2d66.99284405!3d24.849328300000003!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1542313778105" width="100%" height="205px"
                                frameborder="0" allowfullscreen></iframe>
                        </div>

                        <div className="second-div">
                            <h4>About Us:</h4>
                            <p className="second-div-para">Paragraphs are the building blocks of papers. Many students
                            define paragraphs in terms of length: a paragraph is a group of at least five sentences, a
                             paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas
                              among sentences is what constitutes a paragraph.
                              Paragraphs are the building blocks of papers. Many students
                            define paragraphs in terms of length: a paragraph is a group of at least five sentences, a
                             paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas
                              among sentences is what constitutes a paragraph.
                              </p>
                        </div>

                    </Col>

                    <Col md={2} />
                </Col>
            </div >
        );
    }
}

export default Clinic;
