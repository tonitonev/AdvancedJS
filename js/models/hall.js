var app = app || {};

(function (scope) {
    function Hall(name, capacity) {
        if (!regExLetterAndWhitespace.test(name)) {
            throw new Error('hall name must be only letters and whitespace!')
        }
        if (!regExDigits.test(capacity)) {
            throw new Error('hall capacity must be only digits!')
        }
        this._name = name;
        this.getName = function getName() {
            return this._name;
        };

        this._capacity = capacity;
        this.getCapacity = function getGetCapacity() {
            return this._capacity;
        };
        this.parties = [];
        this.lectures = [];
    }



    Hall.prototype.addEvent = function addEvent(eventToAdd) {
        if (eventToAdd.__proto__ === scope._Party.prototype) {
            this.parties.push(eventToAdd);
        }
        else if (eventToAdd.__proto__ === scope._Lecture.prototype) {
            this.lectures.push(eventToAdd);
        }
        else {
            throw new Error('event to add must be only party or lecture!')
        }
    }
    scope.hall = function (name, capacity) {
        return new Hall(name, capacity);
    }
}(app));

