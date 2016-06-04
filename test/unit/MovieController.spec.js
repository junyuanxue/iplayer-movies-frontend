describe('MovieController', function () {
  beforeEach(module('iPlayerMovies'));

  var ctrl, MovieService, movieFactory, httpBackend;
  var BASE_URL = 'http://localhost:8000';
  var data = [
    {
      'title': 'Sydney White',
      'synopsis': 'Modern Snow White',
      'duration': 6060,
      'pid': 'b01ngx7r',
      'rating': 5
    },
    {
      'title': 'Emma',
      'synopsis': 'Jane Austen classic',
      'duration': 6840,
      'pid': 'b007969t',
      'rating': 7
    }
  ];

  beforeEach(inject(function ($controller, _MovieService_, _movieFactory_, $httpBackend) {
    ctrl = $controller('MovieController');
    MovieService = _MovieService_;
    movieFactory = _movieFactory_;
    httpBackend = $httpBackend;

    httpBackend.expectGET(BASE_URL + '/movies/').respond(data);
    httpBackend.flush();
  }));

  it('instructs service to get a list of movies', function () {
    spyOn(MovieService, 'getMovies').and.callThrough();

    expect(MovieService.getMovies).toHaveBeenCalled;
  });

  it('updates the movies', function () {
    var movie1 = new movieFactory(
      'Sydney White', 5, 'Modern Snow White', 6060, 'b01ngx7r'
    );
    var movie2 = new movieFactory(
      'Emma', 7, 'Jane Austen classic', 6840, 'b007969t'
    );

    expect(ctrl.movies).toEqual([movie1, movie2]);
  });
});
