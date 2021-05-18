import React from 'react';

const Card = (props) => {
    const { country } = props;

    const NumberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return (
        <div className="p-2 lg:w-1/5 md:w-1/3 w-ful">
            <div className="flex relative h-40">
                <img alt="gallery" className=" rounded absolute inset-0 w-full h-full object-cover object-center" src={country.flag}
                />
                <div className=" rounded px-3 py-5 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">{country.name}</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">{country.capital}</h1>
                    <p className="leading-relaxed"> {NumberFormat(country.population)}hab</p>
                </div>
            </div>
        </div>

    );
};

export default Card;