function User() {

}

User.prototype.login = function () {
    console.log('inside login');
}
User.prototype.register = function () {
    console.log('inside register');
}

User.prototype.update = function () {
    console.log('inside update');
}

exports.User = User;