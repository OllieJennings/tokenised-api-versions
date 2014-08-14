tokenised-api-versions
======================

Just an attempt at versioning API's via tokens rather than url of accept header variations


### Prerequisites

* Must have `node`, `npm` & `mongodb` installed
* The run `npm install` for all node dependencies


### Starting the APP

* First run `npm run seed`
  * This generates the `keys` table in mongodb for the app to check against
  
* Then run `node bin/www`
* Then you can visit a url like `http://0.0.0.0:3000/users?api_key=34567` and the response will tell you which version you are hitting.


### Modifiying the versions

To modify which version of the API you use, in the `seed.js` file, all you need to change is the date when creating a key for the specific route.
