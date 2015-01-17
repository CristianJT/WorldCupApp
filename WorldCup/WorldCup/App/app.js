(function () {

    var app = angular.module('WorldCup', ['ngRoute']);

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

    app.factory('appData', function () {

        var matches = [
            { matchNum: 1, group: 'f', team1: 'Argentina', team2: 'Bosnia-Herzegovina', result1: null, result2: null },
            { matchNum: 2, group: 'f', team1: 'Iran', team2: 'Nigeria', result1: null, result2: null },
            { matchNum: 3, group: 'f', team1: 'Argentina', team2: 'Iran', result1: null, result2: null },
            { matchNum: 4, group: 'f', team1: 'Nigeria', team2: 'Bosnia-Herzegovina', result1: null, result2: null },
            { matchNum: 5, group: 'b', team1: 'España', team2: 'Holanda', result1: null, result2: null }
        ];

        var countries = [
                     {
                         id: 1, name: 'Argentina', seed: 1, group: 'f', cups: 2, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, 
                         players: [{ num: 10, name: 'Lionel Messi', position: 'DEL' },
                                   { num: 9, name: 'Gonzalo Higuain', position: 'DEL' },
                                   { num: 4, name: 'Pablo Zabaleta', position: 'DEF' }]
                     },
                     {
                         id: 2, name: 'Alemania', seed: 1, group: 'g', cups: 4,
                         players: [{ num: 13, name: 'Thomas Muller', position: 'DEL' },
                                   { num: 8, name: 'Mesut Ozil', position: 'VOL' }]
                     },
                     { id: 3, name: 'Argelia', seed: 2, group: 'h', cups: 0, players: [] },
                     { id: 4, name: 'Brasil', seed: 1, group: 'a', cups: 5, players: [] },
                     { id: 5, name: 'Holanda', seed: 2, group: 'b', cups: 0, players: [] },
                     { id: 6, name: 'España', seed: 1, group: 'b', cups: 1, players: [] },
                     { id: 7, name: 'Inglaterra', seed: 3, group: 'd', cups: 1, players: [] },
                     { id: 8, name: 'Uruguay', seed: 1, group: 'd', cups: 2, players: [] },
                     { id: 9, name: 'Italia', seed: 4, group: 'd', cups: 4, players: [] },
                     { id: 10, name: 'Croacia', seed: 2, group: 'a', cups: 0, players: [] },
                     { id: 11, name: 'Belgica', seed: 1, group: 'h', cups: 0, players: [] },
                     { id: 12, name: 'Rusia', seed: 3, group: 'h', cups: 0, players: [] },
                     { id: 13, name: 'Camerun', seed: 4, group: 'a', cups: 0, players: [] },
                     { id: 14, name: 'Mexico', seed: 3, group: 'a', cups: 0, players: [] },
                     { id: 15, name: 'Chile', seed: 3, group: 'b', cups: 0, players: [] },
                     { id: 16, name: 'Australia', seed: 4, group: 'b', cups: 0, players: [] },
                     { id: 17, name: 'Colombia', seed: 1, group: 'c', cups: 0, players: [] },
                     { id: 18, name: 'Costa de Marfil', seed: 3, group: 'c', cups: 0, players: [] },
                     { id: 19, name: 'Japon', seed: 4, group: 'c', cups: 0, players: [] },
                     { id: 20, name: 'Grecia', seed: 2, group: 'c', cups: 0, players: [] },
                     { id: 21, name: 'Costa Rica', seed: 2, group: 'd', cups: 0, players: [] },
                     { id: 22, name: 'Francia', seed: 3, group: 'e', cups: 1, players: [] },
                     { id: 23, name: 'Suiza', seed: 1, group: 'e', cups: 0, players: [] },
                     { id: 24, name: 'Ecuador', seed: 2, group: 'e', cups: 0, players: [] },
                     { id: 25, name: 'Nigeria', seed: 4, group: 'f', cups: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, players: [] },
                     { id: 26, name: 'Honduras', seed: 4, group: 'e', cups: 0, players: [] },
                     { id: 27, name: 'Bosnia-Herzegovina', seed: 2, group: 'f', cups: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, players: [] },
                     { id: 28, name: 'Iran', seed: 3, group: 'f', cups: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, players: [] },
                     { id: 29, name: 'Portugal', seed: 2, group: 'g', cups: 0, players: [] },
                     { id: 30, name: 'USA', seed: 4, group: 'g', cups: 0, players: [] },
                     { id: 31, name: 'Ghana', seed: 3, group: 'g', cups: 0, players: [] },
                     { id: 32, name: 'Corea del Sur', seed: 4, group: 'h', cups: 0, players: [] }
        ];
        return {
            getCountries: function () {
                return countries;             
            },
            countryById: function (teamId) {
                for (i = 0; i < countries.length; i++) {
                    if (countries[i].id == teamId) {
                        return countries[i];
                    }
                }
            },
            countryByName: function (teamName) {
                for (i = 0; i < countries.length; i++) {
                    if (countries[i].name == teamName) {
                        return countries[i];
                    }
                }
            },
            getMatches: function () {
                return matches;
            },
            getMatchesByTeam: function (aTeam) {
                var matchesOfaTeam = [];
                for (i = 0; i < matches.length; i++) {
                    if (matches[i].team1 == aTeam || matches[i].team2 == aTeam) {
                        matchesOfaTeam.push(matches[i]);
                    }
                }
                return matchesOfaTeam;
            },
            getMatchById: function (matchId) {
                for (i = 0; i < matches.length; i++) {
                    if (matches[i].matchNum == matchId) {
                        return matches[i];
                    }
                }
            }
        };
        
    });

    app.controller('WorldCupController', ['$scope', 'appData', function ($scope, appData) {

        $scope.countries = appData.getCountries().sort(order);                  //obtener todas las selecciones, ordenados por seed

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

        $scope.team = appData.countryById($routeParams.id);                     //obtener una selección por id

    }]);

    app.controller('PlayerController', ['$scope', '$routeParams', 'appData', function ($scope, $routeParams, appData) {

        $scope.players = appData.countryById($routeParams.id).players;         //obtener jugadores de una selección de id

        $scope.order = 'num';                                                  //método de ordenamiento, por número por defecto
        $scope.reverse = false;                                                //permite intercambio en el ordenamiento

        $scope.deletePlayer = function (aNumber) {                             //eliminar un jugador de una selección de id (solo en el cliente)
            for (i = 0; i < $scope.players.length; i++) {
                if ($scope.players[i].num == aNumber) {
                    $scope.players.splice(i, 1);
                }
            }
        };

    }]);

    app.controller('GroupController', ['$scope', '$routeParams', 'appData', function ($scope, $routeParams, appData) {

        $scope.team = appData.countryById($routeParams.id);                     //obtener una selección de id
        $scope.countries = appData.getCountries();                              //obtener todas las selecciones

        $scope.matches = appData.getMatches();                                  //obtener todos los partidos
        $scope.getMatches = function (aTeam) {                                  //obtener todos los partidos de una selección de id
            return appData.getMatchesByTeam(aTeam);
        };

        reset = function (team) {
            team.pj = 0;
            team.pg = 0;
            team.pe = 0;
            team.pp = 0;
            team.gf = 0;
            team.gc = 0;
        };                                             //permite resetear la tabla de posiciones del grupo

        $scope.updateTable = function (aMatch) {                                //actualiza la tabla de posiciones, según el resultado
            game = appData.getMatchById(aMatch);
            t1 = appData.countryByName(game.team1);
            t2 = appData.countryByName(game.team2);
            
            reset(t1);
            reset(t2);

            if (game.result1 > game.result2) {
                    t1.pg = t1.pg + 1;
                    t2.pp = t2.pp + 1;
                }
                else if (game.result1 < game.result2) {
                    t2.pg = t2.pg + 1;
                    t1.pp = t1.pp + 1;
                } else {
                    t1.pe = t1.pe + 1;
                    t2.pe = t2.pe + 1;
                }

            t1.gf = t1.gf + game.result1;
            t1.gc = t1.gc + game.result2;

            t2.gf = t2.gf + game.result2;
            t2.gc = t2.gc + game.result1;
                
            t1.pj = t1.pj + 1;
            t2.pj = t2.pj + 1;

        }

        $scope.showMatches = false;                                             //mostrar u ocultar los partidos de una selección
     
    }]);

    app.controller('DetailController', ['$scope', '$routeParams', 'appData', function ($scope, $routeParams, appData) {

        $scope.team = appData.countryById($routeParams.id);                     //obtener una selección de id

    }]);

    app.controller('CreatePlayerController', ['$scope', '$location', '$routeParams', 'appData', function ($scope, $location, $routeParams, appData) {
                                     
        $scope.team = appData.countryById($routeParams.id);                     //obtener una selección de id

        $scope.getNums = function () {                                          //números de jugadores del 1 al 23, sacándo los ya    
            var numeros = [];                                                   //utilizados por los de la misma selección            
            for (i = 1; i <= 23; i++) {
                numeros.push(i);                                                    
            }
            angular.forEach($scope.team.players, function (player) {                     
                var index;
                index = numeros.indexOf(player.num);
                numeros.splice(index, 1);
            });
            return numeros;
        }

        $scope.addPlayer = function (aPlayer) {                                 //agregar un nuevo jugador a la selección de id      
            $scope.team.players.push(aPlayer);
            $scope.backToPlayers();
        };

        $scope.backToPlayers = function () {                                    //volver a la página jugadores
            $location.path('/teams/' + $routeParams.id + '/players');
        };

        $scope.reset = function () {                                            //resetear el formulario de carga de jugadores                                           
            $scope.player = {};
        };
    }]);

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

})();