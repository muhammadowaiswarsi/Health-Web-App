import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, Image, Col, Button, FormControl, NavItem } from "react-bootstrap"
import "./index.css"
import Logo from "./../../assets/logo.png"

class Home extends Component {
  constructor() {
    super()
  }




  render() {
    return (
      <div className="Home-component">
        <Navbar>
          {/* <Col md={6} lg={6} xs={12} sm={12}> */}
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">
                <Image src={Logo} width="45px" />
                KANON HEALTH</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          {/* </Col> */}
          <Nav>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
         
         <Navbar.Collapse>
            <div className="collapse">
            <Nav>
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
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <div className="main-div">
          <h1>SUCH DIR DEN BESTEN!</h1>
          <h2>VERGLEICHE DIE KOSTEN & CHATTE MIT DER PRAXIS</h2>
          <div className="search-main-div">
            <Col md={12} className="noPadMar">
              <Col md={3} className="PadMar">
                <FormControl
                  type="text"
                  placeholder="Enter City"
                  className="form-input"
                />
              </Col>
              <Col md={3} className="PadMar">
                <FormControl
                  type="text"
                  placeholder="Enter City"
                  className="form-input"
                />
              </Col>
              <Col md={3} className="PadMar">
                <FormControl
                  type="text"
                  placeholder="Enter City"
                  className="form-input"
                />
              </Col>
              <Col md={2} className="PadMar">
                <Button bsStyle="warning">Search</Button>
              </Col>
            </Col>

            <h3 className="noPadMar">Feel free to search for the best doctor</h3>

          </div>
        </div>

        <div className="feel-free-dr-div">
          <h1>Feel free to search fot the best doctor contact them 0800 - 9966356</h1>
        </div>

        <div className="feel-free-dr-div-wht">
          <h2>Feel free to search fot the best doctor contact them 0800 - 9966356</h2>
        </div>

        <Col md={12} lg={12}>
          <Col md={1} />
          <Col md={10}>
            <Col md={3}>
              <div className="picture-box-div" />
            </Col>
            <Col md={3}>
              <div className="picture-box-div" />
            </Col>
            <Col md={3}>
              <div className="picture-box-div" />
            </Col>
            <Col md={3}>
              <div className="picture-box-div" />
            </Col>
          </Col>
          <Col md={1} />
        </Col>


        <Col md={12} lg={12} className="boxes-div">
          <Col md={1} />
          <Col md={10}>
            <Col md={3}>
              <div className="picture-box-div" />
            </Col>
            <Col md={3}>
              <div className="picture-box-div" />
            </Col>
            <Col md={3}>
              <div className="picture-box-div" />
            </Col>
            <Col md={3}>
              <div className="picture-box-div" />
            </Col>
          </Col>
          <Col md={1} />
        </Col>

        <Col md={12} lg={12} className="boxes-div">
          <Col md={1} />
          <Col md={10}>
            <Col md={5}>
              <h1>Important Text Here</h1>
              <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
            </Col>
            <Col md={2} />
            <Col md={5}>
              <h1>Important Text Here</h1>
              <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
            </Col>
          </Col>
          <Col md={1} />
        </Col>

        <Col md={12} lg={12} className="boxes-div">
          <Col md={1} />
          <Col md={10}>
            <Col md={5}>
              <h1>Important Text Here</h1>
              <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
            </Col>
            <Col md={2} />
            <Col md={5}>
              <h1>Important Text Here</h1>
              <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
            </Col>
          </Col>
          <Col md={1} />
        </Col>

        <Col md={12} lg={12} className="boxes-div">
          <Col md={4} lg={4} sm={3} xs={0} />
          <Col md={4} lg={4} sm={6} xs={12} className="city-search-div flex-and-around">
            <Col md={7} className="noPadMar flex-and-space">
              <FormControl
                type="text"
                placeholder="Enter City"
              />
            </Col>
            <Col md={3} className="noPadMar flex-and-space">
              <Button bsStyle="warning">Search</Button>
            </Col>
          </Col>
          <Col md={4} lg={4} sm={3} xs={0} />
        </Col>


        <Col md={12} lg={12} sm={12} xs={12} className="end-link-div">

          <Col md={12} lg={12} sm={12} xs={12}>
            <Col md={1} lg={1} sm={0} xs={0} />
            <Col md={10} lg={10} xs={12} sm={12}>
              <Col md={2} lg={2} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={1} lg={1} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={1} lg={1} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={2} lg={2} xs={0} sm={0} />
            </Col>
            <Col md={1} lg={1} sm={0} xs={0} />
          </Col>

          <Col md={12} lg={12} sm={12} xs={12}>
            <Col md={1} lg={1} sm={0} xs={0} />
            <Col md={10} lg={10} xs={12} sm={12}>
              <Col md={2} lg={2} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={1} lg={1} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={1} lg={1} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={2} lg={2} xs={0} sm={0} />
            </Col>
            <Col md={1} lg={1} sm={0} xs={0} />
          </Col>


          <Col md={12} lg={12} sm={12} xs={12}>
            <Col md={1} lg={1} sm={0} xs={0} />
            <Col md={10} lg={10} xs={12} sm={12}>
              <Col md={2} lg={2} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={1} lg={1} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={1} lg={1} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={2} lg={2} xs={0} sm={0} />
            </Col>
            <Col md={1} lg={1} sm={0} xs={0} />
          </Col>


          <Col md={12} lg={12} sm={12} xs={12}>
            <Col md={1} lg={1} sm={0} xs={0} />
            <Col md={10} lg={10} xs={12} sm={12}>
              <Col md={2} lg={2} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={1} lg={1} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={1} lg={1} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={2} lg={2} xs={0} sm={0} />
            </Col>
            <Col md={1} lg={1} sm={0} xs={0} />
          </Col>


          <Col md={12} lg={12} sm={12} xs={12}>
            <Col md={1} lg={1} sm={0} xs={0} />
            <Col md={10} lg={10} xs={12} sm={12}>
              <Col md={2} lg={2} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={1} lg={1} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={1} lg={1} xs={0} sm={0} />
              <Col md={3} lg={3} xs={4} sm={4}>
                <p>Text + URL to Page</p>
              </Col>
              <Col md={2} lg={2} xs={0} sm={0} />
            </Col>
            <Col md={1} lg={1} sm={0} xs={0} />
          </Col>

        </Col>

      </div >
    );
  }
}

export default Home;
