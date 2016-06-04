describe('movieFactory', function () {
  beforeEach(module('iPlayerMovies'));

  var movie;
  var rating = 7;
  var lengthInSeconds = 6840;

  beforeEach(inject(function (movieFactory) {
    movie = new movieFactory('Emma', rating, 'Jane Austen classic', lengthInSeconds, 'BBC Two')
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

  it('has a channel', function () {
    expect(movie.channel).toEqual('BBC Two');
  });
});
