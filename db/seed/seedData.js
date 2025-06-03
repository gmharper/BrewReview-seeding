import { FIRESTORE_DB } from "../../firebaseconfig.js"
import { doc, setDoc } from "firebase/firestore"; 

import { beersData, breweriesData, categoriesData, reviewsData, usersData } from "../data/index.js"

import { deleteData } from "../delete/deleteData.js";

let promiseArray = []
export async function seedData (type, dataArray) {
    // switch (type) {
    //     case "beers":
    //     case "breweries":
    //     case "categories":
    //     case "reviews":
    //     case "users": 
    // }

    (dataArray.map((data) => {
        promiseArray.push(setDoc(doc(FIRESTORE_DB, `${type}`, data.id), 
            {...data}) )
        })
    )
    return Promise.all(promiseArray)
}


