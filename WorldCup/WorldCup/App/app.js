﻿(function () {

    var app = angular.module('WorldCup', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/teams', {
                templateUrl: '/App/teamsPage.html',
                controller: 'WorldCupController'
            }).
            when('/teams/:teamId', {
                templateUrl: '/App/app-panel.html',
                controller: 'TeamController'
            }).
            when('/teams/:teamId/newplayer', {
                templateUrl: '/App/new-player.html',
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

    function order(a, b) {                                          //Permite ordenar el array por el atributo seed
        if (a.seed < b.seed)
            return -1;
        if (a.seed > b.seed)
            return 1;
    }
    
    app.controller('WorldCupController', ['$scope', 'appData', function ($scope, appData) {
       
        teams = appData.getCountries();                             //Obtengo todos los paises

        $scope.countries = teams.sort(order);                       //countries = array de paises ordenado por seed

        $scope.getGroups = function () {                            //permite obtener todos los grupos
            var grupos = [];
            angular.forEach($scope.countries, function (item) {
                if (grupos.indexOf(item.group) == -1) {
                    grupos.push(item.group);
                }
            });
            return grupos.sort();
        }

    }]);

    app.controller('TeamController', ['$scope', '$routeParams', '$location', 'appData', function ($scope, $routeParams, $location, appData) {

        $scope.team = appData.countryById($routeParams.teamId);

        $scope.tab = 1;
        $scope.selectedTab = function (newTab) {
            $scope.tab = newTab;
        };
        $scope.selected = function (checkedTab) {
            return $scope.tab === checkedTab;
        };

        $scope.backToTeams = function () {
            $location.path('/teams');
        };

    }]);

    app.controller('PlayerController', ['$scope', '$location', '$routeParams', 'appData', function ($scope, $location, $routeParams, appData) {

        $scope.players = appData.countryById($routeParams.teamId).players;
        $scope.teamId = $routeParams.teamId;

        $scope.order = 'num';
        $scope.reverse = false;

        $scope.deletePlayer = function (aNumber) {
            for (i = 0; i < $scope.players.length; i++) {
                if ($scope.players[i].num == aNumber) {
                    $scope.players.splice(i, 1);
                }
            }
        };

        $scope.linkToCreatePlayer = function (teamId) {
            $location.path('/teams/' + teamId + '/newplayer');
        };
    }]);

    app.controller('GroupController', ['$scope', '$routeParams', 'appData', function ($scope, $routeParams, appData) {

        $scope.countries = appData.getCountries();        
        $scope.teamsByGroup = function (aGroup) {
            var teamsByGroup = [];
            $scope.countries.forEach(function (item) {
                if (item.group == aGroup) {
                    teamsByGroup.push(item);
                }
            });
            return teamsByGroup.sort(order);
        };

        $scope.matches = appData.getMatches();
        $scope.getMatches = function (aTeam) {
            return appData.getMatchesByTeam(aTeam);
        };

        reset = function (team) {
            team.pj = 0;
            team.pg = 0;
            team.pe = 0;
            team.pp = 0;
            team.gf = 0;
            team.gc = 0;
        };

        $scope.updateTable = function (aMatch) {
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

        $scope.showMatches = false;
     
    }]);

    app.controller('CreatePlayerController', ['$scope', '$location', '$routeParams', 'appData', function ($scope, $location, $routeParams, appData) {

        $scope.teamId = $routeParams.teamId;                                        //temaId = id de la ruta
        $scope.team = appData.countryById($routeParams.teamId);                 //team = un pais con id (teamId)
        $scope.players = appData.countryById($routeParams.teamId).players;      //players = jugadores de idb(teamId)

        $scope.getNums = function () {                                              //Permite obtener los numeros de los jugadores
            var numeros = [];
            for (i = 1; i <= 23; i++) {
                numeros.push(i);                                                    //numeros = array de enteros del 1 al 23
            }
            angular.forEach($scope.players, function (player) {                     //elimino del array "numeros" los ya utilizados
                var index;
                index = numeros.indexOf(player.num);
                numeros.splice(index, 1);
            });
            return numeros;
        }

        $scope.addPlayer = function (aPlayer) {                                     //agregar un nuevo jugador
            $scope.team.players.push(aPlayer);
            $scope.backToPlayers($scope.team.id);
        };

        $scope.backToPlayers = function (teamId) {                                  //volver a la lista de jugadores
            $location.path('/teams/' + teamId);
        };

        $scope.backToTeams = function () {                                          //volver a los grupos de selecciones
            $location.path('/teams');
        };

        $scope.reset = function () {                                                //permite resetear el objeto "player", utilizado en el formulario
            $scope.player = {};
        };
    }]);

    app.directive('countryPlayers', function () {
        return {
            restrict: 'E',
            templateUrl: 'playersPage.html'
        };
    });

    app.directive('countryGroup', [function () {
        return {
            restrict: 'E',
            templateUrl: 'teamGroupPage.html',
        };
    }]);

    

})();