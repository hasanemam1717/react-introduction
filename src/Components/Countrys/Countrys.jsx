import { useEffect } from "react";
import { useState } from "react";
import Country from "../../Country/Country";
import './Countrys.css'


const Countrys = () => {
    const [contrys,setCountrys] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data => setCountrys(data))
    },[])
    console.log(contrys)
    return (
        <div >
            <h2>Countrys : {contrys.length}
            </h2>
            <div className="contray-container">
            {
                contrys.map(contry => <Country key={contry.cca3} country={contry}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countrys;