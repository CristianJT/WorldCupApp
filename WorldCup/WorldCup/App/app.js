(function () {

    var app = angular.module('WorldCup', ['ngRoute', 'ngResource']);

    function order(a, b) {                                          //Permite ordenar el array por el atributo seed
        if (a.seed < b.seed)
            return -1;
        if (a.seed > b.seed)
            return 1;
    }

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/teams', {
                templateUrl: '/App/worldCupPage.html',
                controller: 'WorldCupController'
            }).
            when('/teams/:id', {
                templateUrl: '/App/teamsPage.html',
                controller: 'TeamController'
            }).
            when('/teams/:id/players', {
                templateUrl: '/App/playersPage.html',
                controller: 'PlayerController'
            }).
            when('/teams/:id/groups', {
                templateUrl: '/App/groupsPage.html',
                controller: 'GroupController'
            }).
            when('/teams/:id/details', {
                templateUrl: '/App/detailsPage.html',
                controller: 'DetailController'
            }).
            when('/teams/:id/players/newplayer', {
                templateUrl: '/App/newPlayerPage.html',
                controller: 'CreatePlayerController'
            }).
            otherwise({
                redirectTo: '/teams'
            });
    }]);

    app.factory('appData', function ($resource) {

        return $resource('/api/countries/:id');
       
    });

    app.controller('WorldCupController', ['$scope', 'appData', function ($scope, appData) {

        $scope.countries = appData.query(function () {                          //obtener todas las selecciones, ordenados por seed
            $scope.countries.sort(order);
        });                  

        $scope.getGroups = function () {                                        //obtener los grupos de las selecciones
            var grupos = [];
            angular.forEach($scope.countries, function (item) {
                if (grupos.indexOf(item.group) == -1) {
                    grupos.push(item.group);
                }
            });
            return grupos.sort();
        }                                     

    }]);

    app.controller('TeamController', ['$scope', '$routeParams', 'appData', function ($scope, $routeParams, appData) {

        $scope.team = appData.get({id: $routeParams.id});                     //obtener una selección por id

    }]);

    //app.controller('PlayerController', ['$scope', '$routeParams', 'appData', function ($scope, $routeParams, appData) {

    //    $scope.team = appData.countryById($routeParams.id);                    //obtener una selección de id

    //    $scope.players = appData.countryById($routeParams.id).players;         //obtener jugadores de una selección de id

    //    $scope.order = 'num';                                                  //método de ordenamiento, por número por defecto
    //    $scope.reverse = false;                                                //permite intercambio en el ordenamiento

    //    $scope.deletePlayer = function (aNumber) {                             //eliminar un jugador de una selección de id (solo en el cliente)
    //        for (i = 0; i < $scope.players.length; i++) {
    //            if ($scope.players[i].num == aNumber) {
    //                $scope.players.splice(i, 1);
    //            }
    //        }
    //    };

    //}]);

    //app.controller('GroupController', ['$scope', '$routeParams', 'appData', function ($scope, $routeParams, appData) {

    //    $scope.team = appData.countryById($routeParams.id);                     //obtener una selección de id
    //    $scope.countries = appData.getCountries().sort(order);                              //obtener todas las selecciones

    //    $scope.matches = appData.getMatches();                                  //obtener todos los partidos
    //    $scope.getMatches = function (aTeam) {                                  //obtener todos los partidos de una selección de id
    //        return appData.getMatchesByTeam(aTeam);
    //    };

    //    reset = function (team) {
    //        team.pj = 0;
    //        team.pg = 0;
    //        team.pe = 0;
    //        team.pp = 0;
    //        team.gf = 0;
    //        team.gc = 0;
    //    };                                             //permite resetear la tabla de posiciones del grupo

    //    valid = function (result) {

    //        if (result >= 0 || result == null) 
    //            return result;
    //        else {
    //            alert("Número inválido");
    //            }
    //    };

    //    $scope.updateTable = function (aMatch) {                                //actualiza la tabla de posiciones, según el resultado
    //        game = appData.getMatchById(aMatch);
    //        t1 = appData.countryByName(game.team1);
    //        t2 = appData.countryByName(game.team2);
   
    //        if (valid(game.result1) && valid(game.result2)) {
    //            if (game.result1 > game.result2) {
    //                t1.pg = t1.pg + 1;
    //                t2.pp = t2.pp + 1;
    //            }
    //            else if (game.result1 < game.result2) {
    //                t2.pg = t2.pg + 1;
    //                t1.pp = t1.pp + 1;
    //            } else {
    //                t1.pe = t1.pe + 1;
    //                t2.pe = t2.pe + 1;
    //            }

    //            t1.gf = t1.gf + game.result1;
    //            t1.gc = t1.gc + game.result2;

    //            t2.gf = t2.gf + game.result2;
    //            t2.gc = t2.gc + game.result1;

    //            t1.pj = t1.pj + 1;
    //            t2.pj = t2.pj + 1;

    //        }
    //        else {
    //            reset(t1);
    //            reset(t2);
    //        }
    //    }

    //    $scope.showMatches = false;                                             //mostrar u ocultar los partidos de una selección
     
    //}]);

    app.controller('DetailController', ['$scope', '$routeParams', 'appData', function ($scope, $routeParams, appData) {

        $scope.team = appData.get({id: $routeParams.id});                     //obtener una selección de id

    }]);

    //app.controller('CreatePlayerController', ['$scope', '$location', '$routeParams', 'appData', function ($scope, $location, $routeParams, appData) {
                                     
    //    $scope.team = appData.countryById($routeParams.id);                     //obtener una selección de id

    //    $scope.getNums = function () {                                          //números de jugadores del 1 al 23, sacándo los ya    
    //        var numeros = [];                                                   //utilizados por los de la misma selección            
    //        for (i = 1; i <= 23; i++) {
    //            numeros.push(i);                                                    
    //        }
    //        angular.forEach($scope.team.players, function (player) {                     
    //            var index;
    //            index = numeros.indexOf(player.num);
    //            numeros.splice(index, 1);
    //        });
    //        return numeros;
    //    }

    //    $scope.addPlayer = function (aPlayer) {                                 //agregar un nuevo jugador a la selección de id      
    //        $scope.team.players.push(aPlayer);
    //        $scope.backToPlayers();
    //    };

    //    $scope.backToPlayers = function () {                                    //volver a la página jugadores
    //        $location.path('/teams/' + $routeParams.id + '/players');
    //    };

    //    $scope.reset = function () {                                            //resetear el formulario de carga de jugadores                                           
    //        $scope.player = {};
    //    };
    //}]);

    app.directive('panelPage', [function () {
        return {
            restrict: 'E',
            templateUrl: 'appPanelPage.html',
            controller: function ($scope, $routeParams) {
                $scope.tab = 1;                                             //por defecto muestra la página de detalles
                $scope.selectedTab = function (newTab) {                    //permite cambiar de página
                    $scope.tab = newTab;
                };
                $scope.id = $routeParams.id;                                //sin el id, no se podría navegar entre páginas
            },
        };
    }]);

    app.directive('navigationPage', [function () {
        return {
            restrict: 'E',
            templateUrl: 'appNavPage.html',
            controller: function ($scope, $routeParams, $location) {
                $scope.backToTeams = function () {                                          //volver a la página con los grupos
                    $location.path('/teams');
                };
                $scope.linkToCreatePlayer = function () {                                   //permite ir a la página de crear jugador
                    $location.path('/teams/' + $routeParams.id + '/players/newplayer');
                };
            },
        };
    }]);

    app.directive('teamName', [function () {
        return {
            restrict: 'E',
            templateUrl: 'teamNamePage.html',
        }
    }]);

})();