'use strict';

(function (angular) {

    var Ctrl = function (initData) {
        var ctrl = this;

        ctrl.label = initData.label;
        ctrl.behavior = initData.behavior;
    };

    Ctrl.resolve = {
        /*@ngInject*/
        initData: function ($q) {
            // fetch some data from the server
            return $q(function(resolve) {
                resolve({
                    label: 'Temprorarily out of stock',
                    behavior: 'together'
                });
            });
        }
    };

    // INIT MODULE
    var module = angular.module('app.OutOfStock', []);

    // INIT CONTROLLER
    module.controller('OutOfStock', Ctrl);

    // INIT ROUTE
    module.config(function ($stateProvider) {
        $stateProvider.state('out-of-stock', {
            url: '/configurations/out-of-stock',
            templateUrl: 'out-of-stock/out-of-stock.html',
            controller: Ctrl,
            resolve: Ctrl.resolve,
            controllerAs: 'ctrl'
        });
    });

})(angular);
