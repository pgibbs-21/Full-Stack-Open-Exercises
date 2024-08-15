import { useState } from 'react';
import CountryInfo from './CountryInfo';

const Countries = ({ countries, filterValue }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(filterValue.toLowerCase())
    );

    const handleShowClick = (country) => {
        setSelectedCountry(country);
    };

    const handleHideClick = () => {
        setSelectedCountry(null);
    };

    if (filteredCountries.length > 10) {
        return <div>To many Countries please refine your search</div>;
    } else if (filteredCountries.length === 1) {
        return (
            <div>
                <CountryInfo country={filteredCountries[0]} />
            </div>
        );
    } else {
        return (
            <div>
                <h2>Countries</h2>
                <ul>
                    {filteredCountries.map((country) => {
                        return (
                            <li key={country.cca3}>
                                {country.name.common}
                                <button
                                    onClick={() => handleShowClick(country)}>
                                    show
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {selectedCountry && (
                    <div>
                        <CountryInfo country={selectedCountry} />
                        <button onClick={handleHideClick}>hide</button>
                    </div>
                )}
            </div>
        );
    }
};

export default Countries;
