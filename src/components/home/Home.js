import React, { useEffect, useState } from 'react';
import Country from '../country/Country';

const Home = () => {
    const [countres, setCountres] = useState([])
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountres(data));
    }, [])
    return (
        <div className='row'>
            {/* <h1>{countres.length}</h1> */}
            {
                countres.map((country, index) => <Country key={index} country={country}></Country>)
            }
        </div>
    );
};

export default Home;