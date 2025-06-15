//grabbing elements
let guestForm = document.querySelector('#guest-form');


let formRow = document.querySelector('#form-row');


let guestList = document.querySelector('#guest-list');


//stop the page from refreshing by using prevent default
guestForm.addEventListener("submit", function(event) {
    event.preventDefault();

    //grabbing input values

    let fName = document.querySelector('#guest-fname-input').value;
    let lName = document.querySelector('#guest-lname-input').value;
    let category = document.querySelector('#guest-category').value;


    //  creating  a new div element for the guest card

let guestCard = document.createElement('div');
guestCard.classList.add('guest-card');

//creating name paragraph
let nameP = document.createElement('p');
nameP.textContent = `${fName} ${lName}`;
guestCard.appendChild(nameP);

//creating the category
let categoryP = document.createElement('p');
categoryP.textContent = category;
guestCard.appendChild(categoryP);

//creating a delete button
let deleteButton = document.createElement('button');
deleteButton.textContent = 'DEL';
deleteButton.addEventListener('click', () =>{
    guestCard.remove();
} );
guestCard.appendChild(deleteButton);

//adding  guestcard to the page
guestList.appendChild(guestCard);

//creating rsvp toggle
let rsvpButton = document.createElement('button');
rsvpButton.textContent = 'RSVP: Not Attending';
rsvpButton.classList.add('rsvp-btn', 'rsvp-declined');

rsvpButton.addEventListener('click', function () {
    if (rsvpButton.classList.contains ('rsvp-declined')) {
        rsvpButton.classList.remove('rsvp-declined');
        rsvpButton.classList.add('rsvp-attending');
        rsvpButton.textContent = 'RSVP: Attending';
        
    }
    else {
        rsvpButton.classList.remove('rsvp-attending');
        rsvpButton.classList.add('rsvp-declined');
        rsvpButton.textContent = 'RSVP: Not Attending';
    }
});
guestCard.appendChild(rsvpButton);

// reseting the form
guestForm.reset();

});

