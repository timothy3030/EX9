var app1 = angular.module('form', []); app1.controller('validateCtrl', function($scope) {
    $scope.reg = 'URK20CS4000';
    
    $scope.email = 'jane.doe@gmail.com';
    
    $scope.name = 'Jane Doe';
    
    });
    
    
    
    var app2 = angular.module("myapp",["ngRoute"]); app2.controller("myctrl",($scope)=>{});
    
    
    app2.config(function($routeProvider){
    
    $routeProvider.when('/URK20ME3072',{ templateUrl:'./student1.html'
}).when('/URK20CS1149',{

    templateUrl:'./student2.html'
    
    }).when('/URK20EC4052',{
    
    templateUrl:'./student3.html'
    
    }).otherwise({redirectTo:'/'})
    
    });
    
