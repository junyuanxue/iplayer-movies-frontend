describe('app', function () {
  it('has a home page title', function () {
    browser.get('/');
    expect(browser.getTitle()).toEqual('What\'s on BBC iPlayer?');
  });
});
