'use strict';

angular.module('experementApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


