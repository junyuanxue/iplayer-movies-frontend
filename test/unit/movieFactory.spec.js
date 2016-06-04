describe('movieFactory', function () {
  beforeEach(module('iPlayerMovies'));

  var movie;

  beforeEach(inject(function (movieFactory) {
    movie = new movieFactory('Emma', 7, 'Jane Austen classic', 6840, 'BBC Two')
  }));

  it('has a title', function () {
    expect(movie.title).toEqual('Emma');
  });
});
