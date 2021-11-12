import { Link, Route, Routes } from "react-router-dom";
import countries from "../countries.json"
import { useParams } from "react-router-dom";


function CountryDetails() {

    let params = useParams()

    let foundCountry = countries.find((item) => {
        return item.cca3 === params.country
    })

    function borderToName(cca3) {
        return countries.find((item) => {
            return item.cca3 === cca3
        })
    }

    return (

        <div>

            <h1>{foundCountry.name.official}</h1>
            <table className="table">
            <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{foundCountry.capital.map((item) => {
                            return item
                        })}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {`${foundCountry.area} km²`}
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {foundCountry.borders.map((item) => {
                                    return <li><Link to={`/${item}`}>{borderToName(item).name.common}</Link></li>
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>


    )

}



export default CountryDetails



{/* <h1>France</h1>
<table className="table">
  <thead></thead>
  <tbody>
    <tr>
      <td style={{width: '30%'}}>Capital</td>
      <td>Paris</td>
    </tr>
    <tr>
      <td>Area</td>
      <td>
        551695 km
        <sup>2</sup>
      </td>
    </tr>
    <tr>
      <td>Borders</td>
      <td>
        <ul>
          <Link><a to="/AND">Andorra</a></Link>
        </ul>
      </td>
    </tr>
  </tbody>
</table> */}

