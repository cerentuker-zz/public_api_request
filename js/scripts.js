/******************************************
Treehouse Techdegree:
FSJS project 5 - Public API Requests
******************************************/
'use strict';

var NR_OF_USERS = 12;
var reqUrl = 'https://randomuser.me/api/?results=' + NR_OF_USERS;

$.ajax({
    url: reqUrl,
    dataType: 'json',
    success: function (data) {
        console.log(data);
        displayResults(data.results);
    }
});

/**
 * function that creates the dom elements to display users on screen
 * @param {Array} users : result array that contains a list of users
 */
function displayResults(users) {
    var parentDiv = document.getElementById('gallery');

    for (let i = 0; i < users.length; i++) {
        var cardDiv = document.createElement('div');
        cardDiv.className = "card";

        //display user image
        var cardImageContainerDiv = document.createElement('div');
        cardImageContainerDiv.className = "card-img-container";
        var cardImg = document.createElement('img');
        cardImg.className = "card-img";
        cardImg.src = users[i].picture.large;
        cardImageContainerDiv.appendChild(cardImg);


        //display user basic info
        var cardInfoContainerDiv = document.createElement('div');
        cardInfoContainerDiv.className = "card-info-container";
        //display user name
        var nameh3 = document.createElement('h3');
        nameh3.className = "card-name cap";
        nameh3.innerText = users[i].name.first + users[i].name.last;
        cardInfoContainerDiv.appendChild(nameh3);
        //display user email
        var emailp = document.createElement('p');
        emailp.className = "card-text";
        emailp.innerText = users[i].email;
        cardInfoContainerDiv.appendChild(emailp);
        //display user location
        var cityp = document.createElement('p');
        cityp.className = "card-text cap";
        cityp.innerText = users[i].location.city;
        cardInfoContainerDiv.appendChild(cityp);

        cardDiv.appendChild(cardImageContainerDiv);
        cardDiv.appendChild(cardInfoContainerDiv);
        parentDiv.appendChild(cardDiv);
    }
}
  /**
* <div class="card">
      <div class="card-img-container">
          <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">first last</h3>
          <p class="card-text">email</p>
          <p class="card-text cap">city, state</p>
      </div>
  </div>
*/

/*$(document.createElement('div'), {
    text: 'Div text',
    'class': 'card-img-container'
}).appendTo('.gallery');*/