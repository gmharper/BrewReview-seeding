import { FIRESTORE_DB } from "../../firebaseconfig.js"
import { doc, setDoc } from "firebase/firestore";

import { deleteData } from "../delete/deleteData.js";

import { beersData, breweriesData, categoriesData, reviewsData, usersData } from "../data/index.js";

let promiseArray = []
let dataArray = [...beersData]
export const seedData = (type="beers") => {
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
        let idType = data.id
        if (type === "users") {
            idType = data.username
        }

        promiseArray.push(setDoc(doc(FIRESTORE_DB, type, idType), 
            {...data}) )
        })
    )
    return Promise.all(promiseArray)
}


