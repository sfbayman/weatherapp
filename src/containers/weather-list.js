import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherDetail from '../components/weather-detail';


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
					{this.props.weather.map((cityData)=>{
						return(
							 <WeatherDetail key={cityData.name} cityData={cityData} />
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
