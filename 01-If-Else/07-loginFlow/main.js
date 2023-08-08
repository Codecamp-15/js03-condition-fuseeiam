let user = prompt('Username?');
let pass = prompt('Password?');

if ((user === null || user.trim() === '') && (pass === null || pass.trim() === '')) {
    alert('username or password is required');
}
else if ((user == 'admin' && pass == '1234') || (user == 'john' && pass == 'qwerty')) {
    alert('Hello' + " " + user);
}
else {
    alert('invalid username or password');
}