describe('movieFactory', function () {
  beforeEach(module('iPlayerMovies'));

  var movie;
  var rating = 7;
  var lengthInSeconds = 6840;
  var pid = 'b007969t';
  var BASE_URL = 'http://www.bbc.co.uk/iplayer/episode/';

  beforeEach(inject(function (movieFactory) {
    movie = new movieFactory(
      'Emma', rating, 'Jane Austen classic', lengthInSeconds, pid
    );
  }));

  it('has a title', function () {
    expect(movie.title).toEqual('Emma');
  });

  it('has a rating', function () {
    expect(movie.rating).toEqual(rating);
  });

  it('has a synopsis', function () {
    expect(movie.synopsis).toEqual('Jane Austen classic');
  });

  it('has a duration', function () {
    expect(movie.duration).toEqual(lengthInSeconds);
  });

  it('has a programme id', function () {
    expect(movie.pid).toEqual(pid);
  });

  it('has a url', function () {
    expect(movie.url).toEqual(BASE_URL + pid);
  });
});
