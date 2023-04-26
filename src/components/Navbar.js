import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample() {
  return (
    <Navbar className="shadow-md" >
      <Container>
        <Navbar.Brand href="https://www.nitj.ac.in/">
          {" "}
          <div className="flex font-semibold ">
            <img
              src="/Logo.png"
              alt="logo"
              width={50}
              height={50}
              className="m-2"
            />{" "}
            <div className="font-semibold">
              {" "}
              डॉ बी आर अम्बेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर <br /> Dr
              B R Ambedkar National Institute of Technology Jalandhar{" "}
            </div>{" "}
          </div>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
          <Nav.Item>
        <Nav.Link className="p-3" href="/home">Home</Nav.Link>
      </Nav.Item>
            <NavDropdown
              title="Hostels"
              id="basic-nav-dropdown"
              className="p-2"
            >
              <NavDropdown.Item href="/hostel/boys_hostel">
                Boys Hostel
              </NavDropdown.Item>
              <NavDropdown.Item href="/hostel/girls_hostel">
                Girls Hostel
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Departments"
              id="basic-nav-dropdown"
              className="p-2"
            >
              <NavDropdown.Item href="/department/cse">CSE</NavDropdown.Item>
              <NavDropdown.Item href="/department/it">IT</NavDropdown.Item>
              <NavDropdown.Item href="/department/ece">ECE</NavDropdown.Item>
              <NavDropdown.Item href="/department/ice">ICE</NavDropdown.Item>
              <NavDropdown.Item href="/department/ipe">IPE</NavDropdown.Item>
              <NavDropdown.Item href="/department/me">ME</NavDropdown.Item>
              <NavDropdown.Item href="/department/ce">CE</NavDropdown.Item>
              <NavDropdown.Item href="/department/che">CHE</NavDropdown.Item>
              <NavDropdown.Item href="/department/bt">BT</NavDropdown.Item>
              <NavDropdown.Item href="/department/tt">TT</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Residences"
              id="basic-nav-dropdown"
              className="p-2"
            >
              <NavDropdown.Item href="/residence/residence_1">
                Residence 1
              </NavDropdown.Item>
              <NavDropdown.Item href="/residence/residence_2">
                Residence 2
              </NavDropdown.Item>
              <NavDropdown.Item href="/residence/residence_3">
                Residence 3
              </NavDropdown.Item>
              <NavDropdown.Item href="/residence/residence_4">
                Residence 4
              </NavDropdown.Item>
              <NavDropdown.Item href="/residence/residence_5">
                Residence 5
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Admin Building"
              id="basic-nav-dropdown"
              className="p-2"
            >
              <NavDropdown.Item href="/admin_building/admin_building_1">
                Admin Building 1
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin_building/admin_building_2">
                Admin Building 2
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin_building/admin_building_3">
                Admin Building 3
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin_building/admin_building_4">
                Admin Building 4
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin_building/admin_building_5">
                Admin Building 5
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
