import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import "../CSS/Footer.css";

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white footer-alignment'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn className='btn-floating m-1'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn className='btn-floating m-1'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn className='btn-floating m-1'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn className='btn-floating m-1' >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn className='btn-floating m-1' >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn className='btn-floating m-1' >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright&nbsp;
        <a className='text-white' href='https://ranmaldewage.wordpress.com/author/ranmaldewage/'>
          Ranmal Dewage
        </a>
      </div>
    </MDBFooter>
  );
}