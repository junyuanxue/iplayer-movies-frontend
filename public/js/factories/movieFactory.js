angular
  .module('iPlayerMovies')
  .factory('movieFactory', function () {
    var Movie = function (title, rating, synopsis, duration, pid) {
      var BASE_URL = 'http://www.bbc.co.uk/iplayer/episode/';

      this.title = title;
      this.rating = rating;
      this.synopsis = synopsis;
      this.duration = duration;
      this.pid = pid;
      this.url = BASE_URL + pid;
    };

    return Movie;
  });
