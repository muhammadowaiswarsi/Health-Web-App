import React, { Component } from 'react';
import { FormControl, Col, Button, Navbar, Image, Nav } from "react-bootstrap"
import "./index.css"
import Logo from "./../../assets/logo.png"
import Doctor from "../../assets/happydoctor.jpg"
import Arrow from "../../assets/left-arrow.png"
import Arrowbtn from "../../assets/left-arrow-white.png"
import ClinicLogo from "../../assets/clinic-log.png"

class Profile extends Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div className="Profile-component">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">
                                <Image src={Logo} width="45px" />
                                KANON HEALTH</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <h3 className="navbar-head">Commercial Text Here</h3>
                    </Nav>
                </Navbar>

                <Col md={12}>
                    <Col md={1} />
                    <Col md={10}>
                        <h3>Home >> City >> Doctor Smith</h3>
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
                            <Col md={4}>
                                <Col md={12}>
                                    <Image src={Doctor} />
                                </Col>

                                <Col md={12} className="flex-and-center">
                                    <Button className="contact-doctor-btn">
                                        Contact Doctor
                                    </Button>
                                    <p className="free-consulation-para">Paid consultation</p>
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
                                    <h4>Member in:</h4>
                                </Col>

                                <Col md={12}>
                                    <Col md={6} className="clinic-logo-image-div">
                                        <Col md={3} className="clinic-logo-image-div">
                                            <Image src={ClinicLogo} className="arrow-forward" height="50px" />
                                        </Col>
                                        <Col md={9}>
                                            <h4 className="clinic-Name">Clinic Name here Speciality</h4>
                                        </Col>
                                    </Col>
                                    <Col md={1} />
                                    <Col md={5} className="flex-and-center">
                                        <Button className="contact-btn">
                                            Contact Practice
                                    </Button>
                                        <p className="free-consulation-para">Free consultation</p>
                                    </Col>
                                </Col>


                                <Col md={12}>
                                    <Col md={6} className="clinic-logo-image-div">
                                        <Col md={3} className="clinic-logo-image-div">
                                            <Image src={ClinicLogo} className="arrow-forward" height="50px" />
                                        </Col>
                                        <Col md={9}>
                                            <h4 className="clinic-Name">Clinic Name here Speciality</h4>
                                        </Col>
                                    </Col>
                                    <Col md={1} />
                                    <Col md={5} className="flex-and-center">
                                        <Button className="contact-btn">
                                            Contact Practice
                                    </Button>
                                        <p className="free-consulation-para">Free consultation</p>
                                    </Col>
                                </Col>

                            </Col>
                        </div>


                        <div className="second-div">
                            <h4>About Me:</h4>
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

                        <div className="third-div">
                            <Col md={12}>
                                <h4>My Services:</h4>
                            </Col>

                            <Col md={12}>
                                <Col md={4}>
                                    <h4>- Standard consultation:</h4>
                                </Col>
                                <Col md={8}>
                                    <h4>9,90 EUR</h4>
                                </Col>
                            </Col>

                            <Col md={12}>
                                <div className="border-div">

                                </div>
                            </Col>

                            <Col md={12}>
                                <Col md={4}>
                                    <h4>+ Complete consultation:</h4>
                                </Col>
                                <Col md={8}>
                                    <h4>500,00 EUR</h4>
                                </Col>
                            </Col>

                            <Col md={12}>
                                <Col md={4}>
                                    <h4>+ 2nd Opinion:</h4>
                                </Col>
                                <Col md={8}>
                                    <h4>2.500,00 EUR</h4>
                                </Col>
                            </Col>

                            <Col md={12}>
                                <Col md={4}>
                                    <h4>+ Other consultation:</h4>
                                </Col>
                            </Col>
                        </div>

                    </Col>

                    <Col md={2} />
                </Col>
            </div >
        );
    }
}

export default Profile;
