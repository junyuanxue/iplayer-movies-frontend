angular
  .module('iPlayerMovies')
  .factory('movieFactory', function () {
    var Movie = function (title, rating, synopsis, duration, channel) {
      this.title = title;
      this.rating = rating;
      this.synopsis = synopsis;
      this.duration = duration;
      this.channel = channel;
    };

    return Movie;
  });
