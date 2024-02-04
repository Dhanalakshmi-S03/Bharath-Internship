const apikey = "c51f29e8df42cf3147eea9aca454a368";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".seacrch input");
        const searchBtn = document.querySelector(".seacrch button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apikey}`);
            var data = await response.json();

            // console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src="images/s (1).png";
            }
            else if(data.weather[0].main == "clear"){
                weatherIcon.src = "images/s (2).png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/s (4).png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/s (5).png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/s (6).png";
            }

            document.querySelector(".weather").style.display = "block";

        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);

        })
