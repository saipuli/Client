'use strict';
angular.module('todoApp')
.factory('todoListSvc', ['$http', function ($http) {
    return {
        getItems : function(){
            //return $http.get('api/v1/ActivityLog/search?orderId=24567037&lineNumber=1');
            return $http({
              url: 'https://trafficactivitylog.azurewebsites.net/api/v1/ActivityLog/search',
              method: "GET",
              params: {orderId: 24567037, lineNumber: 1}
           });
        },
        getItem : function(id){
            return $http.get('/api/TodoList/' + id);
        },
        postItem : function(item){
            return $http.post('/api/TodoList/',item);
        },
        putItem : function(item){
            return $http.put('/api/TodoList/', item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: '/api/TodoList/' + id
            });
        }
    };
}]);
