const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const first = form['firstname'].value;
    const last = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (first == '') {
        addErrorTo('firstname', 'First Name cannot be empty');
    } else{
        removeErrorFrom('firstname')
    }

    if (last == '') {
        addErrorTo('lastname', 'Last Name cannot be empty');
    } else{
        removeErrorFrom('lastname')
    }

    if (email == '') {
        addErrorTo('email', 'Email cannot be empty`');
    } else{
        removeErrorFrom('email')
    }

    if (password == '') {
        addErrorTo('password', 'Password cannot be empty');
    } else{
        removeErrorFrom('password')
    }

});

function addErrorTo(field, message ) {
    const small = form[field].parentNode.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';
}

function removeErrorFrom(field) {
    const small = form[field].parentNode.querySelector('small');
    small.style.opacity = '0'; 
}


