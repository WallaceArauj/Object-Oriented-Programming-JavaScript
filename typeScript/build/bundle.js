var airplane = /** @class */ (function () {
    function airplane(n, model, flitSeries, Component) {
        this.n = n;
        this.model = model;
        this.flitSeries = flitSeries;
        this.Component = Component;
    }
    airplane.prototype.logDetails = function () {
        console.log("The Airplane model is: ".concat(this.n, " - ").concat(this.model, " \n\n        Number Jet is: ").concat(this.flitSeries, " \n\n        Motors: F700 - ").concat(this.Component));
    };
    return airplane;
}());
var i = new airplane('Boeng', 737, 77402304088, 'General Motors');
