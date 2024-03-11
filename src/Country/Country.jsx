import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
    // console.log(handleVisitedFlag)
    const {name,flags,area,population,cca3} = country;
    // console.log(name,flags)
    const [Visited,setVisited] = useState(false)
    const handleVIsited = () => {
        setVisited(!Visited)
    }
    const passPerams = () => {
        handleVisitedCountries(country)
        
    }
    // console.log(handleVisitedCountries)
    return (
        <div className={`country ${Visited ? 'visited':'nonVisited'}`}>
            <h5 style={{color:Visited?'purple':'white'}}>Name: {name.common}</h5>
            <img src={flags.png} alt="" />
            <h5>Popolation : {population}</h5>
            <h5>Area : {area}</h5>
            <h5>Code : {cca3}</h5>
            <button onClick={passPerams }>Mark visited</button> &nbsp;&nbsp;
            <button onClick={() =>handleVisitedFlag(country.flags.png) }>Add Flag</button> &nbsp;&nbsp;
            <button onClick={handleVIsited}>{Visited ? 'visited':'Going'}</button>
            {Visited ? <h5>I have visited this country.</h5>: 'I want to visit this country'}
            <hr />
            <CountryDetail
            country ={country}
            handleVisitedCountries = {handleVisitedCountries}
            handleVisitedFlag = {handleVisitedFlag}
            ></CountryDetail>
        </div>
    );
};

export default Country;