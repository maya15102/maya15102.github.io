const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 

        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            var card = document.createElement('section');
            var h2 = document.createElement('h2');
            var birth = document.createElement('p');
            var place = document.createElement('p');
            var death = document.createElement('p');
            var image = document.createElement('img');
            

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birth.textContent = "Date of Birth: " + prophets[i].birthdate;
            place.textContent = "Place of Birth: " + prophets[i].birthplace;
            death.textContent = "Date of Death: " + prophets[i].death;

            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', "picture of: " + h2.textContent);

            card.appendChild(h2);
            card.appendChild(birth);
            card.appendChild(place);
            card.appendChild(death);
            card.appendChild(image);
            
          
            document.querySelector('div.cards').appendChild(card);
        }
    });

   