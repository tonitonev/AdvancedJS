var app = app || {};

(function (scope) {
    function Employee(name, workHours) {
        if (!regExLetterAndWhitespace.test(name)) {
            throw new Error('Employee name must be only letters and whitespaces!')
        }
        if (!regExDigits.test(workHours)) {
            throw new Error('Employee work hours must be only digits!')
        }
        this._name = name;
        this.getName = function getName() {
            return this._name;
        };

        this._workHours = workHours;

        this.getWorkhours = function getWorkhours() {
            return this._workHours;
        };
    }

    scope._Emploeyee = Employee;

    scope.employee = function (name, workHours) {
        return new Employee(name, workHours);
    }

}(app));