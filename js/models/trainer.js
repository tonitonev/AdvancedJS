var app = app || {};

(function (scope) {
    function Trainer (name, workHours) {
        scope._Emploeyee.apply(this, arguments);
        this.courses  = [];
        this.feedbacks = [];
    }
    Trainer.extend(scope._Emploeyee);

    Trainer.prototype.addFeedback = function addFeedback(feedback) {
        if(typeof feedback === 'string'){
            this.feedbacks.push(feedback);
        }
        else {
            throw new Error('trainer feedback must be a string!')
        }
    }

    Trainer.prototype.addCourse = function addCourse (courseToAdd) {
        if(courseToAdd.__proto__ === scope._Course.prototype){
            this.courses.push(courseToAdd);
        }
        else {
            throw new Error('trying to add not a course instance to trainer courses!')
        }
    }

    scope._Trainer = Trainer;

    scope.trainer = function (name, workHours) {
        return new Trainer(name, workHours);
    }
}(app));