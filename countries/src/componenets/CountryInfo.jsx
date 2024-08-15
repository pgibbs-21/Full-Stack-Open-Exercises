import WeatherComponent from './Weather';

const CountryInfo = ({ country }) => {
    const languageValues = Object.values(country.languages);
    // Check if the filteredCountry prop is defined before accessing its properties
    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <ul>
                {languageValues.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
            <img
                src={country.flags.png}
                alt={`Picture of ${country.name.common}'s flag`}
            />
            <WeatherComponent country={country} />
        </div>
    );
};

export default CountryInfo;
