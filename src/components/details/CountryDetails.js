import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { name } = useParams()
    const [details, setDetails] = useState({});

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data[0]))

    }, []);
    const {
        capital,
        population,
        flag,
        region,
        timezones,
    } = details;
    console.log(details);
    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Country Name</th>
                        <th>Country Flag</th>
                        <th>Capital</th>
                        <th>Timezones</th>
                        <th>Region</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td className='country-details-flag'><img src={flag} alt="" /></td>
                        <td>{capital}</td>
                        <td>{timezones}</td>
                        <td>{region}</td>
                        <td>{population}</td>
                    </tr>

                </tbody>
            </Table>

        </div>
    );
};

export default CountryDetails;