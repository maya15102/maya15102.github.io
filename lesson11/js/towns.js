const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const towns = jsonObject['towns'];

    for (var i = 0; i < towns.length; i++) {
        if ( towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven"){
        
            var card = document.createElement('section');
            var h2 = document.createElement('h2');
            var h3 = document.createElement('h3');
            var year = document.createElement('p');
            var population = document.createElement('p');
            var rainfall = document.createElement('p');
            var image = document.createElement('img');
            var cont = document.createElement('div');




      h2.textContent = towns[i].name;
      h3.textContent = towns[i].motto;
      year.textContent = "Year Founded: " + towns[i].yearFounded;
      population.textContent = "Population: " + towns[i].currentPopulation;
      rainfall.textContent = "Annual RainFall: " + towns[i].averageRainfall;
      image.setAttribute('src', "images/" + towns[i].photo);
      image.setAttribute('alt', "picture of: " + h2.textContent);
      cont.setAttribute('id', 'cont');
      
      
    

      card.appendChild(cont);
      card.appendChild(image);
      cont.appendChild(h2);
      cont.appendChild(h3);
      cont.appendChild(year);
      cont.appendChild(population);
      cont.appendChild(rainfall);
      
   
      document.querySelector('div.contenido').appendChild(card);

        }
}
  });