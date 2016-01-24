import axios from 'axios';

const WEATHER_API_KEY ='7a27dd8d33251f05ddaa5ae9fec48a0c';
const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country){

	const url = `${WEATHER_API_URL}&q=${city},US`;


	const response = axios.get(url);
	//console.log(response);
	return {
		type: FETCH_WEATHER,
		payload: response
	};	
}