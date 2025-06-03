import { FIRESTORE_DB } from "../../firebaseconfig.js"
import { doc, setDoc } from "firebase/firestore";

import { deleteData } from "../delete/deleteData.js";

import { beersData, breweriesData, categoriesData, reviewsData, usersData } from "../data/index.js";

let promiseArray = []
let type = "beers"
let dataArray = [...beersData]
export const seedData = (type) => {
        switch (process.argv[2]) {
            case "beers":
                dataArray = [...beersData]
                break
            case "breweries":
                dataArray = [...breweriesData]
                break
            case "categories":
                dataArray = [...categoriesData]
                break
            case "reviews":
                dataArray = [...reviewsData]
                break
            case "users":
                dataArray = [...usersData]
                break
        }
    
    (dataArray.forEach((data) => {
        promiseArray.push(setDoc(doc(FIRESTORE_DB, type, data.id), 
            {...data}) )
        })
    )
    return Promise.all(promiseArray)
}


