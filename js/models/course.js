var app = app || {};

(function (scope) {
    function Course(name, numberOfLectures) {
        if (!regExLetterAndWhitespace.test(name)) {
            throw new Error('Course name must be only from letters and whitespaces')
        }
        if (!regExDigits.test(numberOfLectures)) {
            throw new Error('Course number of lectures must be only digits')
        }

        this._name = name;
        this.getName = function getName() {
            return this._name;
        };

        this._numberOfLectures = numberOfLectures;
        this.getNumberOfLectures= function getNumberOfLectures() {
            return this._numberOfLectures;
        };
    }
    scope._Course = Course;
    scope.course = function (name, numberOfLectures) {
        return new Course(name, numberOfLectures);
    }
}(app))