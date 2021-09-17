import React, { Fragment, useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { ProjectImages } from "../../components/index";
import logo1 from "../../assets/images/killer-whale.svg";

const AppNavBar = () => {
  return (
    <Fragment>
      <Navbar className="cbs-navbar" expand="lg">
        <Container fluid></Container>
      </Navbar>
    </Fragment>
  );
};

export default AppNavBar;
