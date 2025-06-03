import { FIRESTORE_DB } from "../../firebaseconfig.js";
import { collection, getDocs } from "firebase/firestore";

export async function fetchData () {
    let type = "beers"
    if (process.argv[2]) {
        type = process.argv[2]
    }
    
    const dataRef = collection(FIRESTORE_DB, `${type}`);

    return getDocs(dataRef)
        .then((querySnapshot) => {

            let compiledData = [];
            let newItem = {};

            querySnapshot.docs.map((doc) => {
                newItem = { ...doc.data() };
                newItem.id = doc.id;
                compiledData.push(newItem);
            });

            return compiledData;
        })
}