var app = app || {};

(function (scope) {
    function Event(options) {
        if (this.constructor === Event) {
            throw new Error("Can't instantiate abstract class!");
        }
        if (!regExLetterAndWhitespace.test(options.title)) {
            throw new Error('Event title must be only letters and a whitespaces');
        }
        if (!regExLetterAndWhitespace.test(options.type)) {
            throw new Error('Event type must be only letters and a whitespaces');
        }
        if (!regExDigits.test(options.duration)) {
            throw new Error('Event duration must be only digits');
        }
        if(!options.date instanceof Date) {
            throw new Error('Event date must be instance of Date!');
        }
        this._title = options.title;
        this.getTitle = function getTitle() {
            return this._title;
        };
        this._type = options.type;
        this.getType = function getType() {
            return this._type;
        };
        this._duration = options.duration;
        this.getDuration = function getDuration() {
            return this._duration;
        };
        this._date = options.date;
        this.getDate = function getDate() {
            return this._date;
        };
    }

    scope._Event = Event;

}(app))