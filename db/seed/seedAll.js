const { 
        beersData,
        breweriesData,
        categoriesData,
        reviewsData,
        usersData
    } = require("../data/index.js")

import { deleteData } from "../delete/deleteData.js"
import { seedData } from "./seedData.js"


seedData(beersData)