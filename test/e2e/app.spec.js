describe('iPlayerMovies', function () {
  var mock = require('protractor-http-mock');

  beforeEach(function () {
    mock([{
      request: {
        path: 'http://localhost:8000/movies/',
        method: 'GET',
      },
      response: {
        data: [
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
      }
    }]);

    browser.get('/');
  });

  afterEach(function () {
    mock.teardown();
  });

  it('has a home page title', function () {
    expect(browser.getTitle()).toEqual('What\'s on BBC iPlayer');
  });

  it('fetchs and displays a list of movies', function () {
    var titles = $$('.movie-info .title');
    var ratings = $$('.movie-info .rating');
    var synopses = $$('.movie-info p:nth-child(2)');
    var duration = $$('.movie-info p:nth-child(3)');

    expect(titles.first().getText()).toEqual('Sydney White');
    expect(ratings.first().getText()).toEqual('5/10');
    expect(ratings.last().getText()).toEqual('7/10');
    expect(synopses.last().getText()).toEqual('Jane Austen classic');
    expect(duration.first().getText()).toEqual('101 mins');
    expect(duration.last().getText()).toEqual('114 mins');
  });
});
