import { useEffect } from "react";
import { useState } from "react";
import Country from "../../Country/Country";
import './Countrys.css'


const Countrys = () => {
    const [contrys,setCountrys] = useState([]);
    const [visitedContrys,setVisitedContrys] = useState([]);
    const [visitedFlag,setVisitedFlag] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data => setCountrys(data))
    },[])

    const handleVisitedCountries = (countries) => {
        // console.log(countries)
        // console.log('visited countries')
        const newVisitedCountries = [...visitedContrys ,countries]
        setVisitedContrys(newVisitedCountries)
    }
     const handleVisitedFlag =(flag) =>{
        console.log(flag)
        console.log('visited flag')
        const newVisitedFlag = [...visitedFlag,flag]
        setVisitedFlag(newVisitedFlag)
     }

    // console.log(contrys)
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
                <div >
                    {
                        visitedFlag.map((flag ,idx) => <div className="flag-conatiner" key={idx}> <img src={flag} alt="" /></div> )
                    }
                </div>
            </div>
            </h2>
            <div className="contray-container">
            {
                contrys.map(contry => <Country 
                    key={contry.cca3}
                    handleVisitedCountries={handleVisitedCountries} 
                    handleVisitedFlag={handleVisitedFlag}
                    country={contry}
                    ></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countrys;