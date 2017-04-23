angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
	$scope.tasks = Tasks.all();
$scope.getstyle = function(task){
                if(task.sb == true)
                        return 'line-through';
                else
                        return 'none';
        };
        $scope.complete = function(task, index){
                $scope.tasks.splice(index, 1);
                task.sb = true;
                var index;
                $scope.tasks.splice(index, 0, task);
        };
});
