var app = app || {};

(function (scope) {
    function Lecture(options) {

        scope._Event.apply(this, arguments);

        if(!(options.trainer.__proto__ === scope._Trainer.prototype)) {
            throw new Error("trainer must be instance of Trainer!");
        }
        if(!(options.course.__proto__ === scope._Course.prototype)) {
            throw new Error("course must be instance of Course!");
        }
        this._trainer = options.trainer;
        this.getTrainer = function getTrainer() {
            return this._trainer;
        };
        this._course = options.course;
        this.getCourse = function getCourse() {
            return this._course;
        };
    }
    Lecture.extend(scope._Event);

    scope._Lecture = Lecture;

    scope.lecture = function (options) {
        return new Lecture(options);
    }
}(app));