var app = app || {};

(function (scope) {
    function Party (options) {
        scope._Event.apply(this, arguments);
        if(options.isCatered) {
            //true, --> OK
        }
        else if (!options.isCatered){
            //false --> OK
        }
        else {
            throw new Error('Party isCatered must be true or false only');
        }

        if(options.isBirthday) {
            //true, --> OK
        }
        else if (!options.isBirthday){
            //false --> OK
        }
        else {
            throw new Error('Party isBirthday must be true or false only');
        }
        if(!(options.organiser.__proto__ === scope._Emploeyee.prototype)) {
            throw new Error('Party organiser must be only Employee');
        }
        this._isCatered = options.isCatered;
        this._isBirthday = options.isBirthday;
        this._organiser = options.organiser;

        this.checkIsBirthday= function checkIsBirthday() {
            return this._isBirthday;
        };
        this.checkIsCatered= function checkIsCatered() {
            return this._isCatered;
        };
        this.getOrganiser= function getOrganiser() {
            return this._organiser;
        };
    }
    Party.extend(scope._Event);

    scope._Party = Party;

    scope.party = function (options) {
        return new Party(options);
    }
}(app));