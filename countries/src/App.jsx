import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './componenets/Countries';
import Filter from './componenets/Filter';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');

    const hook = () => {
        axios.get('https://restcountries.com/v3.1/all').then((response) => {
            setCountries(response.data);
        });
    };

    useEffect(hook, []);

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };
    

    return (
        <div>
            <Filter handleFilter={handleFilter} filter={filter} />
            <Countries countries={countries} filterValue={filter}  />
        </div>
    );
};

export default App;
