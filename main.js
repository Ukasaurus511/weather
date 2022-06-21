const api = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia%2FTokyo';

fetch(api)
.then(response => response.json())
.then(data => makePage(data));

function makePage(data) {
  console.log(data);
}
