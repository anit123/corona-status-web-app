import React, { Component } from 'react'
import Axios from 'axios'
import Summary from './Summary'
import CountryDetais from './CountryDetais'

export class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             globalSummary:[],
             currentDate:null,
             countries:[]
        }
    }
    

    async componentDidMount(){
        const res=await Axios.get('https://api.covid19api.com/summary')
        console.log(res);
        this.setState({
            globalSummary:res.data.Global
        })
        this.setState({
            currentDate:res.data.Date
        })
        this.setState({
            countries:res.data.Countries
        })
 
    }
    render() {
        return (
            <div>
                <Summary summary={this.state.globalSummary} date={this.state.currentDate} />
                <CountryDetais countries={this.state.countries}/>
            </div>
        )
    }
}

export default Details
