import React, { Component } from 'react';
import { FormControl, Col, Button, Navbar, Image, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import InputRange from 'react-input-range';
import { getDoctors } from "./../../services/httpService";
import Logo from "./../../assets/logo.png"
import Doctor from "../../assets/happydoctor.jpg"
import Arrow from "../../assets/left-arrow.png"
import Arrowbtn from "../../assets/left-arrow-white.png"
import "./index.css"
import "react-input-range/lib/css/index.css"

class Search extends Component {


    constructor(props) {
        super(props)
        this.state = {
            doctorsList: [],
            value: 500,
            loading: false
        }
    }

    componentDidMount(Doctor) {
        this.setState({
            loading: true
        })

        getDoctors()
            .then(({ data }) => {
                this.setState({
                    doctorsList: data.data,
                    loading: false
                })
            })
            .catch((err) => {
                this.setState({
                    loading: false
                })
                alert(err);
            })

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
                        <Nav className="Nav-Hidden">
                            <h3 className="navbar-head">Commercial Text Here</h3>
                        </Nav>
                    </Navbar.Header>
                </Navbar>

                <Col md={12} className="Main-div">
                    <Col md={1} lg={1} />
                    <Col md={10}>
                        <h1>Search for the best Doctor</h1>
                    </Col>
                    <Col md={1} />
                </Col>

                <Col md={12} className="Main-div">
                    <Col md={2} lg={2} xsHidden smHidden className="panel-col">
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
                                    <h4 style={{ marginTop: "15px", marginBottom: "15px" }}>Price Range:</h4>
                                    <InputRange
                                        maxValue={1000}
                                        minValue={0}
                                        value={this.state.value}

                                        onChange={value => this.setState({ value })} />
                                </div>

                            </div>

                        </div>
                    </Col>

                    {
                        this.state.loading ?
                            <p>...Loading</p>
                            :
                            <Col md={9} lg={9} sm={12} xs={12} >

                                {
                                    this.state.doctorsList ?
                                        this.state.doctorsList.map((doc, i) => (

                                            <div className="first-div">
                                                <h2 className="first-div-head">
                                                    {doc.first_name ? doc.first_name : 'N/A'} {doc.last_name ? doc.last_name : 'N/A'}
                                                </h2>
                                                <Col md={4} lg={4} sm={3} xs={3}>
                                                    <Image src={Doctor} width="100%" style={{ maxHeight: "260px" }} />
                                                </Col>

                                                <Col md={8} lg={8} sm={9} xs={9}>
                                                    <Col md={4} lg={4} sm={4} xs={4}>
                                                        <h4>1st Speciality:</h4>
                                                    </Col>
                                                    <Col md={8} lg={8} sm={8} xs={8}>
                                                        <h4>
                                                            {
                                                                doc.specialitys && doc.specialitys.length ?
                                                                    "Sub-Speciality here (2nd)"
                                                                    :
                                                                    'Not available'
                                                            }
                                                        </h4>
                                                    </Col>

                                                    <Col md={4} lg={4} sm={4} xs={4}>
                                                        <h4>2nd Speciality:</h4>
                                                    </Col>
                                                    <Col md={8} lg={8} sm={8} xs={8}>

                                                        <h4>

                                                            {
                                                                doc.specialitys && doc.specialitys.length ?
                                                                    "Sub-Speciality here (2nd)"
                                                                    :
                                                                    'Not available'
                                                            }
                                                        </h4>
                                                        {/* <h4>Sub-Speciality here (2nd)</h4> */}
                                                    </Col>

                                                    <Col md={4} lg={4} sm={4} xs={4}>
                                                        <h4>Location:</h4>
                                                    </Col>
                                                    <Col md={8} lg={8} sm={8} xs={8}>
                                                        <h4>{doc.country ? doc.country : "Not Available"}</h4>
                                                    </Col>

                                                    <Col md={4} lg={4} sm={4} xs={4}>
                                                        <h4>Language:</h4>
                                                    </Col>
                                                    <Col md={8} lg={8} sm={8} xs={8}>
                                                        <h4>{doc.language ? doc.language : "Not available"}</h4>
                                                    </Col>

                                                    <Col md={4} lg={4} sm={4} xs={4}>
                                                        <h4>Rating:</h4>
                                                    </Col>
                                                    <Col md={8} lg={8} sm={8} xs={8}>
                                                        {/* <h4>{doc.rate_count ? doc.rate_count : "N/A"}</h4> */}
                                                        {/* <StarRatings
                                               // rating={this.state.rating}
                                               // starRatedColor="blue"
                                               // changeRating={this.changeRating}
                                               numberOfStars={6}
                                               name='rating'
                                               /> */}
                                                        <StarRatings
                                                            rating={2.403}
                                                            starDimension="20px"
                                                            starSpacing="10px"
                                                            starRatedColor="#008FC5"
                                                        />
                                                        <span classname="reviews-para">4.5(2,0 reviews)</span>
                                                    </Col>

                                                    <Col md={12} lg={12} sm={12} xs={12} className="satisfied-main-div">
                                                        <Col md={1} lg={1} sm={1} xs={1}>
                                                            <Image src={Arrow} height="15px" />
                                                        </Col>

                                                        <Col md={10} lg={10} sm={10} xs={10}>
                                                            <h4>I was very satisfied and will come back again! Thanks a lot..</h4>
                                                        </Col>

                                                        <Col md={1} lg={1} sm={1} xs={1}>
                                                            <Image src={Arrow} className="arrow-forward" height="15px" />
                                                        </Col>
                                                    </Col>

                                                    <Col md={5} lg={5} sm={5} xs={5}>
                                                        <h4 className="service-para">Service Stars from:</h4>
                                                    </Col>
                                                    <Col md={6} lg={6} sm={6} xs={6}>
                                                        <h4 className="right price">{doc.price ? doc.price : "Not available"}</h4>
                                                    </Col>
                                                    <Col md={1} lg={1} sm={1} xs={1} />

                                                    <Col md={4} lg={4} sm={4} xs={4} />
                                                    <Col md={8} lg={8} sm={12} xs={12} className="btn-right">
                                                        <Link
                                                            to={{
                                                                pathname: `profile/${i}`,
                                                                state: {
                                                                    id: i,
                                                                    doctor: doc
                                                                }
                                                            }}
                                                        >
                                                            <Button className="next-btn">
                                                                Next
                                                       <Image
                                                                    src={Arrowbtn}
                                                                    className="arrow-forward"
                                                                    height="10px"
                                                                    style={{ marginLeft: "3px", marginBottom: "2px" }}
                                                                />
                                                            </Button>
                                                        </Link>
                                                    </Col>
                                                </Col>
                                            </div>


                                        ))
                                        :
                                        <p>No Doctors available</p>
                                }
                            </Col>
                    }
                </Col>
            </div >
        );
    }
}

export default Search;
