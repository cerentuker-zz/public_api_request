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
        nameh3.innerText = users[i].name.first + ' ' + users[i].name.last;
        cardInfoContainerDiv.appendChild(nameh3);
        //display user email
        var emailp = document.createElement('p');
        emailp.className = "card-text";
        emailp.innerText = users[i].email;
        cardInfoContainerDiv.appendChild(emailp);
        //display user location
        var cityp = document.createElement('p');
        cityp.className = "card-text cap";
        cityp.innerText = users[i].location.city + ', ' + users[i].location.state;
        cardInfoContainerDiv.appendChild(cityp);
        //store user index in hidden field
        var userIndexHiddenDiv = document.createElement('div');
        userIndexHiddenDiv.setAttribute("id", "user-index-hidden");
        userIndexHiddenDiv.innerText = i;
        userIndexHiddenDiv.style.visibility = "hidden";

        cardDiv.appendChild(cardImageContainerDiv);
        cardDiv.appendChild(cardInfoContainerDiv);
        cardDiv.appendChild(userIndexHiddenDiv);
        parentDiv.appendChild(cardDiv);
    }

    //click event for cards 
    $('.card').on('click', function (e) {
        var a = e.target;
        var c = $(a).parent().closest('div');
        //get index of clicked user
        var index = 1;
        displayUserDetails(users, index);
        $('.modal-close-btn').on('click', function (e) {
            $('.modal-container').remove();
        });
        //console.log("clicked! " + e.target);
    });
    //click event for user detail close button 
    $('.modal-close-btn').on('click', function (e) {
        $('.modal-container').remove();
    });
}
//display the popup for clicked user
function displayUserDetails(users, index) {

    //display user basic info
    var modalContainerDiv = document.createElement('div');
    modalContainerDiv.className = "modal-container";

    var modalDiv = document.createElement('div');
    modalDiv.className = "modal";
    var modalCloseButton = document.createElement('button');
    modalCloseButton.setAttribute("type", "button");
    modalCloseButton.className = "modal-close-btn";
    modalCloseButton.setAttribute("id", "modal-close-btn");
    modalCloseButton.innerHTML = `<strong>X</strong>`;
    modalDiv.appendChild(modalCloseButton);

    var modalInfoContainerDiv = document.createElement('div');
    modalInfoContainerDiv.className = "modal-info-container";

    var modalImg = document.createElement('img');
    modalImg.className = "modal-img";
    modalImg.setAttribute("alt", "profile picture");
    modalImg.src = users[index].picture.large;
    modalInfoContainerDiv.appendChild(modalImg);

    var modalh3 = document.createElement('h3');
    modalh3.setAttribute("id", "name");
    modalh3.className = "modal-name cap";
    modalh3.innerText = users[index].name.first + " " + users[index].name.last;
    modalInfoContainerDiv.appendChild(modalh3);

    modalDiv.appendChild(modalInfoContainerDiv);
    modalContainerDiv.appendChild(modalDiv);
    document.body.appendChild(modalContainerDiv);
}

/**
 * <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>

                // IMPORTANT: Below is only for exceeds tasks
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div> */

/*$(document.createElement('div'), {
    text: 'Div text',
    'class': 'card-img-container'
}).appendTo('.gallery');*/