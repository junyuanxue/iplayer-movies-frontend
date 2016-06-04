describe('MovieController', function () {
  beforeEach(module('iPlayerMovies'));

  var ctrl, MovieService;

  beforeEach(inject(function ($controller, _MovieService_) {
    ctrl = $controller('MovieController');
    MovieService = _MovieService_;
  }));

  describe('controller set up', function () {
    it('has an empty of movies', function () {
      expect(ctrl.movies).toEqual([]);
    });
  });

  describe('get movies from service', function () {
    it('instructs service to get a list of movies', function () {
      spyOn(MovieService, 'getMovies').and.callThrough();
      expect(MovieService.getMovies).toHaveBeenCalled;
    });

    it('updates the movies', function () {

    });
  });
});
