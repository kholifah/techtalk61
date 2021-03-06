(function(){
    'use strict';

    angular
        .module('mdTechtalk',['ngMaterial','ngFx'])
        .config(mdTechtalkConfig);

    mdTechtalkConfig.$inject = ['$mdThemingProvider'];
    function mdTechtalkConfig($mdThemingProvider){
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('light-green');
    }
})();
