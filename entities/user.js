let users = {
};

function User(username, password) {
    this.username = username;
    this.email = username;
    this.password = password;
}

User.register = function (socket,
    username, password) {
    if (users[username]) {
        return false;
    }
    users[username] = {
        socket: socket,
        user: new User(username,
            password)
    };
    return true;
};

User.login = function (socket,
    username, password) {
    console.log("user manager login");
    if (!users[username]) {
        return false;
    }
    let user = users[username].user;
    return user.password === password;
};

/**
 * 判断当前地址是不是有用户拥有
 * @param {*} address 
 */
User.isAddress = function(address) {
    for(var k in users) {
        if (users[k].user.email === address) {
            return true;
        }
    }
    return false;
}

exports.User = User;
// module.exports.User = User;