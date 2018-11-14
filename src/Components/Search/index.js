import React, { Component } from 'react';
import { FormControl, Col, Button, Navbar, Image, Nav } from "react-bootstrap"
import "./index.css"
import Logo from "./../../assets/logo.png"
import Doctor from "../../assets/happydoctor.jpg"

class Search extends Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div className="Search-component">
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
                        <h1>Search for the best Doctor</h1>
                    </Col>
                    <Col md={1} />
                </Col>

                <Col md={12}>
                    <Col md={1} />
                    <Col md={2} className="panel-col">
                        <div className="left-side-panel">

                            <div className="filter-div">
                                <div className="filter-head-div">
                                    <h4>Filter here</h4>
                                </div>

                                <FormControl
                                    type="text"
                                    placeholder="Enter City"
                                    className="filter-input"
                                />
                            </div>

                            <div className="Treatment-div">
                                <div className="line-div" />

                                <div className="treatment-head">
                                    <h4>Treatment:</h4>
                                </div>

                            </div>

                            <div className="Treatment-option-div treatment-div-margin">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>

                                    <div className="option-para">
                                        <p>PRK/LASEK</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>LASIK</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>Femto-LKASIK</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>ReLEx SMILE</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>ICL / Phake Linsen</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>Multifokallinsen</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>Monofokallinsen</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <div className="space" />
                                    <div className="option-para-more">
                                        <p>+ More</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-div">
                                <div className="line-div" />

                                <div className="treatment-head">
                                    <h4>Rating:</h4>
                                </div>

                            </div>

                            <div className="Treatment-option-div treatment-div-margin">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>

                                    <div className="option-para">
                                        <p>5 Stars</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>4 Stars</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>3 Stars</p>
                                    </div>
                                </div>
                            </div>


                            <div className="Treatment-div">
                                <div className="line-div" />

                                <div className="treatment-head">
                                    <h4>Language:</h4>
                                </div>

                            </div>

                            <div className="Treatment-option-div treatment-div-margin">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>

                                    <div className="option-para">
                                        <p>German</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>English</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>Russian</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>Spanish</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <div className="option-para">
                                        <p>France</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Treatment-option-div">
                                <div className="treatment-option">
                                    <div className="space" />
                                    <div className="option-para-more">
                                        <p>+ More</p>
                                    </div>
                                </div>
                            </div>


                            <div className="Treatment-div">
                                <div className="line-div" />
                                <div className="treatment-head">
                                    <h4>Price Range:</h4>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="first-div">
                            <h1 className="first-div-head">
                                Dr. Michael Smith
                            </h1>
                            <Col md={4}>
                                <Image src={Doctor} />
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
                                        a
                                    </Col>

                                    <Col md={10}>
                                        <h4>I was very satisfied and will come back again! Thanks a lot..</h4>
                                    </Col>

                                    <Col md={1}>
                                        a
                                        </Col>
                                </Col>

                                <Col md={5}>
                                    <h4>Service Stars from:</h4>
                                </Col>
                                <Col md={6}>
                                    <h4 className="right">800 EURO</h4>
                                </Col>
                                <Col md={1} />

                                <Col md={4} />
                                <Col md={8} className="btn-right">
                                <Button className="next-btn">Warning</Button>
                                </Col>
                            </Col>
                        </div>

                    </Col>
                    <Col md={1} />
                </Col>
            </div >
        );
    }
}

export default Search;
