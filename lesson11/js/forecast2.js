

  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=dcb22e10016da9ef1aeb0b0a22df9dca";
  fetch(apiURL)
   
 
       .then(function (response) {
         return response.json();
       })
       .then(function (jsObject) { 
         const items = jsObject.list['items'];   
         
       
         var i = 0;
     
           var perrO = document.createElement('div');  
           perrO.setAttribute('class', 'gridforecast');
     
         jsObject.list.forEach(item => {
           var datetime = jsObject.list[i].dt_txt;
     
           if (datetime.includes("18:00:00")) {
             var newdate = new Date(datetime);
             var shortdate = newdate.toLocaleDateString( 'en-US', { weekday: 'long' }); 
     
             var divdate = document.createElement('h4'); 
             var divtemp = document.createElement('div');  
             divdate.textContent = shortdate
             divdate.setAttribute('class', 'forecast-item');
             divtemp.setAttribute('class', 'forecast-item');
             var temp = `${jsObject.list[i].main.temp.toFixed(0)}`;
             divtemp.textContent = temp + " °F"; 
     
             
     
             var imgURL = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
             var desc = jsObject.list[i].weather[0].description;  
             var icon1 = document.createElement('img');
     
             icon1.setAttribute('src', imgURL);
             icon1.setAttribute('alt', desc);
             icon1.setAttribute('height', 'auto');
             icon1.setAttribute('width', '100px');
             
             divdate.appendChild(divtemp);
             divdate.appendChild(icon1);
             perrO.appendChild(divdate);
             document.querySelector('.forecast').appendChild(perrO);      
             
             i++;        
           } else {
             i++;
           }
             
           
         });
       });


        /*upcoming events*/
eventURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(eventURL)
.then((response)=>response.json())
.then((jsonObject)=>{console.log()
    
const towns = jsonObject.towns[6];

let calender = document.createElement('div');
let h3 = document.createElement('h3');
let item1 = document.createElement('p');
let item2 = document.createElement('p');
let item3 = document.createElement('p');
h3.textContent = "Upcoming Events";
item1.textContent = towns.events[0];
item2.textContent = towns.events[1];
item3.textContent = towns.events[2];
calender.append(h3, item1, item2, item3);
document.querySelector('div.upcoming').appendChild(calender);

}); 