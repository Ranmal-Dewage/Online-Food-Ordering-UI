import React from 'react';
import { MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import "../CSS/ProductCard.css";

export default function ProductCard(props) {
    return (
        <MDBCard className="product-card-alignment">
            <MDBRow className='g-0' >
                <MDBCol md='4'>
                    <MDBCardImage className="product-card-img" src={props.productImg} alt='...' fluid />
                </MDBCol>
                <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle>{props.productName}</MDBCardTitle>
                        <MDBCardText className='text-muted'>
                            Explore Fresh {props.productName} {props.category} that has not undergone any preserving process that is vacuum-wrapped or wrapped in a controlled atmosphere.
                        </MDBCardText>
                        <MDBCardText>
                            <strong>Quantity Available (Kg) : {props.quantity}</strong>
                        </MDBCardText>
                        <MDBCardText>
                            <strong>Price (USD per Kg) : {props.price}</strong>
                        </MDBCardText>
                        <MDBRow>
                            <MDBCol md='4'>
                                <MDBBtn rounded size='lg' color='primary'>
                                    Producer Info
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md='4'>
                                <MDBBtn rounded size='lg' color='success'>
                                    Add To Cart
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBCard>
    );
}
