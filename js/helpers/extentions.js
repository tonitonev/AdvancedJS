Function.prototype.extend = function (parent) {

    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

var regExLetterAndWhitespace = /^[a-zA-Z\s]*$/; //matches letter and whitespace only
var regExDigits = /^\d+$/; //matches only digits
//var select = document.getElementById('halls');