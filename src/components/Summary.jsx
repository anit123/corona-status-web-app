import React, { Component } from 'react'

export class Summary extends Component {
    render() {
        const { summary, date } = this.props
        return (
            <div className="row1">
                <div className="container services">
                    <div className="row">
                        <div className="col s12 m6 13">
                            <div className="card">
                                <div className="card-content">
                                    <i className="material-icons small">sentiment_dissatisfied</i>
                                    <h5>New Confirmed</h5>
                                    {summary.NewConfirmed}
                                </div>
                                <div className="card-action">
                                    {new Date(date).toDateString()}
                                </div>
                            </div>
                        </div>
                        {/* card-2 */}
                        <div className="col s12 m6 13">
                            <div className="card">
                                <div className="card-content">
                                    <i className="material-icons small">sentiment_dissatisfied</i>
                                    <h5>Total Confirmed</h5>
                                    {summary.TotalConfirmed}
                                </div>
                                <div className="card-action">
                                    {new Date(date).toDateString()}
                                </div>
                            </div>
                        </div>
                        {/* card-3 */}
                        <div className="col s12 m6 13 ">
                            <div className="card">
                                <div className="card-content">
                                    <i className="material-icons small">sentiment_dissatisfied</i>
                                    <h5>New Deaths</h5>
                                    {summary.NewDeaths}
                                </div>
                                <div className="card-action">
                                    {new Date(date).toDateString()}
                                </div>
                            </div>
                        </div>
                        {/* card--4 */}
                        <div className="col s12 m6 13 ">
                            <div className="card">
                                <div className="card-content">
                                    <i className="material-icons small">sentiment_dissatisfied</i>
                                    <h5>Total Deaths</h5>
                                    {summary.TotalDeaths}
                                </div>
                                <div className="card-action">
                                    {new Date(date).toDateString()}
                                </div>
                            </div>
                        </div>
                        {/* card--5 */}
                        <div className="col s12 m6 13 ">
                            <div className="card">
                                <div className="card-content">
                                    <i className="material-icons small">sentiment_very_satisfied</i>
                                    <h5>New Recovered</h5>
                                    {summary.NewRecovered}
                                </div>
                                <div className="card-action">
                                    {new Date(date).toDateString()}
                                </div>
                            </div>
                        </div>

                        {/* card--6 */}
                        <div className="col s12 m6 13">
                            <div className="card">
                                <div className="card-content">
                                    <i className="material-icons small">sentiment_very_satisfied</i>
                                    <h5>Total Recovered</h5>
                                    {summary.TotalRecovered}
                                </div>
                                <div className="card-action">
                                    {new Date(date).toDateString()}
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        )
    }
}

export default Summary
