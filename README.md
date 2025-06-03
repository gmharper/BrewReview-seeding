# BrewReview-seeding

### TESTING

`git clone thisrepo`

------------------------

#### The data to be seeded is contained in db/data:
*collection_ids: beers, breweries, categories, reviews, users*

-------------------------

#### To seed a collection in the firestore database:

`cd seed`  
`node seed type`  
or  
`npm run seed-type`  
*replace type with the collection_id you want to seed eg. beers*  

-------------------------

#### To delete all documents from a collection:
`cd delete`  
`node delete type`  
or  
`npm run delete-type`  
*replace type with the collection_id you want to delete eg. beers*  

**NOTE: when the terminal hangs up after running a command the command likely worked, just control/command c and check the database to see if the data is there**

---------------------------

### PRODUCTION
**To-do**
when seeding the production database, documents should not be removed prior to seeding