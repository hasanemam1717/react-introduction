const CountryDetail = ({handleVisitedFlag,handleVisitedCountries,country}) => {
    return (
        <div>
            <h3>Country Ditail</h3>
            <hr />
            <h2>Country data :{country.name.common}</h2>
        </div>
    );
};

export default CountryDetail;