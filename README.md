# ScoreBoard

This is a scoreboard application that was built using Angular. 
It's designed to satisfy the following requirements:
* You have 5 users showing in a leaderboard
* All users start with 0 points
* As you click +/-, the leaderboard updates and users are re-ordered based on score
* Names sorted alphabetically if they are tied

Added one more, just for the heck of it:
* Minimum score is zero (no negative scores)

To run this application locally, there are the following requirements:
* Nodejs & npm: https://nodejs.org/en/
* angular cli (after installing Nodejs, open and admin elevated terminal and run `npm i -g @angular/cli`

Once installed: 
* Open a terminal and navigate to the directory containing this README.
* Execute `npm i` to install dependencies.
* Execute the command `ng serve` to spin up an instance of this application in your browser.
* Navigate to http://localhost:4200/ in your browser. The application should now be accessible.

To run unit tests:
* Open a terminal and navigate to the directory containing this README.
* Execute the command `ng test` to trigger karma tests in a chrome dev instance (may require firewall permissions).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).