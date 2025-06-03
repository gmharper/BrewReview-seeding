# BrewReview-seeding

### TESTING
**NOTE: This is for testing purposes! when seeding a collection all documents in that collection are removed before seeding!**
Don't do this if there are documents in the collection you want to keep that are not contained in the db/data data files!  
Check if there are any documents currently in the firestore db that are not contained in the data files in db/data.  

`git clone thisrepo`

#### The data to be seeded is contained in db/data

#### To seed a collection in the firestore database:

`cd seed`  
`node runseed.js type`  
*replace type with the type you want to seed eg. beers*  

#### To delete all documents from a collection:
`cd delete`
`node deleteData.js type`
*replace type with the type you want to delete eg. beers*

**NOTE: when the terminal hangs up after running a command the command likely worked, just control/command c and check the database to see if the data is there**

### PRODUCTION
To-do
when seeding the production database, documents should not be removed prior to seeding