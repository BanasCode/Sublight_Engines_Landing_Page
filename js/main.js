const toggleButton = document.querySelector('.toggle-button')
const topNav = document.querySelector('.topnav')
const nameform = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const language = document.getElementById('language')

var nameformat = /^[a-z ,.'-]+$/i;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneformat = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;


toggleButton.addEventListener('click', function() {
    topNav.classList.toggle('active')
})

form.addEventListener('submit', (e) => {
    let messages = []
    if(nameform.value == '' || nameform.value == null){
        messages.push('Name is required')
    }
    else if(nameform.value.length <= 1){
        messages.push('Not a valid Name')
    }
    else if(nameform.value.match(nameformat)){
    }
    else{
        messages.push('Not a valid Name')
    }


    if(email.value == '' || email.value == null){
        messages.push('Email is required')
    }
    else if(email.value.match(mailformat)){
    }
    else{
        messages.push('Not a valid Email')
    }


    if(phone.value == '' || phone.value == null){
        messages.push('Phone Number is required')
    }
    else if(phone.value.match(phoneformat)){
    }
    else{
        messages.push('Not a valid Phone Number')
    }

    if(language.value == '' || language.value == null || language.value === "Select"){
        messages.push('Language is required')
    }


    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
