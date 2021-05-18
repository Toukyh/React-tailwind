import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag').then((res) => setData(res.data));
    }, []);
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        {data.map((country) => (
                            <Card country={country} key={country.name} />
                        ))}
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Countries;