var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(id, firstName, lastName) {
        this.retry_login = 0;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.save = false;
        this.token = "";
    }
    User.prototype.login = function (username, password) {
        this.retry_login += 1;
        if (username === 'Arie' && password === 'password') {
            return 'Welcomee Arie';
        }
        if (this.retry_login >= User.MAX_FAILED_LOGIN) {
            return 'Password max attemp';
        }
        return false;
    };
    User.prototype.register = function () { };
    User.MAX_FAILED_LOGIN = 2;
    return User;
}());
var myUser = new User(1, 'Arie', 'Akbarull Ridho');
console.log(myUser.login('das', 'das'));
console.log(myUser.login('das', 'das'));
console.log(myUser.login('das', 'das'));
var EnhancmentUser = /** @class */ (function (_super) {
    __extends(EnhancmentUser, _super);
    function EnhancmentUser(location, id, firstName, lastName) {
        var _this = _super.call(this, id, firstName, lastName) || this;
        _this.location = location;
        _this.save;
        return _this;
    }
    return EnhancmentUser;
}(User));
var myNewUser = new EnhancmentUser("Jember", 69, 'Arie', 'Bilek');
