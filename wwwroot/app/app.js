(function() {
'use strict';

	angular.module("app", [
        "ngRoute"
		// "ui.router",
		// "ngResource",
		// "constants",

		// // features
		// "tasks",
		// "users",
		// "userTasks"
	])
    .config(routeConfig);

    function routeConfig ($routeProvider) {
        
        // Route for the home page
        $routeProvider.when("/", {
            templateUrl : "app/components/home/home.html",
            controller : "HomeController",
            controllerAs: "vm"
        })

        // Route for the about page
        $routeProvider.when("/about", {
            templateUrl : "app/components/about/about.html",
            controller : "AboutController",
            controllerAs: "vm"
        })

        // Route for the contact page
        $routeProvider.when("/contact", {
            templateUrl : "app/components/contact/contact.html",
            controller : "ContactController",
            controllerAs: "vm"
        })

        // Default redirect
        $routeProvider.otherwise({ redirectTo: "/" });
    }

})();



















