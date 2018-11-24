import React, { Component } from 'react';
import { Col, Button, Navbar, Image, Nav } from "react-bootstrap"
import "./index.css"
import Logo from "./../../assets/logo.png"
import Doctor from "../../assets/happydoctor.jpg"
import Arrow from "../../assets/left-arrow.png"
import ClinicLogo from "../../assets/clinic-log.png"

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            doctor: {}
        }
    }

    componentDidMount() {
        if (!this.props.location.state.doctor) {
            this.props.history.push('/')
        }
        else {
            this.setState({
                doctor: this.props.location.state.doctor
            })
        }
    }

    render() {
        const { doctor } = this.state
        return (
            <div className="Profile-component">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span>
                                <Image src={Logo} width="45px" />
                                KANON HEALTH
                                </span>
                        </Navbar.Brand>
                        <Nav className="Nav-Hidden">
                            <h3 className="navbar-head">Commercial Text Here</h3>
                        </Nav>
                    </Navbar.Header>

                </Navbar>

                <Col md={12}>
                    <Col md={1} />
                    <Col md={10}>
                        <h3>Home >> City >>  {doctor.first_name ? doctor.first_name : 'N/A'}</h3>
                    </Col>
                    <Col md={1} />
                </Col>

                <Col md={12}>
                    <Col md={1} />

                    <Col md={10}>
                        <div className="first-div">
                            <h2 className="first-div-head">
                                {doctor.first_name ? doctor.first_name : 'N/A'} {doctor.last_name ? doctor.last_name : 'N/A'}
                            </h2>
                            <Col md={4} xs={6} sm={6}>
                                <Col md={12}>
                                    <Image src={Doctor} height="320px" style={{ width: "100%" }} />
                                </Col>

                                <Col md={12} className="flex-and-center">
                                    <Button className="contact-doctor-btn">
                                        Contact Doctor
                                    </Button>
                                    <p className="free-consulation-para">Paid consultation</p>
                                </Col>

                            </Col>

                            <Col md={8}>
                                {
                                    doctor.specialitys && doctor.specialitys.length ?
                                        doctor.specialitys.map((specialitys, i) => {
                                            return (

                                                <div key={i}>
                                                    <Col md={4}>
                                                        <h4>{++i} Speciality:</h4>
                                                    </Col>
                                                    <Col md={8}>
                                                        <h4>{specialitys.speciality_title}</h4>
                                                    </Col>
                                                </div>

                                            )
                                        })
                                        :
                                        <div>
                                            <Col md={4}>
                                                <h4>1st Speciality:</h4>
                                            </Col>
                                            <Col md={8}>
                                                <h4>Not Availabe</h4>
                                            </Col>

                                            <Col md={4}>
                                                <h4>2nd Speciality:</h4>
                                            </Col>
                                            <Col md={8}>
                                                <h4>Not Availabe</h4>
                                                <h4>Not Availabe</h4>
                                            </Col>
                                        </div>

                                }

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

                                <Col md={12} xs={12} sm={12} className="satisfied-main-div">
                                    <Col md={1} xs={1} sm={1}>
                                        <Image src={Arrow} height="15px" />
                                    </Col>

                                    <Col md={10} xs={10} sm={10}>
                                        <h4>I was very satisfied and will come back again! Thanks a lot..</h4>
                                    </Col>

                                    <Col md={1} xs={1} sm={1}>
                                        <Image src={Arrow} className="arrow-forward" height="15px" />
                                    </Col>
                                </Col>

                                <Col md={12} xs={12} sm={12}>
                                    <h4>Member in:</h4>
                                </Col>

                                <Col md={12} xs={12} sm={12}>
                                    <Col md={6} xs={6} sm={6} className="clinic-logo-image-div">
                                        <Col md={3} xs={3} sm={3} className="clinic-logo-image-div">
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


                                <Col md={12} xs={12} sm={12}>
                                    <Col md={6} xs={6} sm={6} className="clinic-logo-image-div">
                                        <Col md={3} className="clinic-logo-image-div">
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


                        <div className="second-div">
                            <h4>About Me:</h4>
                            <p className="second-div-para">
                                {
                                    this.state.doctor.about ? this.state.doctor.about : "Not available"
                                }
                            </p>
                        </div>

                        <div className="third-div">
                            <Col md={12}>
                                <h4>My Services:</h4>
                            </Col>

                            <Col md={12}>
                                <Col md={4} xs={6} sm={6}>
                                    <h4>- Standard consultation:</h4>
                                </Col>
                                <Col md={8} xs={6} sm={6}>
                                    <h4>9,90 EUR</h4>
                                </Col>
                            </Col>

                            <Col md={12} xs={12} sm={12}>
                                <div className="border-div">
                                </div>
                            </Col>

                            <Col md={12}>
                                <Col md={4} xs={6} sm={6}>
                                    <h4>+ Complete consultation:</h4>
                                </Col>
                                <Col md={8} xs={6} sm={6}>
                                    <h4>500,00 EUR</h4>
                                </Col>
                            </Col>

                            <Col md={12}>
                                <Col md={4} xs={6} sm={6}>
                                    <h4>+ 2nd Opinion:</h4>
                                </Col>
                                <Col md={8} xs={6} sm={6}>
                                    <h4>2.500,00 EUR</h4>
                                </Col>
                            </Col>

                            <Col md={12}>
                                <Col md={4} xs={6} sm={6}>
                                    <h4>+ Other consultation:</h4>
                                </Col>
                            </Col>
                        </div>

                    </Col>

                    <Col/>
                </Col>
            </div >
        );
    }
}

export default Profile;
