import React from 'react';
import { useNavigate } from 'react-router-dom'
import {
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';

import "../CSS/CategoryCard.css";

export default function CategoryCard(props) {

    let navigate = useNavigate();

    const navigateToProducts = () => {
        navigate('/products/' + props.categoryData.url);
    }

    return (
        <MDBCol md='3' className='col-example'>
            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage className="card-image-alignment" src={props.categoryData.imgName} fluid alt='...' />
                    <div>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </div>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>{props.categoryData.name}</MDBCardTitle>
                    <MDBCardText>
                        {props.categoryData.description}
                    </MDBCardText>
                    <div className="text-center">
                        <MDBBtn onClick={navigateToProducts}>Explore More</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}
