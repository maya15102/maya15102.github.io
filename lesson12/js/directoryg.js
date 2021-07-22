const requestURL = "https://maya15102.github.io/directory.json";
 

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const comp = jsonObject['comp'];

    for (var i = 0; i < comp.length; i++) {
        if ( comp[i].name == "Rakuten" || comp[i].name == "Hillsdale Mall" || comp[i].name == "San Mateo Credit Union" || comp[i].name == "Kaiser Permanente" || comp[i].name == "Fast Signs" || comp[i].name == "Concar Enterprises" || comp[i].name == "Padget Business Services"){
        
            var card = document.createElement('section');
            var h2 = document.createElement('h2');
            var h3 = document.createElement('h3');
            var ws = document.createElement('p');
            var image = document.createElement('img');
            var cont = document.createElement('div');



      image.setAttribute('src', "images/" + comp[i].photo);
      image.setAttribute('alt', "picture of: " + h2.textContent);
      h2.textContent = comp[i].name;
      h3.textContent = comp[i].motto;
      ws.textContent = comp[i].website;
      cont.setAttribute('id', 'cont');
      
      
    

      card.appendChild(cont);
      card.appendChild(image);
      cont.appendChild(h2);
      cont.appendChild(h3);
      cont.appendChild(ws);
      
      
   
      document.querySelector('div.directoryg').appendChild(card);

        }
}
  });