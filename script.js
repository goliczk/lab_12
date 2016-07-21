// JavaScript Document

var app = angular.module( 'arrModule', []);

app.controller( 'arrController', function($scope){
	$scope.thingsToDo = ['Study', 'Laundry', 'Dishes'];
	
	$scope.addingItems = function() {
		$scope.thingsToDo.push($scope.todo);
		$scope.todo = "";
	}
});