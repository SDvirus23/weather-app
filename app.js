   const API_KEY = `97af3af143feed1e309ced1f56baf363`;
  const form=document.querySelector("form");
  const search=document.querySelector("#search");
  const weather=document.querySelector("#weather");
    
  const getweather=async (city)=>{
    weather.innerHTML=`loading.....`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
   return showdata(data);
  }
  const showdata=(data)=>{
    if(data.cod== 404){
        weather.innerHTML=`<p>city not  found search properly</p>`;
        return;
    }
   weather.innerHTML=`
     <div>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">

     </div>
     <div>
         <h2> ${data.main.temp}°C</h2>
         <h4>${data.weather[0].main}</h4>

     </div>
   `
  }
  form.addEventListener("submit",(event)=>{
    getweather(search.value);
    event.preventDefault();
  })