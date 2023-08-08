let user = prompt('Username:');

if (user == null || user.trim() == '' || user != 'codecamp') {
    user = 'guest'
    alert('Welcome' + " " + user)
}

else if (user == 'codecamp') {
    let pass = prompt('Password:');
    if (pass != '123456') {
        alert('Wrong password');
    }
    else {
        user = 'codecamp';
        alert('Welcome' + " " + user)
    }
}