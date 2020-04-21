import React, { Component } from 'react'

export class CountryDetais extends Component {

    render() {
        const { countries } = this.props
        const countryName=countries.map((country,i)=>(
            <li>{country.Country}</li>
        ))
        return (
            <div>
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Country Name</th>
                            <th>New Confirmed</th>
                            <th>Total Confirmed</th>
                            <th>New Deaths</th>
                            <th>Total Deaths</th>
                            <th>New Recovered</th>
                            <th>Total Recovered</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            countries.map((country,i)=>(
                                <tr key={i}>
                                    <td className="td">{country.Country}</td>
                                    <td>{country.NewConfirmed}</td>
                                    <td>{country.TotalConfirmed}</td>
                                    <td>{country.NewDeaths}</td>
                                    <td>{country.TotalDeaths}</td>
                                    <td>{country.NewRecovered}</td>
                                    <td>{country.TotalRecovered}</td>
                               
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">{countryName}</a>
  
  </div>
</div>
             */}

            </div>
        )
    }
}

export default CountryDetais
