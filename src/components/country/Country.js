import React from 'react';
import { useHistory } from 'react-router';

const Country = (props) => {
    const { name, flag } = props.country;
    const history = useHistory();
    const countryDetails = name => {
        const url = `/${name}`
        history.push(url)

    }
    // console.log(countryDetails);
    return (
        <div className='col-md-2'>
            <div className="country-wrap">
                {/* <h1>{country.length}</h1> */}
                <h2>{name}</h2>
                <img src={flag} alt="" />
                <button className="btn btn-primary mt-4" onClick={() => countryDetails(name)}>Go to Details</button>

            </div>


        </div>
    );
};

export default Country;