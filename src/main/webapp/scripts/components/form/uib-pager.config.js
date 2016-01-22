'use strict';

angular.module('experementApp')
    .config(function (uibPagerConfig) {
        uibPagerConfig.itemsPerPage = 20;
        uibPagerConfig.previousText = '«';
        uibPagerConfig.nextText = '»';
    });
