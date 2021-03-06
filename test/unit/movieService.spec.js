describe('MovieService', function () {
  beforeEach(module('iPlayerMovies'));

  var MovieService, movieFactory, httpBackend;
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

  beforeEach(inject(function (_MovieService_, _movieFactory_, $httpBackend) {
    MovieService = _MovieService_;
    movieFactory = _movieFactory_;
    httpBackend = $httpBackend;
  }));

  it('gets a list of movies from server', function () {
    httpBackend.expectGET(BASE_URL + '/movies/').respond(data);
    var movie1 = new movieFactory(
      'Sydney White', 5, 'Modern Snow White', 6060, 'b01ngx7r'
    );
    var movie2 = new movieFactory(
      'Emma', 7, 'Jane Austen classic', 6840, 'b007969t'
    );

    MovieService.getMovies().then(function (result) {
      expect(result).toEqual([movie1, movie2]);
    });

    httpBackend.flush();
  });
});
