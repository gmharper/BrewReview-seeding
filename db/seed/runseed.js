import { deleteData } from "../delete/deleteData.js";
import { seedData } from "./seedData.js";

import { beersData, breweriesData, categoriesData, reviewsData, usersData } from "../data/index.js";

export async function runSeed () {
    let type = "beers"
    if (process.argv[2]) {
        type = process.argv[2]
    }
    
    let obj = beersData

    switch (process.argv[2]) {
        case "beers":
            obj = beersData
            break
        case "breweries":
            obj = breweriesData
            break
        case "categories":
            obj = categoriesData
            break
        case "reviews":
            obj = reviewsData
            break
        case "users":
            obj = usersData
            break
    }

   try {
        await deleteData(type)
    }
    catch(err) {
        console.error(err)
    }
    finally {
        seedData(type, obj) 
    }
}

runSeed()