import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherDetail from '../components/weather/weather-detail';


class  WeatherList extends Component {
	render(){
		return (
			<table className='table table-hover'>
				<thead>
					<tr> 
						<th>City</th>
						<th>Temparature (K)</th>
						<th>Humidity (%)</th>
						<th>Pressure (hPa)</th>																		
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map((cityData, index)=>{
						return(
							 <WeatherDetail key={index} cityData={cityData} />
							);
					})}
				</tbody>
			</table>
			);
	}
}

function mapStateToProps({weather}){
	return {weather};
}

export default connect(mapStateToProps)(WeatherList)
