import axios from 'axios'

function getBeerFromApi () {
    axios
    .get('https://winevybe.com/westmalle-tripel/')
    .then((result) => {
        console.log(result
        )
    })
    .then((result) => {
        console.log(result)
    })
}

getBeerFromApi()