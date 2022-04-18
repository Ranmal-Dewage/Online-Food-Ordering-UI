import React from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBIcon,
    MDBBtn,
} from "mdb-react-ui-kit";

import SearchBar from "./SearchBar";

import MainLogo from "../Images/Logo_1.png"

import "../CSS/NavBar.css";

export default function NavBar() {
    return (
        <MDBNavbar className="nav-bar-styles" light >
            <MDBContainer className="main-logo-container">
                <MDBNavbarBrand className="main-logo-text" href='/'>
                    <img
                        src={MainLogo}
                        height='60'
                        alt='Main Logo'
                        loading='lazy'
                    />
                    The Healthy Foods
                </MDBNavbarBrand>
            </MDBContainer>
            <SearchBar />
            <MDBBtn className="shopping-cart-icon" size="lg" floating>
                <MDBIcon fas icon="shopping-cart" size='lg' />
            </MDBBtn>
            <MDBBtn className="user-icon" size="lg" floating>
                <MDBIcon fas icon="user-alt" size='lg' />
            </MDBBtn>
        </MDBNavbar>
    );
}
