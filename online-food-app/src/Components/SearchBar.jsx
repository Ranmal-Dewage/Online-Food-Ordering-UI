import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { MDBInput, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function SearchBar() {

    const [searchValue, setSearchValue] = useState("")
    let navigate = useNavigate();

    const navigateToSearchProducts = (e) => {
        e.preventDefault();
        console.log(searchValue);
        setSearchValue('');
        navigate('/products/search', { state: { value: searchValue } });
        navigate(0);
    }

    const handleOnChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    return (
        <form onSubmit={navigateToSearchProducts}>
            <MDBRow>
                <MDBCol sm='2'>
                    <MDBIcon icon="search" size='2x' color='white' />
                </MDBCol>
                <MDBCol sm='10'>
                    <MDBInput
                        icon='user'
                        label='Search ...'
                        id='search-bar'
                        type='text'
                        contrast
                        onChange={handleOnChange}
                        value={searchValue} />
                </MDBCol>
            </MDBRow>
        </form>
    );
}
