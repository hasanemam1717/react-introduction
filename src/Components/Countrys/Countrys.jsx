import { useEffect } from "react";
import { useState } from "react";

const Countrys = () => {
    const [contrys,setCountrys] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then (data => console.log(data))
    },[])
    return (
        <div>
            <h2>Countrys</h2>
        </div>
    );
};

export default Countrys;