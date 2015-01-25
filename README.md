## Project Chef
# A recipe storage/data application written entirely in JS (MEAN Stack)

# To set up:
1. Clone the repo
2. Make sure you have mongodb installed and running
3. Make sure you have node/npm installed
4. Install bower if you haven't already (`npm install -g bower`)
5. Install gulp if you haven't already (`npm install -g gulp`)
6. Run `npm install && bower install`
7. Set a db.js file in config/ like:
  module.exports = { url : 'mongodb://localhost/database_name-dev' }
8. Run `gulp`.
  a. Gulp tasks include: live server reload, sass compilation