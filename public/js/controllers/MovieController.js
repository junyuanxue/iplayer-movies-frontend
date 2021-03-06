angular
  .module('iPlayerMovies')
  .controller('MovieController', MovieController);

MovieController.$inject = ['MovieService'];

function MovieController(MovieService) {
  var vm = this;

  MovieService.getMovies()
    .then(_updateMovies);

  function _updateMovies (movies) {
    vm.movies = movies;
  }
}
