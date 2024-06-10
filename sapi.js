/*const url = 'https://apjoy-weather-forecast.p.rapidapi.com/forecast?location=London&days=3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2710226330mshe87fa123b512f5ep19b216jsn339e45217cd2',
		'X-RapidAPI-Host': 'apjoy-weather-forecast.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/


let p=fetch("https://apjoy-weather-forecast.p.rapidapi.com/forecast?location=London&days=3");
p.then((value1) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((value2)=>{
    console.log(value2)
})
