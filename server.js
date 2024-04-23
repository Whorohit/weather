const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6534fb187fmshb7fd6405e2ee237p1d1d50jsnb4f3ee7e16c3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
 const getweather=(city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		City.innerHTML=city
        cloud_pct.innerHTML=response.cloud_pct
		feels_like.innerHTML=response.feels_like
		humidity.innerHTML=response.humidity
		max_temp.innerHTML=response.max_temp
		min_temp.innerHTML=response.min_temp
		wind_degrees.innerHTML=response.wind_degrees
		wind_speed.innerHTML=response.wind_speed
		sunrise.innerHTML=response.sunrise
		sunset.innerHTML=response.sunset
		temp.innerHTML=response.temp

	})
	.catch(err => console.error(err));
}
let city="delhi"
getweather(city);
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
	.then(response => response.json())
	.then(response => {
        cloud_pct1.innerHTML=response.cloud_pct
		feels_like1.innerHTML=response.feels_like
		humidity1.innerHTML=response.humidity
		max_temp1.innerHTML=response.max_temp
		min_temp1.innerHTML=response.min_temp
		wind_degrees1.innerHTML=response.wind_degrees
		wind_speed1.innerHTML=response.wind_speed
		sunrise1.innerHTML=Date(response.sunrise)
		sunset1.innerHTML=Date(response.sunset)
		temp1.innerHTML=response.temp

	})
	.catch(err => console.error(err));
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york', options)
	.then(response => response.json())
	.then(response => {
        cloud_pct2.innerHTML=response.cloud_pct
		feels_like2.innerHTML=response.feels_like
		humidity2.innerHTML=response.humidity
		max_temp2.innerHTML=response.max_temp
		min_temp2.innerHTML=response.min_temp
		wind_degrees2.innerHTML=response.wind_degrees
		wind_speed2.innerHTML=response.wind_speed
		sunrise2.innerHTML=Date(response.sunrise)
		sunset2.innerHTML=Date(response.sunset)
		temp2.innerHTML=response.temp

	})
	.catch(err => console.error(err));
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
        cloud_pct3.innerHTML=response.cloud_pct
		feels_like3.innerHTML=response.feels_like
		humidity3.innerHTML=response.humidity
		max_temp3.innerHTML=response.max_temp
		min_temp3.innerHTML=response.min_temp
		wind_degrees3.innerHTML=response.wind_degrees
		wind_speed3.innerHTML=response.wind_speed
		sunrise3.innerHTML=Date(response.sunrise)
		sunset3.innerHTML=Date(response.sunset)
		temp3.innerHTML=response.temp

	})
	.catch(err => console.error(err));
document.getElementById("input1").addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(cityname.value)
})