import { Link, Route, Routes } from "react-router-dom";

import countries from '../countries.json'

import { useState } from 'react'



function CountriesList() {

    let [click, setClick] = useState(false)


    function handleClick() {
        if (click === false) {
            setClick(!click)
        }
        else {
            setClick(click)
        }
    }

    // link-primary

    // list-group-item list-group-item-action link-primary

    return (

        <div>
            {countries.map((item) => {
                return <div className="list-group">
                            <Link onClick={handleClick} className={click ? "list-group-item list-group-item-action btn btn-primary" : "list-group-item list-group-item-action btn"} to={item.cca3}>
                                <img src={`https://flagcdn.com/16x12/${item.cca2.toLowerCase()}.png`} />
                                {` ${item.name.common}`}   
                            </Link>
                        </div>   
            })}
        </div>

    )

}


export default CountriesList

            

    