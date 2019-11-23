angular.module("catalogoCursos", []);
angular.module("catalogoCursos").controller("catalogoCursosCtrl", function ($scope, $http) {
    var getCursos = function () {
        $http.get('http://localhost:3001/api/Cursos').then(function (response) {
            if (response.status == 200) {
                $scope.data = response.data;
            }
        });
    };
    getCursos();
    $scope.nextPage = function (atualPage,  totalPages) {
        var page = parseInt(atualPage);
        var pages = parseInt(totalPages);
        if (page < pages) {
            $http.get('http://localhost:3001/api/Cursos?page=' + (page + 1)).then(function (response) {
                if (response.status == 200) {
                    $scope.data = response.data;
                }
            });
        }
    }
    $scope.previousPage = function (atualPage) {
        var page = parseInt(atualPage);
        if (page > 1) {
            $http.get('http://localhost:3001/api/Cursos?page=' + (page - 1)).then(function (response) {
                if (response.status == 200) {
                    $scope.data = response.data;
                }
            });
        }
    }
});