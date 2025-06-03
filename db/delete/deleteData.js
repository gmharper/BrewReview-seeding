import { FIRESTORE_DB } from "../../firebaseconfig.js";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";


export async function deleteData () {
    let type = ""
    if (process.argv[2]) {
        type = process.argv[2]
    }
    let example = ""

    switch (process.argv[2]) {
        case "beers":
            type = "beers"
            example = "example_beer"
            break
        case "breweries":
            type = "breweries"
            example = "example_brewery"
            break
        case "categories":
            type = "categories"
            example = "example_category"
            break
        case "reviews":
            type = "reviews"
            example = "example_review"
            break
        case "users":
            type = "users"
            example = "example_user"
            break
    }

    const dataRef = collection(FIRESTORE_DB, `${type}`);

    return getDocs(dataRef)
        .then((querySnapshot) => {

            let compiledData = [];
            let newItem = {};

            querySnapshot.docs.map((doc) => {
                newItem = { ...doc.data() };
                newItem.id = doc.id;
                compiledData.push(newItem)
            }) 
            return compiledData
        })
        .then((data) => {
            let promiseArray = []
            data.map((item) => {
                if (!(item.id === example)) {
                    promiseArray.push(deleteDoc(doc(FIRESTORE_DB, `${type}`, item.id)))
                }
            }) 
            return promiseArray
        })
        .then((promises) => {
            return Promise.all(promises)
        })
}