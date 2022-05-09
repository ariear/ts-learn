var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function jml1(a, b) {
    return a + b;
}
var jml2 = function (a, b) {
    return a + b;
};
var jml3 = function (a, b) { return a + b; };
// funcntion with optional parameter
var jml4 = function (a, b, c) {
    return a + b;
};
var request = function (url, cb) {
    cb(url);
};
var callback = function (str) { return console.log(str); };
request('https://arie-akbarull.netlify.app', callback);
var submitContact = function (firstName, lastName, language, gender) {
    if (language === void 0) { language = 'english'; }
    return __assign({ firstName: firstName, lastName: lastName, language: language }, (gender && { gender: gender }));
};
// Rest Parameter
var fruitsCollections = function (item) {
    var restItem = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restItem[_i - 1] = arguments[_i];
    }
    return item + ' ,' + restItem.join('+');
};
console.log(fruitsCollections('Ini Argument Item', 'ini argumen restItem1', 'ini argumen restItem2'));
