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
        //get index of clicked user
        var index = $(e.target).closest('.card').find('#user-index-hidden').first().text();
        displayUserDetails(users, index);
        $('.modal-close-btn').on('click', function (e) {
            $('.modal-container').remove();
        });
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

    //add the close button to the detail window
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

    //display user picture
    var modalImg = document.createElement('img');
    modalImg.className = "modal-img";
    modalImg.setAttribute("alt", "profile picture");
    modalImg.src = users[index].picture.large;
    modalInfoContainerDiv.appendChild(modalImg);

    //display user name
    var modalh3 = document.createElement('h3');
    modalh3.setAttribute("id", "name");
    modalh3.className = "modal-name cap";
    modalh3.innerText = users[index].name.first + " " + users[index].name.last;
    modalInfoContainerDiv.appendChild(modalh3);

    //display user email
    var emailp = document.createElement('p');
    emailp.className = "modal-text";
    emailp.innerText = users[index].email;
    modalInfoContainerDiv.appendChild(emailp);

    //display user location
    var cityp = document.createElement('p');
    cityp.className = "modal-text cap";
    cityp.innerText = users[index].location.city + ', ' + users[index].location.state;
    modalInfoContainerDiv.appendChild(cityp);

    var hrElem = document.createElement('hr');
    modalContainerDiv.appendChild(hrElem);

    //display user phone
    var cellp = document.createElement('p');
    cellp.className = "modal-text";
    cellp.innerText = users[index].cell;
    modalInfoContainerDiv.appendChild(cellp);

    //display user address
    var addressp = document.createElement('p');
    addressp.className = "modal-text";
    addressp.innerText = users[index].location.street + ', ' + users[index].location.city + ' ' + users[index].location.state + ' ' + users[index].location.postcode;
    modalInfoContainerDiv.appendChild(addressp);

    //display user birthday
    var bdayp = document.createElement('p');
    bdayp.className = "modal-text";
    var bdate = new Date(users[index].dob.date);
    let formatted_date = bdate.getDate() + "/" + (bdate.getMonth() + 1) + "/" + bdate.getFullYear();

    bdayp.innerText = "Birtday: " + formatted_date;
    modalInfoContainerDiv.appendChild(bdayp);

    modalDiv.appendChild(modalInfoContainerDiv);
    modalContainerDiv.appendChild(modalDiv);
    document.body.appendChild(modalContainerDiv);
}