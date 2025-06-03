import { FIRESTORE_DB } from "../../firebaseconfig.js";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";

export async function deleteData (type) {
    let example = ""

    switch (process.argv[2]) {
        case "beers":
            example = "example_beer"
            break
        case "breweries":
            example = "example_brewery"
            break
        case "categories":
            example = "example_category"
            break
        case "reviews":
            example = "example_review"
            break
        case "users":
            example = "example_user"
            break
    }

    const dataRef = collection(FIRESTORE_DB, type);

    getDocs(dataRef)
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
                    promiseArray.push(deleteDoc(doc(FIRESTORE_DB, type, item.id)))
                }
            }) 
            return promiseArray
        })
        .then((promises) => {
            return Promise.all(promises)
        })
}
