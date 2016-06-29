# What's on BBC iPlayer

![Imgur](http://i.imgur.com/4TWmGc6.png)

## About :tv:

This is a simple web app that fetches and displays a list of available movies from the BBC iPlayer API with their ratings, which are provided by the Movie Database API.

The front-end is built with AngularJS which makes API calls and fetches data from a [Django server](https://github.com/junyuanxue/iplayer-movies-server). It is served up with Node.js.

## To run the app :arrow_forward:

Clone the server repo:
```
$ git clone https://github.com/junyuanxue/iplayer-movies-server.git
$ cd iplayer-movies-server
```
Create and start your virtual environment:
```
$ pip3 install virtualenv
$ virtualenv env
$ source env/bin/activate
```
Install dependencies:
```
$ pip install -r requirements.txt
```
You'll need an API key for the [Movie Database API](https://www.themoviedb.org/documentation/api). Once you've registered and acquired your token, set up your local environment variables:
```
$ export MOVIE_DB_API_KEY=your_api_key_here
```
Then run the server:
```
$ python manage.py runserver
```
If you go to `http://localhost:8000/movies/` you'll then see a lovely json file containing a list of movies with their ratings.

To see these movies more beautifully displayed, clone the front-end repo and install dependencies:
```
$ git clone https://github.com/junyuanxue/iplayer-movies-frontend.git
$ cd iplayer-movies-frontend
$ npm install
$ bower install
```
Then run the app:
```
$ npm start
```
Visit `http://localhost:3000` and voilà! Click on the links to watch. :sunglasses:

## Testing :white_check_mark:

I used Karma for unit tests and Protractor for e2e testing. To mock out API requests to the server I used `$httpBackend` in unit tests and `protractor-http-mock` in feature tests.

To run Karma tests:
```
$ npm run karma
```
To run Protractor tests, you need to have 3 terminal tabs open. In the first tab, run webdriver manager:
```
$ webdriver-manager start
```
In the second tab, serve up the app:
```
$ npm start
```
Finally, run Protractor in the third tab:
```
$ npm run protractor
```

## Tools used in this repo :wrench:
* AngularJS
* $http
* $httpBackend
* Protractor
* Karma
* Jasmine
* protractor-http-mock
* Node.js
* Express.js
* BBC iPlayer API
* Movie Database API

## Author :cat:
Junyuan Xue

[Github](https://github.com/junyuanxue)
| [CV](https://github.com/junyuanxue/cv)
| [Blog](https://spinningcodes.wordpress.com/)
