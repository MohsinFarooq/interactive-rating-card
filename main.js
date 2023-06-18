const ratingNumber = document.querySelectorAll('.rating-number');
const submitButton = document.querySelector('.submit-button');
const thankYouState = document.querySelector('.card-back-container');
const addRating = document.querySelector('#rating-given');

//  Variable To keep track of the active button
let activeButton = null;


// What happens when the submit button is clicked
submitButton.addEventListener('click', () => {
    if(activeButton) {
    buttonText = activeButton.textContent;
    thankYouState.style.display = "flex";
    addRating.textContent = buttonText;
    }
})


// What happens when the rating button is clicked
ratingNumber.forEach((button) => {
    button.addEventListener('click', () => {
        if(activeButton) {
        activeButton.classList.remove("active");
        }

        button.classList.add("active");
        activeButton = button;
        
    })
})