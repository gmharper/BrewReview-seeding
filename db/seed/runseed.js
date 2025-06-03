import { deleteData } from "../delete/deleteData.js";
import { seedData } from "./seedData.js";

import { beersData, breweriesData, categoriesData, reviewsData, usersData } from "../data/index.js";

async function runSeed () {
   try {
        await deleteData("beers")
    }
    catch(err) {
        console.error(err)
    }
    finally {
        seedData("beers", beersData) 
    }
}

runSeed()
