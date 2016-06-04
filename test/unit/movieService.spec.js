describe('MovieService', function () {
  beforeEach(module('iPlayerMovies'));

  var MovieService, httpBackend;

  var data = [
    {
      'title': 'Sydney White',
      'synopsis': 'Modern Snow White',
      'duration': 6060,
      'channel': 'BBC Two',
      'rating': 5
    },
    {
      'title': 'Emma',
      'synopsis': 'Jane Austen classic',
      'duration': 6840,
      'channel': 'BBC Two',
      'rating': 7
    }
  ]

  beforeEach(inject(function (_MovieService_, $httpBackend) {
    MovieService = _MovieService_;
    httpBackend = $httpBackend;
  }));

  it('gets a list of movies from the server', function () {
    httpBackend.expectGET('http://localhost:8000/movies/').respond(data);
    var movie1 = {
      'title': 'Sydney White',
      'synopsis': 'Modern Snow White',
      'duration': 6060,
      'channel': 'BBC Two',
      'rating': 5
    };
    var movie2 = {
      'title': 'Emma',
      'synopsis': 'Jane Austen classic',
      'duration': 6840,
      'channel': 'BBC Two',
      'rating': 7
    };
    MovieService.getMovie().then(function (result) {
      expect(result).toEqual([movie1, movie2]);
    });
    httpBackend.flush();
  });
});
