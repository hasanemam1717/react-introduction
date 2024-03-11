import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country)
    const {name,flags,area,population,cca3} = country;
    // console.log(name,flags)
    const [Visited,setVisited] = useState(false)
    const handleVIsited = () => {
        setVisited(!Visited)
    }

    return (
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h1>Popolation : {population}</h1>
            <h1>Area : {area}</h1>
            <h1>Code : {cca3}</h1>
            <button onClick={handleVIsited}>{Visited ? 'visited':'Going'}</button>
            {Visited ? <h1>I have visited this country.</h1>: 'I want to visit this country'}
        </div>
    );
};

export default Country;