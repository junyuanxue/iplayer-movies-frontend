describe('MovieController', function () {
  beforeEach(module('iPlayerMovies'));

  var ctrl;

  beforeEach(inject(function ($controller) {
    ctrl = $controller('MovieController');
  }));

  it('has an empty of movies', function () {
    expect(ctrl.movies).toEqual([]);
  });
});
