angular
  .module('iPlayerMovies')
  .controller('MovieController', MovieController);

MovieController.$inject = [];

function MovieController() {
  var vm = this;
  vm.movies = [];
};
