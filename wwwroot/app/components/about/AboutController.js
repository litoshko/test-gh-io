(function() {
    'use strict';

    angular.module("app")
        .controller('AboutController', AboutController);

    function AboutController () {
        var vm = this;

        vm.message = "About Andrii";
    }
})();