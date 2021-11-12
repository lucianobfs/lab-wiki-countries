import { Link, Route, Routes } from "react-router-dom";

import countries from '../countries.json'

function CountriesList() {


    return (

        <div>
            {countries.map((item) => {
                return <div className="list-group">
                            <Link className="list-group-item list-group-item-action" to={item.cca3}>{item.name.common}</Link>
                        </div>   
            })}
        </div>

    )

}


export default CountriesList

            

    