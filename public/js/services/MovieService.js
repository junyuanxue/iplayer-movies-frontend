angular
  .module('iPlayerMovies')
  .service('MovieService', MovieService);

MovieService.$inject = ['$http', 'movieFactory'];

function MovieService($http, movieFactory) {
  this.getMovies = function () {
    var BASE_URL = 'http://localhost:8000';
    return $http.get(BASE_URL + '/movies/')
      .then(_handleMovieData)
  }

  function _handleMovieData(response) {
    return response.data.map(_createMovieObject);
  }

  function _createMovieObject(movie) {
    return new movieFactory(
      movie.title,
      movie.rating,
      movie.synopsis,
      movie.duration,
      movie.channel
    );
  }
}
