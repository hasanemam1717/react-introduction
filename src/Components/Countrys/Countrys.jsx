import { useEffect } from "react";
import { useState } from "react";
import Country from "../../Country/Country";
import './Countrys.css'


const Countrys = () => {
    const [contrys,setCountrys] = useState([]);
    const [visitedContrys,setVisitedContrys] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data => setCountrys(data))
    },[])

    const handleVisitedCountries = (countries) => {
        console.log(countries)
        console.log('visited countries')
        const newVisitedCountries = [...visitedContrys ,countries]
        setVisitedContrys(newVisitedCountries)
    }

    console.log(contrys)
    return (
        <div >
            <h2>Countrys : {contrys.length}
            <div>
                <h1>Visited Countrys : {visitedContrys.length}</h1>
                <ul>
                    {
                       visitedContrys.map((country) => <li key={country.cca3}>{country.name.common}</li> )
                    }
                </ul>
            </div>
            </h2>
            <div className="contray-container">
            {
                contrys.map(contry => <Country 
                    key={contry.cca3}
                    handleVisitedCountries={handleVisitedCountries} 
                    country={contry}
                    ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countrys;