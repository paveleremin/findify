'use strict';

angular.module('app', [
    // vendors first
    'ui.router',

    // configuration modules
    'app.env',
    'app.configs',
    'app.resources',

    // application modules
    'app.OutOfStock'
])
;
